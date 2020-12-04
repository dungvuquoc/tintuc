import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Tinnoibat extends Component {
  constructor(props) {
    super(props);
    
  }
  chuyenDoi = (str) => {
    // Chuyển hết sang chữ thường
str = str.toLowerCase();     

// xóa dấu
str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
str = str.replace(/(đ)/g, 'd');

// Xóa ký tự đặc biệt
str = str.replace(/([^0-9a-z-\s])/g, '');

// Xóa khoảng trắng thay bằng ký tự -
str = str.replace(/(\s+)/g, '-');

// xóa phần dự - ở đầu
str = str.replace(/^-+/g, '');

// xóa phần dư - ở cuối
str = str.replace(/-+$/g, '');

// return
return str;
}
    render() {
        return (
            <div className="row">
  <div className="col-12 mt-4">
    <h2>Bài viết nổi bật</h2>
    <div className="card">
      <div className="card-horizontal p-3" style={{display: 'flex', flex: '1 1 auto'}}>
        <div className="img-square-wrapper">
        <Link to={"/tin-tuc/" + this.chuyenDoi(this.props.tieuDe) + "." + this.props.tinId + ".html"}><img style={{width: '460px', height: '320px'}} src={this.props.anh} alt="Card image cap" /></Link>
        </div>
        <div className="card-body pt-5">
        <h4 className="card-title">{this.props.tieuDe}</h4>
        <p className="card-text">{this.props.trichDan}</p>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-muted">Tác giả - Ngày đăng</small>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Tinnoibat;