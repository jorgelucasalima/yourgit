import { useState } from 'react'
import api from '../../services/api'
import Modal from 'react-modal'

import {Container} from './styles'
import { FaSearch, FaGithubAlt, FaWindowClose } from 'react-icons/fa'



export default function PesquisarGit() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  //XXXXXXXXXXXXXX STATES

  const [seuGit, setSeuGit] = useState('')
  const [dadosGit, setDadosGit] = useState([])

  const [modalIsOpen, setModalIsOpen] = useState(false)
  

  // XXXXXXXXXXXXX  FUNÇÕES

  //função para abrir o modal
  function modalAberto(params) {
    setModalIsOpen(true)
  }

  //função para fechar o modal
  function fecharModal (){
    setModalIsOpen(false)
  }

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
          placeholder='Digite seu GitHub | Ex: cuscuzcumshark'
          value={seuGit}
          onChange={mudarGit}
        />

        <button
          type='submit'
          onClick={modalAberto}
        >
          <FaSearch size={20} color="#FFFFFF"/>
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={modalAberto}
          style={customStyles}
        >
       
        <a onClick={fecharModal}><FaWindowClose size={20} /></a>
        
        {dadosGit.map(dado => (
          <table>
            <tr>
              <td></td>
              <td><img src={dado.foto} alt={dado.nome} /></td>
            </tr>
            <tr>
              <td>Seu Nome: </td>
              <td>{dado.nome}</td>
            </tr>
            <tr>
              <td>Link Git: </td>
              <td>{dado.linkgit}</td>
            </tr>
            <tr>
              <td>Empresa: </td>
              <td>{dado.empresa}</td>
            </tr>
            <tr>
              <td>Cidade: </td>
              <td>{dado.cidade}</td>
            </tr>
            <tr>
              <td>Blog</td>
              <td>{dado.link}</td>
            </tr>
            <tr>
              <td>Bio: </td>
              <td>{dado.bio}</td>
            </tr>
        </table>
      ))}

      </Modal>
      </form>
      
    </Container>
  )
}
