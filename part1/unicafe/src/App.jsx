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

// displays a single statistic
const StatisticLine = (props) => {
  if (props.value === props.value) {  // check if value is not NaN
    return (
      <p>
      {props.text} {props.value}
      </p>
    )
  }
}

const Statistics = (props) => {
  const { good, neutral, bad } = props // Destructuring
  if (good + neutral + bad == 0) {
    return (
      <p>
        No feedback given.
      </p>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={good + neutral + bad} />
      <StatisticLine text="average" value ={(good - bad) / (good + neutral + bad)} />
      <StatisticLine text="positive" value ={good / (good + neutral + bad) * 100  + "%"}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
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
      <Header text="Statistics" />
      <Statistics
        good={good} neutral={neutral} bad={bad}
      />
    </div>
  )
}

export default App