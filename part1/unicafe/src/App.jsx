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

const Total = (props) => {
  return (
    <p>
      {props.text} {props.count}
    </p>
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

  const handleNeutral = () => {
    console.log('add a neutral rating')
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log('add a bad rating')
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header text='Give feedback'/>
      <Button 
        onClick={handleGood} 
        text='good'
      />
      <Button 
        onClick={handleNeutral} 
        text='neutral'
      />
      <Button 
        onClick={handleBad} 
        text='bad'
      />
      <Header text='Statistics'/>
      <Total text='good: ' count={good}/>
      <Total text='neutral: ' count={neutral}/>
      <Total text='bad: ' count={bad}/>
    </div>
  )
}

export default App