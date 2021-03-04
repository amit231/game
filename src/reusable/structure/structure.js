import React,{useState,useContext} from 'react'
import './Structure.css'
import logo from '../../assets/images/logo-bonus.svg'
import Modal from './Modal'
import authContext from '../../store/useAuthContext'
function Structure(props) {

    let currContext = useContext(authContext)
    let [showModal,setModal] = useState(false)
    let classArr = 'logo'
    
    if(props.animateLogo){
      console.log('animate thisjk')
      classArr = 'logo shift-logo'
    }
    let logoutBtn = <></>;  
    let scoreSection=(<>
      <img className={classArr} alt='logo' src={logo}/>
    </>)
    if(props.showScore){
      logoutBtn =         <button className='logout' onClick={props.logoutHandler}> Log out</button>
      scoreSection = (
          <>
            <img className="logo" alt="logo" src={logo} />
            <div className="innerScoreContainer">
              <span class="score-text">SCORE</span>
              <span class="score">{currContext.authState.score}</span>
            </div>
          </>
        );
    }
    function toggleModal(){
      setModal(!showModal)
    }
    return (
      <div className="structureContainer">
        <div className="scoreContainer">{scoreSection}</div>
        <Modal
          showModal={showModal}
          shouldCloseOnOverlayClick={true}
          toggleModal={toggleModal}
        />
        {props.children}
        {logoutBtn}
        <button onClick={toggleModal} className="rulesBtn">
          Rules
        </button>
      </div>
    );
}

export default Structure

