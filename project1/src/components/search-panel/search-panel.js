import React from 'react'; 
import './search-panel.css'

const SearchPanel = () => {
    return (
        <input
            className="form-contol search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    )
}


export default SearchPanel;