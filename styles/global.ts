import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }


  button {
    cursor: pointer;
  }

  :root {
    --green: ##4F9419;
    --green-button: #006C18;
    --text-title-card: #4F9419;
    --text-body: #000000;
    --text-input: #868686;
    --shape: #ffffff;
    --backgroud-header: #BC52DE;
    
  }
`;
