
import { useState } from 'react'
import toast,{Toaster} from 'react-hot-toast';

function Header({onAdd, togglemode}) {
   const [modeicon, setModeicon] = useState(false);
  

const notify = () => { 
  
    if (modeicon !== false ) {
        toast(' You are in light Mode', {
            icon: '🌞',
          }); 
          setModeicon(!modeicon)
          togglemode((previousDarkmode) => !previousDarkmode) 

    }else{
        toast(' You are in Night Mode', {
            icon: '🌙',
          }); 
          setModeicon(!modeicon)
          togglemode((previousDarkmode) => !previousDarkmode) 

    }

   
}

    return (
        <div className='header'>
        <h1>🔐Private</h1>
            <button onClick={onAdd}>ADD🔐</button>
         <div>
      <button onClick={notify} className={`${modeicon ? 'darkmodebtn' : 'lightmodebtn'}`}   style={{fontSize:'20px'}}>{`${modeicon ? '🌙' : '🌞'}`}</button>
      <Toaster/>

    
    </div>
  
        </div>
        
    )
}

export default Header
