{/*тут я реализовал компанент для отображение списка моих дел на сегодня моих дел*/}

import{useState} from 'react';

function Spisok_del({xranilesh_del,setXranilesh_del}){
	//тут я реализовал три состояние которые будут изначально хранить в себе опеределеные цвета и взависимоти от к нопки они их будут менять
	const[color,setColor]=useState({});
	
//Тут написал функцию для изменение цвета пи выполнение задачи на зеленыей
	function svet_green(index){
		setColor(prev =>({
			...prev,
			[index]:'green'
		}));
	}
    
    //Тут реализована функция для изменение цвета задачи на красные при нажатие не выполнил
    function svet_red(index){
    	setColor(prev =>({
    		...prev,
    		[index]:'red'
    	}));
    }

    //Тут реализована функция для удаление задачи из списка
    function ydalenie_zadachi(index){
    	setXranilesh_del(
    		xranilesh_del.filter((_, i)=> i !==index)
    	);}
	return(
		<div className='Spisok_del'>
			<h1>Список  дел </h1>
			{
				xranilesh_del.map((danie, index) =>(
					<ul key={index}> 
						<li style={{color:color[index]}}>{danie}
                          <button onClick={()=> svet_green(index)}>Выполнил</button>
						<button onClick={()=> svet_red(index)}>Не выполнел</button>
						<button onClick={()=> ydalenie_zadachi(index)}>Удалить</button>

						</li>
						
					</ul>

				))}
		</div>
	);
}
export default Spisok_del;