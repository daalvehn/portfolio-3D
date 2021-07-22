import styled from 'styled-components';
import { theme } from './Theme';

export const HeaderWrapper = styled.div`
  height: 5rem;
  width: 100%;
  box-shadow: 0 1px 5px rgba(85, 85, 85, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: ${theme.fontColor};
  background-color: white;
  font-weight: 800;

  @media screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
