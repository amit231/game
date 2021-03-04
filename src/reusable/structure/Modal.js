import React from 'react'
import './Modal.css'
import Rules from '../../assets/images/image-rules-bonus.svg'
function Modal(props) {
    let classDiv = 'backdrop'
    let classImg = 'rules'
    if(!props.showModal)
    {
        classDiv='backdrop shift'
        classImg='rules shift'
    }
    return (
            <img onClick={props.toggleModal} src={Rules} alt='rules' className={classImg}/>
    )
}

export default Modal
