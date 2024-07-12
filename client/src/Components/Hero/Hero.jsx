import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
          <img src={profile_img} alt="" />
          <h1><span>I&apos;m Sandipan Das,</span> Full Stack Devoloper based in India</h1>
          <p> I am a FullStack Devoloper from Kolkata,India with 3 years ofexperience in multiple companies like SolviT, BharatSportX and Freelancing. </p>
          <div className="hero-action">
              <div className="hero-connect">Connect with me</div>
              <div className="hero-resume">My Resume</div>
          </div>
    </div>
  )
}

export default Hero
