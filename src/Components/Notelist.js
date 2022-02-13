import Notes from './Notes'
function Notelist({items, onDelete}) {
    return (
        <div className='NOTELIST'> 
    {items.map(item => (
        <div id='cards' key={item.id}>
        <Notes  key={item.id} items={item} onDelete={onDelete}/>
      </div>
      ))}
        </div>
    )
}

export default Notelist
