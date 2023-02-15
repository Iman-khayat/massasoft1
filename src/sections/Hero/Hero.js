  import "./Hero.css"
  import logo from '../../components/assets/img/2.png'
  import laptop from '../../components/assets/img/laptop.jpg'



 const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
        <img className="background" src={laptop}/>
        </div>
      
    </div>
  )
}

export default Hero
