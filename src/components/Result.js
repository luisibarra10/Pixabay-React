import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Result extends Component {

    showImages = () => {

        const images = this.props.images;

        if(images.length === 0) return null;

        return(
            <React.Fragment>
                <div className="row col-12">
                    { images.map(image => (
                        <Image
                            key = { image.id}
                            image = { image}
                        />
                    ))}
                </div>
                <Pagination
                nextPage = {this.props.nextPage}
                previousPage = {this.props.previousPage}
                />
            </React.Fragment>
        )
    }
    render(){
        return(
           <React.Fragment>
               { this.showImages()}
           </React.Fragment>

        );
    }
}

export default Result;