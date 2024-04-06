import React ,{useState} from "react";

import {CartArea,CartHeader,CartBody,CartIcon,CartText,ProductsArea,ProductItem,ProductPhoto,ProductInfoArea,ProductName,ProductPrice,ProductQuantityArea } from './styled';
import { useSelector } from "react-redux";

export default () => {

    const products = useSelector(state => state.cart.products);

    const handleCartClick = () => {
        setShow(!show);
    }

    const [show, setShow] = useState(true);
    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src="/assets/cart.png" />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src="/assets/down.png" />
                }
            </CartHeader>

            <CartBody show={show}>
                <ProductsArea>
                    
                    {products.map((item, index) => (
                        
                        <ProductItem key={index}>
                        <ProductPhoto src={item.image} />
                        <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                             <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                        </ProductInfoArea>
                        <ProductQuantityArea>

                        </ProductQuantityArea>
                    </ProductItem>
                    
                ))}
                    
               </ProductsArea>
            </CartBody>
        </CartArea>
    );
}
