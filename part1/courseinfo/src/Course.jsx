import './index.css'

const Header = (props) => {
  return (
    <div>
      <h1> {props.text}</h1>
    </div>
  )
}

const Part = ({ name, exercises, id }) => {
  return (
    <div>
      <p>
        {name} {exercises} {id}
      </p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

// Course component for formatting a single course
const Course = ({ course }) => { 
  const exercises_arr = course.parts.map(part => part.exercises)
  const total = exercises_arr.reduce((sum, current) => sum + current, 0)
  
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Statistic text={'Total of'} value={total}/>
    </div>
  )
}

export default Course
