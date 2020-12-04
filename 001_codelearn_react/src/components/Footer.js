import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="card">
  <div className="container">
    <div className="row mt-4 mb-4">
      <div className="card-body col-6">
        <h5 className="card-title">Nhóm 30</h5>
        <p className="card-text">Team30 là nền tảng tương tác trực tuyến hỗ trợ người dùng học tập, thực hành,
          thi đấu và đánh giá kỹ năng lập trình một cách nhanh chóng và chính xác.</p>
        <p>
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true">
            <i className="fa fa-instagram ml-2" aria-hidden="true" />
            <i className="fa fa-twitter-square ml-2" aria-hidden="true" />
            <i className="fa fa-youtube-play ml-2" aria-hidden="true" />
          </i>
        </p>
      </div>
      <div className="col-2">
        <h4>Liên kết</h4>
        <p><a href className="link-menu" title="Học tập">Học tập</a></p>
        <p><a href className="link-menu" title="Luyện tập">Luyện tập</a></p>
        <p><a href className="link-menu" title="Cuộc thi">Cuộc thi</a></p>
        <p><a href className="link-menu" title="Trò chơi">Trò chơi</a></p>
      </div>
      <div className="col-2">
        <h4>Thông tin</h4>
        <p><a href className="link-menu" title="Chia sẻ">Chia sẻ</a></p>
        <p><a href title="Về chúng tôi">Về chúng tôi</a></p>
        <p><a href title="Điều khoản sử dụng">Điều khoản sử dụng</a></p>
      </div>
      <div className="col-2">
        <h4>Trợ giúp</h4>
        <p><a href title="Hỗ trợ">Hỗ trợ</a></p>
        <p><a href title="Thảo luận">Thảo luận</a></p>
        <p><a href title="Liên hệ với chúng tôi">Liên hệ với chúng tôi</a></p>
      </div>
    </div>
  </div>
  <div className="card-footer text-muted text-center" style={{backgroundColor: '#1c1d31'}}>
    Team30
  </div>
</div>

        );
    }
}

export default Footer;