import { Container, Content } from "./styles";
import logo from '../../assets/logo.png';


export default function Header() {
  return(
    <Container>
      <Content>
        <img src={logo} alt="" />
      </Content>
    </Container>
  )
  
}