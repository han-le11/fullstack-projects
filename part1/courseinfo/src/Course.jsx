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

const Total = (props) => {
  // Bold text
  return (
    <div>
      <p>
       <strong>{props.text} {props.total}</strong>
      </p>
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
      <Total text={'Total of'} total={total}/>
    </div>
  )
}

export default Course