import React from 'react'
import { Hero, Biography, Departments, MessageForm} from '../components/index.jsx'
const HomePage = () => {
  return (
    <div>
      <Hero title={"WelCome to ZeeCare Medical Institute | Your Trusted Medical Health Provider"} imageUrl={"/hero.png"}/>
      <Biography imageUrl={"/about.png"}/>
      <Departments />
      <MessageForm />
    </div>
  )
}

export default HomePage
