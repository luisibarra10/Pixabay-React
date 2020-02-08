import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef(); 

    handleData = (e) =>{
        e.preventDefault();
        const ter = this.searchRef.current.value;
  

        this.props.data(ter);
    }


    render(){
        return(
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="col-md-8 form-group">
                        <input ref={this.searchRef} type="text" className="form-control"
                        placeholder="Search your image"                        
                        />
                    </div>
                        <div className="col-md-4">
                            <button className="btn btn-info btn-block">
                                Search
                            </button>
                        </div>
                </div>  
            </form>
        );
    }
}

export default Search;