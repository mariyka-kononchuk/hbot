import Container from "../Container";
import {
    NavBar,
    LogoWrapper,
    LogoLink,
    Image,
    Name,
    SubName,
    List,
    ListItem,
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
                    <ListItem>
                        <StyledLink to="/">Головна</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/2">Що таке ГБО</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/3">Коли застосовується</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/4">Як проходить сеанс</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/5">Про нас</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/6">Ціни</StyledLink>
                    </ListItem>
                    <ListItem>
                        <StyledLink to="/7">Контакти</StyledLink>
                    </ListItem>
                </List>
            </NavBar>

        </Container>
    )
}