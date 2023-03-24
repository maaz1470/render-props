import React from 'react'

function ClickCounter({count,increment}) {
	return <button type="submit" onClick={increment}>Like {count} Times</button>
}

export default ClickCounter;