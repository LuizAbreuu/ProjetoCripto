# 🪙 Projeto Cripto - Aplicação de Criptom oedas

Uma aplicação moderna, rápida e responsiva para visualizar informações em tempo real sobre criptom oedas. O projeto implementa boas práticas de desenvolvimento frontend com React, TypeScript e arquitetura escalável.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Boas Práticas de Código](#-boas-práticas-de-código)
- [Contribuindo](#-contribuindo)

## 🎯 Sobre o Projeto

**ProjetoCripto** é uma aplicação web que consome a API pública CoinCap para exibir:
- Lista paginada de criptom oedas com principais informações
- Detalhes completos de cada criptom oeda
- Busca e filtro de criptom oedas
- Interface responsiva e intuitiva

A aplicação foi desenvolvida utilizando as mais modernas práticas de desenvolvimento frontend, enfatizando performance, manutenibilidade e experiência do usuário.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.0 | Biblioteca para construir interfaces de usuário |
| **TypeScript** | ~5.9.3 | Tipagem estática para JavaScript |
| **Vite** | 8.0.0-beta.13 | Build tool e dev server ultrarrápido |
| **React Router** | 7.13.1 | Roteamento cliente entre páginas |
| **React Icons** | 5.5.0 | Ícones SVG como componentes React |
| **CSS Modules** | Nativo | Escopo local para estilos CSS |
| **ESLint** | 9.39.1 | Ferramenta de linting para código limpo |
| **TypeScript ESLint** | 8.48.0 | Regras ESLint com suporte a TypeScript |

## ✨ Funcionalidades

### 🏠 Página Home
- Listagem de criptom oedas com limite de 10 por página
- Exibição de informações: nome, símbolo, preço em USD, variação 24h, rank, supply e market cap
- **Paginação**: Navegação entre páginas de criptom oedas
- **Busca**: Campo de busca para filtrar criptom oedas por nome ou símbolo
- **Navegação**: Clique em qualquer criptom oeda para ver detalhes completos

### 📊 Página de Detalhes
- Informações completas da criptom oeda selecionada
- Formatação de valores monetários automática
- Tratamento de erros com redirecionamento para home
- Indicador de carregamento (loading state)

### 🎨 Interface
- **Header**: Componente de navegação com logo
- **Layout**: Estrutura padrão com outlet para roteamento
- **Responsividade**: Design adaptável para diferentes tamanhos de tela
- **Ícones**: Utilização de react-icons para melhorar UX

### ⚠️ Página 404
- Redirecionamento automático para rotas não encontradas
- Mensagem informativa ao usuário

## 📁 Estrutura do Projeto

```
projetocripto/
│
├── 📄 package.json           # Dependências e scripts do projeto
├── 📄 tsconfig.json          # Configuração base do TypeScript
├── 📄 tsconfig.app.json      # Config TypeScript para aplicação
├── 📄 tsconfig.node.json     # Config TypeScript para Node
├── 📄 vite.config.ts         # Configuração do Vite
├── 📄 eslint.config.js       # Configuração de linting
├── 📄 README.md              # Este arquivo
├── 📄 index.html             # HTML raiz
│
├── 📁 public/                # Assets estáticos públicos
│
├── 📁 src/                   # Código-fonte da aplicação
│   │
│   ├── 📄 main.tsx           # Arquivo de entrada do React
│   ├── 📄 App.tsx            # Componente raiz da aplicação
│   ├── 📄 App.css            # Estilos globais
│   ├── 📄 index.css          # Reset e estilos base
│   ├── 📄 vite-env.d.ts      # Types do Vite
│   ├── 📄 router.tsx         # Configuração de rotas
│   │
│   ├── 📁 assets/            # Arquivos de mídia
│   │   └── logo.svg          # Logo da aplicação
│   │
│   ├── 📁 components/        # Componentes reutilizáveis
│   │   ├── 📁 header/
│   │   │   ├── index.tsx     # Componente de cabeçalho
│   │   │   └── header.module.css
│   │   │
│   │   └── 📁 layout/
│   │       └── index.tsx     # Layout padrão da aplicação
│   │
│   └── 📁 pages/             # Páginas/rotas da aplicação
│       ├── 📁 home/
│       │   ├── index.tsx     # Página inicial com lista de criptom oedas
│       │   └── home.module.css
│       │
│       ├── 📁 detail/
│       │   ├── index.tsx     # Página de detalhes da criptom oeda
│       │   └── detail.module.css
│       │
│       └── 📁 notfound/
│           └── index.tsx     # Página 404
```

### 📂 Explicação das Pastas

#### `src/components/`
Componentes reutilizáveis que são usados em múltiplas páginas:
- **header**: Componente de navegação com logo e links
- **layout**: Wrapper com Header e Outlet para renderizar páginas filhas

#### `src/pages/`
Páginas/rotas da aplicação, cada uma com seu próprio escopo:
- **home**: Exibe lista paginável de criptom oedas com busca
- **detail**: Mostra detalhes completos de uma criptom oeda específica
- **notfound**: Página exibida para rotas inválidas

#### `src/assets/`
Recursos estáticos como imagens SVG, ícones, etc.

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# 1. Clone ou acesse o repositório
cd projetocripto

# 2. Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento com HMR (Hot Module Replacement)
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Compila TypeScript e gera bundle otimizado
npm run build

# Visualiza o build em produção localmente
npm run preview
```

### Linting

```bash
# Verifica o código em busca de problemas
npm run lint
```

## ✅ Boas Práticas de Código

Este projeto implementa diversas boas práticas reconhecidas na comunidade de desenvolvimento:

### 🏗️ Arquitetura

1. **Separação de Conceitos**
   - Componentes isolados em pastas separadas
   - Páginas distintas dos componentes reutilizáveis
   - Estilos modularizados com CSS Modules
   - Lógica de negócio separada da apresentação

2. **Componentização**
   - Componentes pequenos e focados em uma responsabilidade
   - Props bem definidas com TypeScript
   - Layout padrão para evitar duplicação
   - Exportação nomeada para melhor tree-shaking

### 🎯 TypeScript

```tsx
// Interfaces bem definidas para type safety
interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  vwap24Hr: string;
  changePercent24Hr: string;
  rank: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
}

// Uso de tipos importados
import type { CoinProps } from '../home'
import type { FormEvent } from 'react'

// Type unions para tratamento de erros
interface ResponseData {
  data: CoinProps
}

interface ErrorData {
  error: string;
}

type DataProps = ResponseData | ErrorData
```

**Benefícios:**
- ✅ Detecção de erros em tempo de desenvolvimento
- ✅ Autocompletar melhorado no editor
- ✅ Documentação automática dos dados
- ✅ Refatorações mais seguras

### 🔄 React Hooks

```tsx
// Uso de hooks modernos com dependências explícitas
const [coins, setCoins] = useState<CoinProps[]>([]);
const [offset, setOffset] = useState(0);
const [loading, setLoading] = useState(true);
const { cripto } = useParams();
const navigate = useNavigate();

// Effects com dependências claras
useEffect(() => {
  getData();
}, [offset]) // Atualiza quando offset muda

useEffect(() => {
  async function getCoin() {
    // Lógica assíncrona
  }
  getCoin();
}, [cripto]) // Busca moeda quando param muda
```

**Padrões utilizados:**
- `useState`: Gerenciamento de estado local
- `useEffect`: Efeitos colaterais e ciclo de vida
- `useParams`: Captura parâmetros da rota
- `useNavigate`: Navegação programática
- Dependências explícitas em useEffect

### 🎨 CSS Modules

```css
/* Estilos com escopo local */
.container {
  display: flex;
  padding: 20px;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

```tsx
// Uso seguro em componentes
import styles from './home.module.css'

export function Home() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Clique</button>
    </div>
  )
}
```

**Vantagens:**
- ✅ Sem conflitos de nomes de classes
- ✅ Melhor performance e bundle menor
- ✅ Fácil manutenção e refatoração
- ✅ Escopo local automático

### 🔍 Formatação de Dados

```tsx
// Uso de Intl API para formatação internacional
const price = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}).format(parseFloat(priceUsd))

const priceCompact = Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1
}).format(parseFloat(marketCapUsd))
```

**Benefícios:**
- ✅ Formatação nativa do navegador
- ✅ Suporte a múltiplas moedas/idiomas
- ✅ Sem dependências externas
- ✅ Performance

### 🛡️ Tratamento de Erros

```tsx
// Try-catch com tratamento apropriado
try {
  const response = await fetch(url)
  const data = await response.json()
  
  // Verificação de erro na resposta
  if("error" in data) {
    navigate("/")
    return;
  }
  
  // Processamento de dados
  setCoins(formattedCoins)
  setLoading(false)
} catch (error) {
  console.error("Erro ao buscar dados:", error)
  setLoading(false)
}
```

**Práticas:**
- ✅ Try-catch para exceções
- ✅ Verificação de erros na resposta
- ✅ Estados de carregamento
- ✅ Redirecionamento em erro

### ⚡ Roteamento Avançado

```tsx
// React Router v7 com estrutura aninhada
const router = createBrowserRouter([
  {
    element: <Layout/>, // Layout padrão compartilhado
    children: [
      { 
        path: "/", 
        element: <Home/> 
      },
      { 
        path: "/detail/:cripto", // Parâmetro dinâmico
        element: <Detail/> 
      },
      { 
        path: "*", // Wildcard para 404
        element: <Notfound/> 
      }
    ]
  }
])
```

**Benefícios:**
- ✅ Layouts compartilhados
- ✅ Rotas aninhadas
- ✅ Wildcard para 404
- ✅ Parâmetros dinâmicos

### 🔧 Build Tool - Vite

```bash
# Desenvolvimento rápido com HMR
npm run dev

# Build otimizado com tree-shaking
npm run build
```

**Vantagens:**
- ⚡ Dev server ultrarrápido (< 100ms)
- 📦 Bundle otimizado automaticamente
- 🔄 HMR instantâneo
- 📝 Melhor mensagens de erro
- 🎯 Code splitting automático

### 📋 ESLint e Code Quality

Configuração robusta de linting para garantir:
- ✅ Consistência de código
- ✅ Detecção de práticas ruins
- ✅ Padrão de código em equipe
- ✅ Segurança e performance

```bash
npm run lint
```

### 📱 Responsividade

Utilização de CSS responsivo para:
- Desktop: 1920px e acima
- Tablet: 768px - 1919px
- Mobile: Abaixo de 768px

Implementação com media queries no CSS Modules.

### 🧩 Composição de Componentes

```tsx
// Componentes pequenos e reutilizáveis
function Header() { /* ... */ }
function Layout() { /* ... */ }
function Home() { /* ... */ }
function Detail() { /* ... */ }

// Composição aninhada
<Layout>
  <Home /> // ou <Detail />
</Layout>
```

### 🔌 API Integration

```tsx
// Separação clara de responsabilidades
async function getData() {
  // 1. Fetch
  const response = await fetch(url)
  
  // 2. Parse
  const data = await response.json()
  
  // 3. Transform
  const formattedCoins = data.map(coin => ({
    ...coin,
    formatedPrice: formatPrice(coin.priceUsd)
  }))
  
  // 4. Update state
  setCoins(formattedCoins)
}
```

## 📊 Fluxo de Dados

```
API (CoinCap)
    ↓
Home.tsx / Detail.tsx (componentes página)
    ↓
useState + useEffect (hooks)
    ↓
Formatação de dados
    ↓
Renderização JSX
    ↓
CSS Modules (estilos)
```

## 🚀 Performance

- ✅ Code splitting automático
- ✅ Tree-shaking de dependências
- ✅ Minificação de assets
- ✅ CSS scoped (evita duplicação)
- ✅ Lazy loading de rotas

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📝 Licença

Este projeto está sob licença MIT.

---

**Desenvolvido com ❤️ usando React 19, TypeScript e Vite**
