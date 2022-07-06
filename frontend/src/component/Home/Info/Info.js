import React from 'react'
import './Info.scss'
import firstInfo from '../../../assets/firstInfo.svg'
import secondInfo from '../../../assets/secondInfo.svg'

const Info = () => {
  return (
    <>
        <div className="info-container">
            <div className='info-section-1'>
                <div className='info-section-1-image'>
                    <img src={firstInfo} alt="Firstimage"/>
                </div>
                <div className='info-section-1-text'>
                    <h2>The right farm equipment for all need.</h2>
                    <p>our product protfoli covers all requirement. It does not make a different to us whether you are looking for an almost new device, a power package, or we will help you in your selection</p>
                    <button>Read full story </button>
                </div>



            </div>
            <div className='info-section-2'>
                <div className='info-section-2-text'>
                    <h2>Key information at a 
                    glance quality without risk. </h2>            
                    <p>our product protfoli covers all requirement. It does not make a different to us whether you are looking for an almost new device, a power package, or we will help you in your selection</p>
                    <button>Read full story </button>


                </div>
                <div className='info-section-2-image'>
                    <img src={secondInfo} alt="Secondimage"/>

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Info