import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { CoinProps } from '../home'
import styles from './detail.module.css'

interface ResponseData {
  data: CoinProps
}

interface ErrorData {
  error: string;
}

type DataProps = ResponseData | ErrorData

export function Detail() {
  const { cripto } = useParams();
  const navigate = useNavigate();

  const [coin, setCoin] = useState<CoinProps>()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoin(){
      try{
        fetch(`https://api.coincap.io/v2/assets/${cripto}`)
        .then(response => response.json())
        .then((data: DataProps) => {
          
          if("error" in data){
            navigate("/")
            return;
          }

          const price = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          })
    
          const priceCompact = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            notation: "compact"
          })

          const resultData = {
            ...data.data,
            formatedPrice: price.format(Number(data.data.priceUsd)),
            formatedMarket: priceCompact.format(Number(data.data.marketCapUsd)),
            formatedVolume: priceCompact.format(Number(data.data.volumeUsd24Hr))
          }

          setCoin(resultData)
          setLoading(false);

        })


      }catch(err){
        console.log(err);
        navigate("/")
      } 
    }

    getCoin();
  }, [cripto, navigate]) 

  useEffect(() => {
    const ws = new WebSocket(`wss://ws.coincap.io/prices?assets=${cripto}`);

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData[cripto as string]) {
        const newPrice = Number(parsedData[cripto as string]);
        const priceFormatter = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        });
        
        setCoin((prevCoin) => {
          if (!prevCoin) return prevCoin;
          const oldPrice = Number(prevCoin.priceUsd);
          return {
            ...prevCoin,
            priceUsd: parsedData[cripto as string],
            formatedPrice: priceFormatter.format(newPrice),
            priceDiff: oldPrice < newPrice ? 'up' : oldPrice > newPrice ? 'down' : prevCoin.priceDiff
          }
        })
      }
    };

    return () => {
      ws.close();
    }
  }, [cripto]);


  if(loading || !coin){
    return(
      <div className={styles.container}>
        <h4 className={styles.center}>Carregando detalhes...</h4>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.center}>{coin?.name}</h1>
      <h1 className={styles.center}>{coin?.symbol}</h1>

      <section className={styles.content}>
        <img
          src={`https://assets.coincap.io/assets/icons/${coin?.symbol.toLowerCase()}@2x.png`}
          alt="Logo da moeda"
          className={styles.logo}
        />
        <h1>{coin?.name} | {coin?.symbol}</h1>

        <p>
          <strong>Preço: </strong>
          <span key={coin?.priceUsd} className={coin?.priceDiff === 'up' ? styles.priceUp : coin?.priceDiff === 'down' ? styles.priceDown : undefined}>
            {coin?.formatedPrice}
          </span>
        </p>

        <a>
          <strong>Mercado: </strong>{coin?.formatedMarket}
        </a>

        <a>
          <strong>Volume: </strong>{coin?.formatedVolume}
        </a>

        <a>
          <strong>Mudança 24h: </strong><span className={Number(coin?.changePercent24Hr) > 0 ? styles.protift : styles.loss} >{Number(coin?.changePercent24Hr).toFixed(3)}</span>
        </a>


      </section>

    </div>
  )
}