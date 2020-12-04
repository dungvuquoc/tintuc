import React, { Component } from 'react';

class Tacgia extends Component {
    render() {
        return (
            <div className="w-20 ml-auto">
                <div className="card text-center mb-3" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">TÁC GIẢ</h5>
                        <img src="http://via.placeholder.com/100x100" alt="" />
                        <p className="card-text">Tên tác giả</p>
                        <a href="#" className="btn btn-primary">Theo dõi</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default Tacgia;