import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  table {
    
    padding: 40px 170px;
    margin: 30px;
    
    background: #202024;
    border-radius: 6px;
    border: none;

  }

  td {
    color: var(--cor-fonte);
    font-size: larger;
    

    text-align: left;
    justify-content: space-between;
  }

  tr {
    color: var(--cor-fonte);
    font-size: larger;
  }
  

`