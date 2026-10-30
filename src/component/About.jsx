import React from 'react';
import './style/About.css';


function About (){
	return(
		<div className="About">
			<h1>О нас - БЛАКНОТО</h1>
			<div className="about-card">
				<p>
					<b>БЛАКНОТО</b> - это твой личный задачник в стиле Ватсапа на черном фоне тетради.
				</p>
				<p>
					Идея простая: ты записываешь дела как сообщения, а выполняешь их как чаты.
					Зеленый - выполнил, красный - не выполнил, удалил - забыл.
				</p>
				<p className="about-tag">
					Сделано для тех, кто любит порядок в тетради.
				</p>
			</div>
		</div>
	);
}
export default About;