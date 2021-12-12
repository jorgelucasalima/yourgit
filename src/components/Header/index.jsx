import { Container } from "./styles";
import logo from '../../assets/logo.png';


export default function Header() {
  return(
    <Container>
      <img src={logo} alt="" />
      <h1>Home</h1>
      <h1>Contato</h1>
    </Container>
  )
  
}