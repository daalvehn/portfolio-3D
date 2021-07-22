import styled from 'styled-components';
import { theme } from '../Theme';

export const ModelsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 60%;
  padding: 2rem;
  margin: 0 0 2rem;
  border-radius: 10px;
  background-color: ${theme.backgroundLight};
`;

export const Navbar = styled.div`
  width: 100%;
  background-color: ${theme.backgroundLight};
  height: 3rem;
  z-index: -1;
`;
