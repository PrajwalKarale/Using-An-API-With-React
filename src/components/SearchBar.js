import { useState } from 'react';

function SearchBar({ onSubmit }){
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(term);
    }
    
    const handleEventChange = (event) => {
        // console.log(event);
        setTerm(event.target.value);
    }
    return( 
        <div>
            <form onSubmit={ handleFormSubmit }>
                <input value = { term } onChange={ handleEventChange } />
            </form>
        </div>
    );
}

export default SearchBar;