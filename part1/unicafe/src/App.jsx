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

const Statistics = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      {props.text} {props.count} {props.text2}
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)


  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + bad + neutral)
    setScore(score + 1)
    console.log('current score', score)
  }

  const handleNeutral = () => {
    console.log('add a neutral rating')
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + bad + good)
    setScore(score + 0)
  }

  const handleBad = () => {
    console.log('add a bad rating')
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
    setScore(score - 1)
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
      <Statistics text='good: ' value={good}/>
      <Statistics text='neutral: ' value={neutral}/>
      <Statistics text='bad: ' value={bad}/>
      <Statistics text='total: ' value={total}/>
      <Statistics text='average: ' value={score/total}/>
      <Statistics text='positive percentage: ' value={good/total * 100}/>
    </div>
  )
}

export default App