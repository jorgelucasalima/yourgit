import {Container} from './styles'
import { FaSearch, FaGithubAlt } from 'react-icons/fa'


export default function PesquisarGit() {
  return (
    <Container>
      <span>Seu GitHub</span>
      <FaGithubAlt size={27} color='#FFFFFF'/>
      <input 
        type="text" 
        placeholder='Ex: @cuscuzcumshark'
      />
      <button>
        <FaSearch size={20} color="#FFFFFF"/>
      </button>
    </Container>
  )
}
