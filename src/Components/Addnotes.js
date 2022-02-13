import { useState } from 'react'
import { MdCancel} from 'react-icons/md';
import toast from 'react-hot-toast';

function Addnotes({onAdd, onadd}) {
     const [title, setTitle] = useState('');
     const [text,setText] = useState('');

  const submit = (e)=>{
      e.preventDefault();

      if (!text) {
          alert('please add some Passwords...')
          return
      }

      onAdd({text , title})
      setTitle('');
      setText('')

      toast.success('Successfully saved!');
    
      toast('Good Job!', {
        icon: '👏',
      });  
  }

    return (
        <div id='formadd'>
        <form onSubmit={submit}  >
        <div className='formhead'>
        <h1>🔐 Private lane🙈</h1>
        <p>🟢Your Passwords are 100% Secured with Us.✔</p>
        </div>
        <div className='inputst'>
        <label>Brand</label>
          <input type='text' value={title} placeholder='e.g Twitter,  facebook ...' onChange={(e) => setTitle(e.target.value)} />
          <label>Type Password</label>
          <textarea type='text' value={text} placeholder='Write the Passowrd Here...' onChange={(e) => setText(e.target.value)} />
          <div className='formbtns'>
          
          <input id='btnsubmit'  type='submit' value='🔐Save' />
          </div>
          </div>
        </form>
        <MdCancel id='btncancel' style={{fontSize:'30px'}} onClick={onadd}/>
        </div>
    )
}

export default Addnotes
