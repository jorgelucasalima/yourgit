import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  
  input {
    margin-left: 10px;
    text-align: left;

    padding: 1rem .875rem;
    box-sizing: border-box; 

    width: 500px;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    font-size: large;
    color: var(--cor-fonte);

    border-radius: 6px;
    border: none;

    background: #202024;
  }

  button {
    margin-left: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    
    border: none;
    color: var(--cor-fonte);
    border-radius: 6px;
    height: 50px;
    width: 100px;
    background: var(--cor-botao);

    cursor: pointer;

  }


`;