import React from 'react';
import './ImageLink.css'

const ImageLink = ({onInputChange,onSubmit}) =>{
	return(
		<div>
			<p className='f3'>{"This Magic brain will detect faces on your pictures, give it a try"}</p> 
			<div className='center'>
				<div className='center pa4 br3 shadow-5 form'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
					<button onClick={onSubmit} className='w-30 grow f4 link ph3 pv2 dib white bg-blue'>Detect</button>
				</div>
			</div>
		</div>		
	);
}
export default ImageLink;