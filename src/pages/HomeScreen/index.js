import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, CategoryArea, CategoryList } from './styled';
import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await api.getCategories();

                if (categoriesResponse.error === '') {
                    setCategories(categoriesResponse.result);
                } else {
                    console.error('Erro ao obter categorias:', categoriesResponse.error);
                    // Exibir feedback visual para o usuário (por exemplo, uma mensagem de erro)
                }
            } catch (error) {
                console.error('Erro ao obter categorias:', error);
                // Exibir feedback visual para o usuário (por exemplo, uma mensagem de erro)
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        
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
                            
                            data={{ id: '', title: 'Todas as categorias', image: '/assets/food-and-restaurant.png' }}
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
        </Container>
    );
};
