import { useState } from "react";
import Notelist from "./Components/Notelist";
import Addnotes from "./Components/Addnotes";
import Header from "./Components/Header";
import Herodiv from "./Components/Herodiv";

function App() {
  const [Darkmode, setDarkmode ] = useState(false);
  const [showform , setShowform] = useState(false);
  const [items, setItems]= useState([
    {
      title: 'Gmail',
      text: '******',
      id:1
  
    },
    {
      title: 'Instagram',
      text: '******',
      id:2
  
    },
    {
      title: 'Twitter',
      text: 'Password',
      id:3
  
    },
  ])


  const Deleteitem = (id) => {
    setItems(item => items.filter(el => el.id !== id));
  }
  
const Addnotebtn = (item)=>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newNote = { id, ...item};
  setItems([...items , newNote])

  setShowform(!showform)
  console.log(newNote, id);
}

const Addnotebtncancel = (e)=>{
  setShowform(!showform)
  
}



  return (
    <div className={`${Darkmode && 'dark-mode'}`}>
    <div className="App">
    <Header onAdd={() => setShowform(!showform)}  togglemode={setDarkmode}/>
  {showform  && <Addnotes onAdd={Addnotebtn} onadd={Addnotebtncancel}/>}

  <Herodiv/>
   <Notelist key={items.id} items={items} onDelete={Deleteitem}/>
   </div>
    </div>
  );
}

export default App;
