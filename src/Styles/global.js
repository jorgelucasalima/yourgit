import { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`

  :root {
    --cor-fundo: #121214;
    --cor-fonte: #E1E1E6;

    --cor-de-texto: #FFFFFF;

    --cor-botao: #8257E6;

    --cor-verde: #04D361;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1088px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }


  body {
    background: var(--cordefundo);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] { 
    opacity: 0.6;
    cursor: not-allowed;
  }

`