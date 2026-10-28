{/*тут я реализовал компанент для отображение списка моих дел на сегодня моих дел*/}

import React from 'react';

function Spisok_del({xranilesh_del}){
	return(
		<div className='Spisok_del'>
			<h1>Список  дел </h1>
			{
				xranilesh_del.map((danie, index) =>(
					<ul key={index}>
						<li>{danie}</li>
					</ul>

				))}
		</div>
	);
}
export default Spisok_del;