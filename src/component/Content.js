import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../contexts/ThemeContext'

export default function Content(){
	return (
		<>
			<h1>This is a Content</h1>
			<Counter>
				{(count,increment) => {
					return <ThemeContext.Consumer>{({theme}) => <HoverCounter count={count} increment={increment} theme={theme} />}</ThemeContext.Consumer>
				}}
			</Counter>
		</>
	)
}