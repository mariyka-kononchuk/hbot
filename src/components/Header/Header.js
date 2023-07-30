import Container from "../Container";
import { Logo, StyledLink } from './Header.styled.jsx';
import logo from '../../images/logo.png';



export default function Header() {
  
    return (
        <Container>
            <Logo src={logo} alt='logo'/>
            <p>Віднова</p>
            <p>кабінет гіпербаричної оксигенації</p>
            <StyledLink to="/">Головна</StyledLink>
            <StyledLink to="/">Що таке ГБО</StyledLink>
            <StyledLink to="/">Коли застосовується</StyledLink>
            <StyledLink to="/">Як проходить сеанс</StyledLink>
            <StyledLink to="/">Про нас</StyledLink>
            <StyledLink to="/">Ціни</StyledLink>
            <StyledLink to="/">Контакти</StyledLink>
        </Container>
    )
}