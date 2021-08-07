import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () =>{
	return(
		<div className='na4 nt0 traaa'>
			<Tilt className="Tilt mh5 br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
				 <div className="Tilt-inner pa3"> <img style={{padingTop:'5px'}} alt='logo' src={brain}/> </div>
			</Tilt>
		</div>
	);
}
export default Logo;