import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CategoryArea, CategoryList,ProductList,ProductArea,ProductPaginationArea,ProductPaginationItem} from './styled';
import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ReactTooltip from 'react-tooltip';
import ProductItem from '../../components/ProductItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    const [activeCategory, setActiveCategory] = useState('');
    const [activePage, setActivePage] = useState (0);

    const getProducts = async () => {
        const prods = await api.getProducts();
        if (prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
        }
    }

    useEffect(() => {
        const getCategories = async () => {
            
                const cat = await api.getCategories();

                if (cat.error === '') {
                    setCategories(cat.result);
                }
                ReactTooltip.rebuild();
            };
        getCategories();
    }, []);

    useEffect(() => {
        getProducts();
    }, [activeCategory]);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {categories.length > 0 && (
                <CategoryArea>
                    <span>Selecione uma categoria </span>
                    <CategoryList>
                        {/* Usando uma chave única para o item "Todas as categorias" */}
                        <CategoryItem
                            
                            data={{ id: '', name: 'Todas as categorias', image: '/assets/food-and-restaurant.png' }}
                            activeCategory={activeCategory}
                            setActiveCategory ={setActiveCategory}
                            
                        />
                        {categories.map((item, index) => (
                            <CategoryItem
                                
                                key={index}
                                data={item}
                                activeCategory={activeCategory}
                                 setActiveCategory ={setActiveCategory}
                            
                            />
                        ))}
                            
                        
                    </CategoryList>
                </CategoryArea>
            )}

            {products.length > 0 &&
                

            <ProductArea>
                    <ProductList>
                        
                        {products.map((item, index) => (
                            
                            <ProductItem
                                key={index}
                                data={item}
                            />

                        ) )}



                </ProductList>


                </ProductArea>
            }

            {totalPages > 0 &&
                
                <ProductPaginationArea>

                    {Array(totalPages).fill(0).map((item, index) => (
                        <ProductPaginationItem key={index}>
                           {index + 1 }
                        </ProductPaginationItem>
                        
                    ))}

                </ProductPaginationArea>
            }
            
        </Container>
    );
};
