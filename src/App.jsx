{/*Тут реализован гланые компанет которые будет контролировать все компаненты ту будет данные передаваться для компанентов*/}
import {useState} from 'react';

{/*Тут я буду импортировать инструменты из бровсера что бы их применять для создание маршрутизаторов*/}
import {Routes,Route,Link} from 'react-router-dom'

import './App.css';

{/*Тут я импортировал все мои компаненты*/}
import About from './component/About.jsx';
import Spisok_del from './component/Spisok_del.jsx';
import Zapis_del from './component/Zapis_del';

function App(){
  {/*Тут реализовываем состояние которые будет использоваться в компаненти список дел для исптут*/}
  const[zapis_zadachi, setZapis_zadachi]=useState("");

  {/*Тут я реализовал состояние которые будет хранить все наши записоные дела*/}
  const[xranilesh_del, setXranilesh_del]=useState([]);

  {/*Тут я реализовываю функцию что бы при нажатие на кнопку добавить она добавляла задачи в массив*/}
  function dobavit_zadachi(){
    setXranilesh_del([
      ...xranilesh_del,
      zapis_zadachi
    ]);
     alert("Добавлена задача");
    setZapis_zadachi("");
  }
  return(
    <div className="App">
      <h1>Главные компонент </h1>

      {/*Тут я реализовал навигационую панель для переключение между компанентами*/}
      <nav>
        <hr/>
        <Link to='/'><button>О нас</button></Link>
        <Link to='/spisok_del'><button>Список дел</button></Link>
        <Link to='/zapis_del'><button>Запись дел</button></Link>
        <hr/>
      </nav>
       
       {/*Тут я использовал роудес как для хранение компанентов что бы им потом передавать данные из главного 
       компанента спомощью пропсов*/}
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/spisok_del' element={<Spisok_del xranilesh_del={xranilesh_del} setXranilesh_del={setXranilesh_del} />} />
        <Route path='/zapis_del' element={<Zapis_del zapis_zadachi={zapis_zadachi}  setZapis_zadachi={setZapis_zadachi} dobavit_zadachi={dobavit_zadachi} />} />
      </Routes>
    </div>
  );
}
export default App;
