import React from 'react'; 
import AppHeader from '../app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`


const App = () => {

    const data = [
        5,  
        {label: 'Going to lern React', important: true, id: 'sdaf'},
        {},
        {label: 'Новый пост', important: true, id: 'sdaf4'},
        {label: 'That is good', important: false, id: 'dslkj'},
        {label: 'I need a break...', important: false, id: 'sdalk'},
        {label: 'I need aaa break...', important: false, id: 'nndj'}
]
     
    return (
        <AppBlock>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App