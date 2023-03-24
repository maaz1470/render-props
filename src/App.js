import HoverCounter from './component/HoverCounter';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter'
export default function App(){
  return (
      <>
        <Counter>
          {(count,increment) => (
              <HoverCounter count={count} increment={increment} />
          )}
        </Counter>
        <Counter>
          {(count,increment) => (
            <ClickCounter count={count} increment={increment} />
          )}
        </Counter>
      </>
    )
}
