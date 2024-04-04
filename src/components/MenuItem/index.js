import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LinkArea, LinkIcon } from './styled';

const CustomLink = ({ icon, link }) => {
    const history = useHistory();
    const location = useLocation();

    // Verifica se a rota atual corresponde à rota do link
    const isActive = location.pathname === link;

    // Função para lidar com o clique no link
    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link); // Altera a rota ao clicar no link
    };

    return (
        <LinkArea active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} alt="" /> {/* Adiciona um alt vazio para fins de acessibilidade */}
        </LinkArea>
    );
};

export default CustomLink;
