import Container from "../Container";
import {
    NavBar,
    LogoWrapper,
    LogoLink,
    Image,
    Name,
    SubName,
    List,
    StyledLink
} from './Header.styled.jsx';
import logo from '../../images/logo.png';

export default function Header() {
  
    return (
        <Container>
            <NavBar>
                <LogoWrapper>
                    <LogoLink to='/'>
                        <Image  src={logo} alt='logo'/>
                    </LogoLink>
                    <div>
                        <Name>Віднова</Name>
                        <SubName>кабінет гіпербаричної оксигенації</SubName>
                    </div>
                </LogoWrapper>
                <List>
                    <li>
                        <StyledLink to="/">Головна</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Що таке ГБО</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Коли застосовується</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Як проходить сеанс</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Про нас</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Ціни</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/">Контакти</StyledLink>
                    </li>
                </List>
            </NavBar>

        </Container>
    )
}