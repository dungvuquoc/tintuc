import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container col-12">
          <a className="navbar-brand" href="#">Trang chủ</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Khóa học
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tin">Tin tức</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Về chúng tôi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Ngôn ngữ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Thông báo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tài khoản</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        );
    }
}

export default Nav;