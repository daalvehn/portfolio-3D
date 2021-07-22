import { HeaderWrapper, Logo } from '../style/StyledHeader';
import logo from '../assets/sketchfab-logo.png';
import { Link } from 'react-router-dom';
import { Wrapper } from '../style/GlobalStyle';
import { theme } from '../style/Theme';

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <a href="https://sketchfab.com" target="_blank" rel="noreferrer">
          <Logo src={logo}></Logo>
        </a>
        <Link to="/" style={{ textDecoration: 'none', color: theme.fontColor }}>
          portfolio
        </Link>
        <div />
      </HeaderWrapper>
      <Wrapper row align="center" justify="space-evenly" width="10rem">
        <Link to="/">Models</Link>
        <p>|</p>
        <Link to="/likes">Likes</Link>
      </Wrapper>
    </>
  );
}
