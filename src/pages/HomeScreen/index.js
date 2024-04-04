import React, {useState,useEffect} from 'react';

import { Container } from './styled';
import Header from '../../components/Header';
import api from '../../api';

export default () => {
   
    const [headerSearch, setHeaderSearch] = useState('');
    useEffect(() => {
        const getCategories = async () => {
            
      
            const categories = await api.getCategories();
            console.log(categories);
        };
        getCategories();
    }, []);
    

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}>
                
            </Header>
        </Container>
    );
}