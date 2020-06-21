import React from 'react';
import ReactPlayer from 'react-player';

function Footer() {
  return (
    <header style={headerStyle}>
       <div
	  style = {{
		  display: 'flex',
	    	  justifyContent: 'center',
		  alignItems: 'center'
	          }}
	  >
	  <ReactPlayer
	  	url="https://www.youtube.com/watch?v=tRJYTHtE6pc"
	  	width={1200}
	        height={500}
	  
	  />
       </div>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '100px'
}

export default Footer;
