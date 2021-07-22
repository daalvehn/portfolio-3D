import styled from 'styled-components';
import { theme } from '../Theme';

export const ModalBackground = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: 90%;
  min-width: 300px;
  border-radius: 10px;
  background: ${theme.backgroundLight};
`;

export const CardIframe = styled.iframe`
  height: inherit;
  width: 100%;
`;

export const ModalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin: 0 1rem;
`;
