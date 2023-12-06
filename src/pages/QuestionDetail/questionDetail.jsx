import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./questionDetail.css";
import banner from "../../assets/images/banner.png"
import avatar1 from "../../assets/images/avatar1.png"
import avatar from "../../assets/images/avatar2.png"
import avatar4 from "../../assets/images/avatar4.png"
import logo from "../../assets/images/logo-rank2 1.png"
import star from "../../assets/images/star.png"
import heart from "../../assets/images/heart.png"
import flag from "../../assets/images/flag.png"
import profile from "../../assets/images/profile-2user.png"
import message from "../../assets/images/message-text.png"
import { TiMessages } from "react-icons/ti";

const QuestionDetail = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://p31giaibaitaptest.izisoft.io/v1/questions/6513ca3b1ed4f21039d194e8?populate=idUser');
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Chạy effect này chỉ một lần khi component mount
  return (
  <body>
      <main className='body'>
      <div className="Row">
      <div className='Col'>
        <section className='Col1'>
        {responseData ? (
          <div className='Question'>
            <div className='userinf'>
              <img src={avatar1} className="avatar" alt="logo" />
              <div className='inf'>
                <a>{responseData.subject.title} . Lớp 10 .  {responseData.score}đ . 1 giờ trước</a>
                <a>{responseData.idUser.fullName} - {responseData.updatedAt}</a>
              </div>
            </div>
            <div>
              <p>{responseData.imageText}</p>
            </div>
            <div className='img'>
              <img src={responseData.images[0]} className="image" alt="logo" />
            </div>
            
            <div className='x1n2onr6'>
              <div className='star'>

              <div className='ans'>
                <div className='abc1'>
                  <a >02</a>
                </div>
                <a className='abc2'>Đáp án</a>
              </div>

                <img src={message} className="heart" alt="logo" />
                <a>Hỏi chi tiết câu hỏi</a>
            
            <div className='heart'>
                <img src={profile} className="heart" alt="logo" />
                <a>Theo dõi</a>
            </div>

            <div className='flag'>
                <img src={flag} className="flag" alt="logo" />
                <a>Báo Vi phạm</a>
            </div>
            </div>
            
            </div>

          </div>
          ) : (
            <p>Loading data...</p>
          )}
        </section>

        <section>
        <img src={banner} className="banner" alt="logo" />
        </section>

        <section className='Col1'>
          <div className='Question'>
            <div className='userinf'>
              <div className='inf'>
              <a style={{ fontSize: '40px' , color:'rgb(57,192,237)'}}>Trả lời</a>
              </div>
            </div>
            {responseData ? (
            <div className='law' style={{ backgroundColor: 'rgb(175,221,236)'}}>
              <p>{responseData.idUser.fullName} rất mong câu trả lời từ bạn.</p>
              <a>làm sao để có câu trả lời hay nhất</a>
              <a>1. Luôn có giải thích các bước giải</a>
              <a>2. Không sao chép mạng</a>
              <a>3. Cố tình spam sẽ bị khóa tài khoản</a>
            </div>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </section>

        <section className='Col2'>
          <div className='Question'>
            <div className='userinf'>
              <div className='inf'>
              <a style={{ fontSize: '40px'}}>Danh sách trả lời</a>
              </div>
            </div>
            <hr color="black" width="600px" size="1px" align="right" />
            {responseData?.answers.map((data) => (
              <>
                {responseData ? (
            <div className='answer'>
            <div className='userinf'>
              <img src={avatar} className="avatar" alt="logo" />
                <a style={{marginLeft:'15px'}}>{data.author.fullName}</a>
                <img src={logo} className="logo" alt="logo" />
                <a>8:40</a>
            </div>
            <div className='cmt'>
              <a>{data.text}</a>
              <a>Hãy giúp mọi người biết câu trả lời này thế nào</a>
              <div className='star'>
                <img src={star} className="star" alt="logo" />
                <img src={star} className="star" alt="logo" />
                <img src={star} className="star" alt="logo" />
                <img src={star} className="star" alt="logo" />
                <img src={star} className="star" alt="logo" />
                <a>5 vote</a>
            
            <div className='heart'>
                <img src={heart} className="heart" alt="logo" />
                <a>Cảm ơn (10)</a>
            </div>

            <div className='flag'>
                <img src={flag} className="flag" alt="logo" />
                <a>Báo Vi phạm</a>
            </div>
            </div>
            
            </div>
            <div className='border'>
            <img src={avatar4} className="avatar4" style={{marginLeft:'10px', marginRight:'10px'}} alt="logo" />
            <input
              className="input"
                  type="text"
                  placeholder="Viết bình luận của bạn..."
            />
            </div>
            <hr color="black" width="600px" size="1px" align="right" />
            </div>
            
            ) : (
              <p>Loading data...</p>
            )}
              </>
            ))}
          </div>  
        </section>

        <section className='Col3'>
          <div className='Ques'>
            <div className='userinf'>
              <div className='inf'>
              <a style={{ fontSize: '30px'}}>Bạn đang thắc mắc và muốn được giải đáp</a>
              </div>
            </div>
            <form><button className="Button" ><TiMessages />Đặt câu hỏi</button></form>
          </div>
        </section>
      </div>
      <div className='Col4'>
        <section className='section1'>
        {responseData ? (
          <div className='information'>
            <div className='infor'>
              <img src={avatar1} className="avatar" alt="logo" />
              <div className='inf'>
                <a>{responseData.idUser.fullName}</a>
                <a>Lính mới</a>
              </div>
            </div>
            <div className='row-2'>
              <div className='col-1'>
                <a>Trả lời hay nhất</a>
                <a>Điểm</a>
              </div>
              <div className='col-2'>
                <a>5</a>
                <a>500 điểm</a>
              </div>
            </div>
            <div>
              <a>Cần thêm 30 điểm để thăng hạng lên: </a>
            </div>
          </div>
          ) : (
            <p>Loading data...</p>
          )}
        </section>
      </div>
      </div>
      
    </main>
  </body>
    
  );
};

export default QuestionDetail;
