import React from 'react'

const Hero = ({title, imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h1>{title}</h1>
            <p>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi praesentium exercitationem asperiores repellat optio ratione, sequi similique, quia molestiae possimus minima. Doloremque alias deleniti delectus distinctio similique sint porro saepe dicta, doloribus dolores totam voluptas? Odit amet, porro nam officia repudiandae ducimus eius quod eligendi consequatur, minima fugiat quos atque. 
            </p>
        </div>
        <div className="banner">
            <img src={imageUrl} alt = "hero" className="animated-image"/>
            <span>
                <img src="/Vector.png" alt= "vector"/>
            </span>
        </div>
    </div>
  )
}

export default Hero
