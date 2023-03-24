import Section from './component/Section';
import ClickCounter from './component/ClickCounter';
import Counter from './component/Counter'
import React from 'react'
import ThemeContext from './contexts/ThemeContext'

export default class App extends React.Component{
  state = {
    theme: 'dark'
  }
  render(){
    const {theme} = this.state
    return (
      <>
        <ThemeContext.Provider value={{theme: theme}}><Section /></ThemeContext.Provider>
        <Counter>
          {(count,increment) => (
            <ClickCounter count={count} increment={increment} />
          )}
        </Counter>
      </>
    )
  }
}
