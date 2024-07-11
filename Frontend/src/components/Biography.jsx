import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src= {imageUrl} alt='aboutUs'/>
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are?</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus at maxime similique aliquam ab facere asperiores eos. Vitae minus architecto, dolores quae corrupti soluta suscipit, repellendus voluptate fugit nemo pariatur aspernatur ad esse accusantium. Quas, recusandae harum. Dolorem, corporis tempora eius repellendus, assumenda tenetur quasi similique ratione mollitia facilis sequi.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, atque! Deleniti sint at unde placeat assumenda accusantium nostrum, consectetur quas dolorem cupiditate maiores cumque sed officia, harum natus ullam, expedita culpa vero incidunt ab nobis.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non officia inventore error.</p>
        <p>Lorem, ipsum dolor.</p>
     
      </div>
    </div>
  )
}

export default Biography
