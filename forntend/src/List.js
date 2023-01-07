import logo from './logo.svg';
import './App.css';
import DisplayLocations from './DisplayLocations';

function List() {
  const list =[1,2,3,4]
  return (
    <div >
      {
        list.map((val)=>{
          return <span>{val}</span>
        })
      }
            <DisplayLocations />
7

       </div>
  );
}

export default List;
