import { useState } from 'react'


import {Container} from './styles'
import { FaSearch, FaGithubAlt } from 'react-icons/fa'





export default function PesquisarGit() {

  const [seuGit, setSeuGit] = useState('')
  


  //função para mudar o git
  function mudarGit(e) {
    setSeuGit(e.target.value)
  }

  return (

    <Container>
      <FaGithubAlt size={27} color='#FFFFFF'/>
      
      <form onSubmit={ () => {} }>
        <input 
          type="text" 
          placeholder='Ex: cuscuzcumshark'
          value={seuGit}
          onChange={mudarGit}
        />

        <button>
          <FaSearch size={20} color="#FFFFFF"/>
        </button>
      </form>
    </Container>
  )
}

//estilizar o form