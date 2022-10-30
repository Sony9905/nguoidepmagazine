import React, {useState} from 'react'
import  './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Home = ({magazines}) => {
  const [imgCover, setImgCover] = useState(magazines[0].imagesCover);
  return (
    <div className='Home'>
      <div className='Home-Wrapper'>
        <div className='About-Section'>
          <p className='English'>Nguoi Dep Magazine is a monthly Vietnamese magazine, established since 1999, 
            with total of 3,000 issues for FREE distribution in the first week of each month covering World News, 
            US-World News, Vietnam News, Tips, Education, Stories, Poems, Horoscope, Beauty, Ads & Classified, ...
             Distributed in New York, New Jersey, and Connecticut.</p>
          <p className='Viet'>
          Người Đẹp Magazine là báo tháng Việt, thành lập từ 1999, với tổng số 3,000 cuốn phát MIỄN PHÍ ở 
          tuần đầu của mỗi tháng gồm có tin tức Quốc Tế, tin tức Hoa Kỳ- Quốc Tế, tin tức Việt Nam, các bài 
          cố vấn gia đình tình yêu hạnh phúc, truyện ngắn hay, thơ, tử vi Đông Phương, bài trang điểm sắc đẹp, 
          quảng các và rao vặt… phát ở New York, New Jersey, và Connecticut.
          </p>
        </div>
        <Carousel showThumbs={false} showIndicators={false} showStatus={true}  className='Car2'>
        {
            imgCover.map((url, index) => (
              <img key={index} src={url} />
            ))
        }
        </Carousel>
      </div>
    </div>
  )
}
