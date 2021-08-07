import React from 'react';
import './FaceRec.css';
const FaceRec = ({imageurl}) =>{
	return(
		<div className='center ma3'>
		<img src={imageurl} alt='imaa' className='tes' />
		</div>		
	);
}
export default FaceRec;