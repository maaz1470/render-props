import React from 'react'

function HoverCounter({count,increment, theme}) {
	const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#fff'} : null;
	return <h1 style={style} onMouseOver={increment}>Hover {count} Times</h1>
}

export default HoverCounter;