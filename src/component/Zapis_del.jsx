{/*Тут я реализовал компанент для записи моих дел*/}
import React from 'react';
import './style/Zapis_del.css';

function Zapis_del({zapis_zadachi,dobavit_zadachi,setZapis_zadachi }){
	return(
		<div className="Zapis_del">
			<h1>Запись дел </h1>

		<input value={zapis_zadachi} onChange={(event)=> setZapis_zadachi(event.target.value)} />
		<button onClick={dobavit_zadachi}>Добавить</button>

		<h4>{zapis_zadachi}</h4>


		</div>
	);
}

export default Zapis_del;