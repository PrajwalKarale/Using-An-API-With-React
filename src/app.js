import SearchBar from './components/SearchBar';

function App(){
    const handleSubmit = (term) => {
        console.log('Search Term is : ', term);
    };
    
    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    );
}

export default App;