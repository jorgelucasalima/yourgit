import { useState } from 'react'
import api from '../../services/api'

import {Container} from './styles'
import { FaSearch, FaGithubAlt } from 'react-icons/fa'



export default function PesquisarGit() {


  //XXXXXXXXXXXXXX STATES

  const [seuGit, setSeuGit] = useState('')
  const [dadosGit, setDadosGit] = useState([])
  

  // XXXXXXXXXXXXX  FUNÇÕES


  //------ função para consultar o git - assincrona para esperar a resposta da api do github
  
  async function consultarGitSubmit(e){
    e.preventDefault()
    
    const response = await api.get(`/users/${seuGit}`)
    
  //------ array para inclusão de dados
    const dados = {
      foto: response.data.avatar_url,
      nome: response.data.name,
      linkgit: response.data.html_url,
      empresa: response.data.company,
      cidade: response.data.location,
      link: response.data.blog,
      bio: response.data.bio,
    }

    setDadosGit([...dadosGit, dados])
    setSeuGit('')
    
  }
    

  //------ função para mudar o git
  function mudarGit(e) {
    setSeuGit(e.target.value)
  }

  return (

    <Container>
      <FaGithubAlt size={27} color='#FFFFFF'/>
      
      <form onSubmit={consultarGitSubmit}>
        <input 
          type="text" 
          placeholder='Ex: cuscuzcumshark'
          value={seuGit}
          onChange={mudarGit}
        />

        <button
          type='submit'
        >
          <FaSearch size={20} color="#FFFFFF"/>
        </button>

        <button
          type='submit'
        >
          <FaSearch size={20} color="#FFFFFF"/>
        </button>

      </form>


      {dadosGit.map(dado => (
        <li>
          <img src={dado.foto} alt="" />
          <h3>Nome: {dado.nome}</h3>
          <link rel="stylesheet" href={dado.linkgit} />
          <p>Empresa: {dado.empresa}</p>
          <p>Cidade: {dado.cidade}</p>
          <p>Blog: {dado.link}</p>
          <p>Bio: {dado.bio}</p>
        </li>
        
      ))}


      
        
      


    </Container>


    
  )
}
