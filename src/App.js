import React from 'react';

import './App.css';
import Search from './components/Search';
import Result from './components/Result';


class App extends React.Component {

    state = {
        ter : '',
        images : [],
        pagina : ""
    }

    nextPage = () => {
        let pagina = this.state.pagina;

        pagina ++;

        this.setState({
            pagina
        },() => {
            this.getApi();
            this.scroll();
        });

        console.log(pagina);
    }

    previousPage =  () => {
        let pagina = this.state.pagina;

        if(pagina===1) return null;

        pagina--;

        this.setState({
            pagina
        }, () => {
            this.getApi();
            this.scroll();
        });

        console.log(pagina);
    }

    scroll = () => {
        const element = document.querySelector('.jumbotron');
        element.scrollIntoView('smooth', 'end');
    }

    getApi = () => {
        const ter = this.state.ter;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=15067254-d2178f67b423fcb3276a48b6e&q=${ter}&per_page=50&page=${pagina}`;

        fetch(url)
        .then(res => res.json())
        .then(resultado => this.setState({ images : resultado.hits}))
        
        


    }
    

    data = (ter) => {
        this.setState({
            ter : ter,
            pagina: 1
        }, () => {
            this.getApi();
            
        })
    }

    render() {
        return(
            
                <div className="app container">
                    <div className="jumbotron">
                        <h4 className="text-center">PIXABAY</h4>
                        <Search
                        data = {this.data}
                        />
                    </div>
                   <div className="row justify-content-center">
                        <Result images={this.state.images} 
                        nextPage = {this.nextPage}
                        previousPage = {this.previousPage}
                        />
                   </div>
                    
                    
                </div>
                
            
            
        );
        
    }
}



export default App;