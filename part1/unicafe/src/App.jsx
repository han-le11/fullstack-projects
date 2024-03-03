import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
    {props.text}
    </button>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log('add a good rating')
    setGood(good + 1)
  }
    
  
  return (
    <div>
      <Header text='Give feedback'/>
      <Button 
        onClick={handleGood} 
        text='good'
      />

    <Header text='Statistics'/>
    </div>
  )
}

export default App