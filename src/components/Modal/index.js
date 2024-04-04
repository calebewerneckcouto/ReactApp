import React from "react";
import { Container,ModalBody } from "./styled";

export default ({children,status}) => {
    return (
        <Container status={status}>

            <ModalBody>
               {children}
            </ModalBody>
        </Container>
    )
}
