import React, { Component } from 'react';

class Chitietbaiviet extends Component {
  constructor(props) {
    super(props);
    
  }
  
    render() {
        return (
            <div className="w-75">
  <div className="card">
    <div className="card p-3" style={{display: 'flex', flex: '1 1 auto'}}>
      <div className="img-square-wrapper">
        <div className="text-center">
          <img className style={{width: '788px', height: '443px'}} src={this.props.anh} alt="Card image cap" />
        </div>
      </div>
      <div className="card-body pt-5">
        <h1 className="card-title">{this.props.tieuDe}</h1>
        <p className="card-text">{this.props.noiDung}</p>
      </div>
    </div>
    <div className="card-footer">
      <small className="text-muted">
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Bình luận</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          <button type="button" className="btn btn-primary mt-3">Đăng</button>
        </div>
      </small>
    </div>
  </div>
</div>

        );
    }
}

export default Chitietbaiviet;