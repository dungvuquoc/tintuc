import React, { Component } from 'react';
import dl from './dulieu.json';

import Pagination from './Pagination';
import Search from './Search';
import Tinmoi from './Tinmoi';
import Tinnoibat from './Tinnoibat';
import Tinxuhuong from './Tinxuhuong';
class Danhsachtin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage : 3,
      totalPage : 0,
      newsInAPage : 3,
      totalNews : 0,
      pageOnDisplay : 3
    }
  }
  chuyenVeTrangTruoc = (event) => {
    this.setState({
      currentPage : 2
    })
  }
  chuyenVeTrangSau = (event) => {
    this.setState({
      currentPage : 4
    })
  }
  render() {
    return (
      <div>
        <Search />
        <div className="container">
          {
            dl.map((value, key) => {
              if (key === 0) {
                return <Tinnoibat
                  key={key}
                  tinId={value.id}
                  anh={value.anh}
                  tieuDe={value.tieuDe}
                  trichDan={value.trichDan} />
              }
              else {
                return true
              }

            })
          }
          <div className="row">
            <div className="col-12 mt-4">
              <h2>Xu hướng</h2>
            </div>
            {
              dl.map((value, key) => {
                if (key <= 2) {
                  return <Tinxuhuong
                    key={key}
                    tinId={value.id}
                    anh={value.anh}
                    tieuDe={value.tieuDe}
                    trichDan={value.trichDan} />
                }
                else {
                  return true
                }

              })
            }
          </div>
          <div className="row">
            <div className="col-12 mt-4 mb-1">
              <h2>Bài viết mới</h2>
            </div>
            {
              dl.map((value, key) => {
                  
                  if(key >= ((this.state.currentPage-1) * this.state.newsInAPage) && key <= (((this.state.currentPage-1) * this.state.newsInAPage)+2)) {
                    return ( <Tinmoi
                    key={key}
                    tinId={value.id}
                    anh={value.anh}
                    tieuDe={value.tieuDe}
                    trichDan={value.trichDan} />)
                  }
                  
              
                    })
            }
            {/* <Pagination currentPage={this.state.currentPage}/> */}
            <div className="col-12 mt-5 mb-5">
                <div className="row" />
                <nav aria-label="Page navigation example">
                    <ul className="pagination " style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <li className="page-item">
                            <button onClick={(event) => this.chuyenVeTrangTruoc()} className="page-link" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span  className="sr-only">Previous</span>
                            </button>
                        </li>
                        {/* <li className="page-item"><button  className="page-link">{this.state.currentPage - 1}</button></li> */}
                        <li className="page-item"><button className="page-link">{this.state.currentPage}</button></li>
                        {/* <li className="page-item"><button className="page-link">{this.state.currentPage + 1}</button></li> */}
                        <li className="page-item">
                            <button onClick={(event) => this.chuyenVeTrangSau()} className="page-link" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Danhsachtin;