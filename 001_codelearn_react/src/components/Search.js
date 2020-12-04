import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div classname="form-group">
                            <div className="btn-group">
                                <input style={{ width: '400px' }} type="text" className="form-control" placeholder="Tìm kiếm tiêu đề" />
                                <div className="btn btn-info"><i className="fa fa-search" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;