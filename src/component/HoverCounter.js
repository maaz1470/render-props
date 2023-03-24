import React from 'react'

function HoverCounter({count,increment}) {
	
	return <h1 onMouseOver={increment}>Hover {count} Times</h1>
}

export default HoverCounter;