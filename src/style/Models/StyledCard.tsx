import styled from 'styled-components';

import { fadein } from '../Animations';

export const StyledModelCard = styled.div`
  margin: 0.2rem;
  animation: ${fadein} 1s;
  position: relative;
  height: 300px;
  width: 350px;
  font-size: 13px;
  @media screen and (max-width: 600px) {
    height: 180px;
    width: 180px;
  }
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  border-radius: 50%;
  padding: 1rem;
  width: 5rem;
  height: 5rem;
  background-color: rgba(185, 185, 185, 0.7);
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  outline: 20px solid transparent;
  transition-property: font-size, outline;
  transition-duration: 0.3s;
  &:hover {
    outline: 2px white solid;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 600px) {
    width: 4rem;
    height: 4rem;
    font-size: 0.8rem;
    &:hover {
      font-size: 0.9rem;
    }
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: inherit;
  width: inherit;
`;

export const Thumbnail = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: inherit;
  width: inherit;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: inherit;
  width: inherit;
  opacity: 0;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(120, 120, 120, 1));

  &:hover {
    opacity: 1;
    transition: opacity 0.5s;
  }
`;
