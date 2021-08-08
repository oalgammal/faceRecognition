import React from 'react';
import './FaceRec.css';
const FaceRec = ({imageurl, box}) =>{
	return(
		<div className='center ma3'>
			<div className='relative'>		
				<img id='inputIMG' src={imageurl} alt='imaa' className='tes' />
				<div className='bounding-box' style={{left: box.leftCol,top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>		
       		</div>
       	</div>		
	);
}
export default FaceRec;