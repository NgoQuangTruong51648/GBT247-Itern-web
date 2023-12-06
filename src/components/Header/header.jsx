import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png"
import chat from "../../assets/icons/chat.svg"
import gift from "../../assets/icons/gift.svg"
import notification from "../../assets/icons/notification.svg"


const Header = () => {
  return (
    <div className="Header">
        <div className="Logo">
            <img src={logo} className="App-logo" alt="logo" />
            <a className="textLogo">giaibaitap247</a>
        </div>
        
        <form className='form'>
        <input
        className="Seach"
            type="text"
            placeholder="Nhập vào câu hỏi của bạn"
        />
        <button className="Btn" type="submit">Tìm kiếm</button>
        </form>
        <div className="header-right">
        <div className="header-content">
            <div className='Icon'>
                <Link to=""><img src={gift} className="App-logo" alt="logo" /></Link>
            </div> 
            <div className='Icon'>
                <Link to=""><img src={chat} className="App-logo" alt="logo" /></Link>
            </div> 
            <div className='Icon'>
                <Link to=""><img src={notification} className="App-logo" alt="logo" /></Link>
            </div>
        </div>

        <div className="user">
            <img src={avatar} className="avatar" alt="logo" />
            <a>Thùy Trâm</a>
        </div>
        </div>
        
          
    </div>
  );
}

export default Header;
