
import {MdDeleteForever,  MdPassword} from 'react-icons/md'

function Notes({items, onDelete}) {
    return (
       
        <div className='cards' >

        <div className='noteshead'>
        <MdPassword style={{ fontSize:'80px', color:'white'}} />
        </div>
        <div className='herop'>
        <div className='Hero'>
            <h1>{items.title}</h1>
             <MdDeleteForever style={{color:'red', fontSize:'20px' , cursor:'pointer'}} size='1.5em'
            onClick={()=> onDelete(items.id)} />
            </div> 
            <div className='pdiv'>
            <p>{items.text}</p>
            <button className='password-hide-btn'>Hide</button>
                 </div>     
                 </div>       
            
        </div>   
        
    )
}

export default Notes
