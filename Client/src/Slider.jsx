import { useEffect, useState, useRef } from 'react'
import './Slider.css'
import { data } from './assets/data.js'

const Slider = () => {
  const listRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode.querySelectorAll(`li > img`)[currentIndex]
    if (imgNode) {
        console.log(imgNode)
      const scrollX = imgNode.offsetLeft - listNode.offsetLeft
      listNode.scrollTo({
        left: scrollX,
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const scrollToImage = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? data.length - 1 : curr - 1
      })
    } else {
      const isLastSlide = currentIndex === data.length - 1
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1)
      } else {
        setCurrentIndex(0)
      }
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='main-container'>
      <div className="slider-container">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="container-images">
          <ul ref={listRef}>
            {
              data.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.imgUrl} width={700} height={480} alt={`Slide ${item.id}`} />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="dots-container">
          {
            data.map((_, idx) => (
              <div key={idx} className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(idx)}>
                &#9865;
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider
