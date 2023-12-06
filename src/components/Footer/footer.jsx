import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./footer.css";
import be from "../../assets/icons/be.svg"
import social from "../../assets/icons/social.svg"
import facebook from "../../assets/icons/facebook.svg"
import appstore from "../../assets/images/app_store 1.png"
import ggplay from "../../assets/images/google_play 1.png"


const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>Giải bài tập 247</h4>
            </div>
            <p>Cơ quan chủ quản : Công ty cổ phần công nghệ IZI Software </p>
            <div className="header-content">
            <div className='Icon'>
                <Link to=""><img src={be} className="App-logo" alt="logo" /></Link>
            </div> 
            <div className='Icon'>
                <Link to=""><img src={social} className="App-logo" alt="logo" /></Link>
            </div> 
            <div className='Icon'>
                <Link to=""><img src={facebook} className="App-logo" alt="logo" /></Link>
            </div>
            </div>
            <a>Tải ứng dụng xuống</a>
            <div className="header-content">
            <div className='Icon'>
                <Link to=""><img src={appstore} className="App-logo" alt="logo" /></Link>
            </div> 
            <div className='Icon'>
                <Link to=""><img src={ggplay} className="App-logo" alt="logo" /></Link>
            </div> 
            </div>
          </div>

          <div className="col-md-3">
              <a>Hướng dẫn sử dụng</a>
              <a>Điều khoản và chính sách</a>
              <a >Nội quy giải bài tập 247</a>
              <a>Góp ý</a>
          </div>
          <div className="col-md-3">
              <a>Thông báo</a>
              <a>bảng xếp hạng</a>
              <a >Chính sách thưởng</a>
              <a>Góp ý</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;