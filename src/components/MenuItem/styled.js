import styled from "styled-components";

export const LinkArea = styled.a`
display: flex;
justify-content:center;
align-items: center;
width: 60px;
height: 60px;
background-color: ${props=>props.active ? '#0B4D0B' : 'transparent'};
border-radius: 10px;
margin-bottom: 10px;

  /* Estilos para o componente LinkArea */
`;

export const LinkIcon = styled.img`

width: 34px;
height: auto;
  /* Estilos para o componente LinkIcon */
`;
