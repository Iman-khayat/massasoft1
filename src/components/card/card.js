import "./card.css"
import logo from '../../components/assets/img/MASSASOFT.png'


const card = () => {
  return (
    <div>
      <div className="ourpartner-item">
          <div className="card-wrapper">
            <img className="partner-img" src={logo}></img>
            <div className="patrner-content">
              <h6 className="partner-content-title">
                Massasoft company<br/>
                <a href="https://www.massasoft.dk/">Visit website</a>
                
              </h6>

            </div>
          </div>
        </div>
    </div>
  )
}

export default card
