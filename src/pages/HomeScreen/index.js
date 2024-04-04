import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container, Titulo } from './styled';
import Header from '../../components/Header';
export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}>
                
            </Header>
        </Container>
    );
}