import React, { useState } from 'react'
import './Issues.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export const Issues = ({magazines}) => {
  const [imgCover, setImgCover] = useState(magazines[0].imagesCover);
  const [imgIssue, setImgIssue] = useState(magazines[0].imagesIssue);

  const onSelectChangeCover = (event) => {
    setImgCover(magazines[event.target.value].imagesCover)
    setImgIssue(magazines[event.target.value].imagesIssue)
  }
  const magazineIssues = magazines.map((eachMagazine)=> {
    return <option key={eachMagazine.id} value={eachMagazine.id}>{eachMagazine.issueDate}</option>
  })
  return (
    <div className='Issues'>
      <label id='label'>Issue Date</label>
      <select onChange={onSelectChangeCover} id='select'>
        {magazineIssues}
      </select>
      <div className='TwoCar'>
      <div className='Cover'>
        <label>Cover</label>
        <Carousel showThumbs={false} showIndicators={false} showStatus={true}  className='Car'>
        {
            imgCover.map((url, index) => (
              <img key={index} src={url} />
            ))
        }
        </Carousel>
      </div>
      <div className='Cover'>
        <label>Issue</label>
      <Carousel showThumbs={false} showIndicators={false} showStatus={true}  className='Car'>
      {
          imgIssue.map((url, index) => (
            <img key={index} src={url} />
          ))
      }
      </Carousel>
      </div>
      </div>
    </div>
  )
}
