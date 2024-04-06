import React from "react";
import {
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea
} from './styled';



export default ({data}) => {  

    return (
        <Container >

            <ProductArea>

                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        {data.name}
                    </ProductDetails>

                    <ProductQuantityArea>
                            8
                    </ProductQuantityArea>
                </ProductInfoArea>

            </ProductArea>

            <ProductButtons>

            </ProductButtons>

        </Container>
    );
    
}