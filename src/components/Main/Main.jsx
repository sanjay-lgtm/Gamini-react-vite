import React, { useContext, useId } from 'react'
import './Main.css'
import UserIcon from '../../assets/user_icon.png'
import compassIcon from '../../assets/compass_icon.png'
import bulbIcon from '../../assets/bulb_icon.png'
import messageIcon from '../../assets/message_icon.png'
import codeIcon from '../../assets/code_icon.png'
import galleryIcon from '../../assets/gallery_icon.png'
import micIcon from '../../assets/mic_icon.png'
import sendIcon from '../../assets/send_icon.png'
import gaminiIcon from '../../assets/gemini_icon.png'
import { Context } from '../../context/Context'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={ UserIcon } alt='' />
            </div>
            <div className='main-container'>
                { !showResult

                    ? <>
                        <div className='greet'>
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on upcoming road trip</p>
                                <img src={ compassIcon } alt='' />
                            </div>
                            <div className='card'>
                                <p>Briefly summarize this concept urban planning </p>
                                <img src={ bulbIcon } alt='' />
                            </div>
                            <div className='card'>
                                <p>Brainform team bonding activities for our work retreat</p>
                                <img src={ messageIcon } alt='' />
                            </div>
                            <div className='card'>
                                <p>Improve the readibility of the following code</p>
                                <img src={ codeIcon } alt='' />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className='result-title'>
                            <img src={ UserIcon } alt='' />
                            <p>{ recentPrompt }</p>
                        </div>
                        <div className='result-data'>
                            <img src={ gaminiIcon } alt='' />
                            { loading
                                ? <div className='loader'>
                                    <hr/>
                                    <hr/>
                                    <hr/>
                                </div>
                                :
                                <p dangerouslySetInnerHTML={ { __html: resultData } }></p>
                            }

                        </div>
                    </div>


                }

                <div className='main-bottom'>
                    <div className='search-box'>
                        <input onChange={ (e) => setInput(e.target.value) } value={ input } type='text' placeholder='Enter a prompt here' />
                        <div>
                            <img src={ galleryIcon } alt='' />
                            <img src={ micIcon } alt='' />
                            {input?<img onClick={ () => onSent() } src={ sendIcon } alt='' />:null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gamini may display inaccurate info, including about people, so double click its responses . Your Privacy with Gamini App.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
