import Container from "../Container";
import { Logo } from './Header.styled.jsx'
import logo from '../../images/logo.png'

export default function Header() {
  
    return (
        <Container>
            <Logo src={logo} alt='logo'/>
            <p>Віднова</p>
            <p>Кабінет гіпербаричної оксигенації</p>
    
        </Container>
    )
}