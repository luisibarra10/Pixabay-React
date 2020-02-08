import React from 'react';

const Pagination = props => {

    return(

        <div>
            <button onClick={props.previousPage}type="button" className=" btn btn-info mr-1 mt-3 mb-5">Anterior &larr;</button>
            <button onClick={props.nextPage}type ="button" className="btn btn-info mr-1 mt-3 mb-5">Siguiente &rarr;</button>
        </div>
    );

}
export default Pagination;