import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="col-12 mt-5 mb-5">
                <div className="row" />
                <nav aria-label="Page navigation example">
                    <ul className="pagination " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <li className="page-item">
                            <button onClick={(event) => (console.log("1"))} className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span  className="sr-only">Previous</span>
                            </button>
                        </li>
                        <li className="page-item"><button onClick={(event) => {}} className="page-link">{this.props.currentPage - 1}</button></li>
                        <li className="page-item"><button className="page-link">{this.props.currentPage}</button></li>
                        <li className="page-item"><button className="page-link" href="#">{this.props.currentPage + 1}</button></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Pagination;