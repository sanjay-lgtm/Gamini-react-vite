import React, { useContext, useState } from 'react';
import './Sidebar.css';
import menuIcon from '../../assets/menu_icon.png'; // Import the image directly
import plusIcon from '../../assets/plus_icon.png'; // Import the plus icon image
import messageIcon from '../../assets/message_icon.png';
import questionIcon from '../../assets/question_icon.png';
import historyIcon from '../../assets/history_icon.png';
import settingIcon from '../../assets/setting_icon.png';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const { onSent, priviousPrompt, setRecentPrompt ,newChat} = useContext(Context)


  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className='sidebar'>
      <div className='top'>
        {/* Menu Icon */ }
        <img onClick={ () => setExtended(prev => !prev) } className='menu' src={ menuIcon } alt='menu icon' />

        {/* New Chat section */ }
        <div onClick={() => newChat()} className='new-chat'>
          <img

            src={ plusIcon }
            alt='plus icon'
            aria-label='Toggle New Chat'
          />
          { extended ? <p>New Chat</p> : null }
        </div>

        {/* Recent section */ }
        { extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            { priviousPrompt.map((item, index) => {
              return (
                <div onClick={()=>setExtended(item)} className='recent-entry'>
                  <img src={ messageIcon } alt='message icon' />
                  <p>{ item.slice(0, 18) }...</p>
                </div>
              )
            }) }

          </div>
        ) }
      </div>

      {/* Bottom section */ }
      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={ questionIcon } alt='question icon' />
          { extended ? <p>Help</p> : null }
        </div>
        <div className='bottom-item recent-entry'>
          <img src={ historyIcon } alt='history icon' />
          { extended ? <p>Activity</p> : null }
        </div>
        <div className='bottom-item recent-entry'>
          <img src={ settingIcon } alt='setting icon' />
          { extended ? <p>Settings</p> : null }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
