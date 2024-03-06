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

const App = () => {
  // an object for multiple courses and their parts
  const courses = [
    // Course 1
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    // Course 2
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(c => <Course key={c.id} course={c} />)}
    </div>
  )
}

export default App
