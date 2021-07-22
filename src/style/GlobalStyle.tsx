import styled from 'styled-components';
// import { theme } from './Theme';
import { Style } from '../types/interfaces';

export const Wrapper = styled.div<Style>`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
  width: ${(props) => props.width && props.width};
  heigth: ${(props) => props.heigth && props.heigth};
  margin: ${(props) => props.margin && props.margin};
  font-size: ${(props) => props.fontSize && props.fontSize};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
  color: ${(props) => props.color && props.color};
`;

export const ModalLink = styled.a`
  color: #252525;
  opacity: 1;
  transition: opacity 0.15s;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;
