const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.name} {props.exercise}
      </p>
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

const App = () => {
  const courses = [
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
      <h1>Web Development Curriculum</h1>
      {courses.map(course => (
        <div key={course.id}>
          <Header course={course.name} />
          {course.parts.map(part => (
            <Content key={part.id} name={part.name} exercise={part.exercises} />
          ))}
          <Total text={`Total of ${course.parts.reduce((sum, part) => sum + part.exercises, 0)} exercises`} />
        </div>
      ))}
    </div>
  )
}

export default App
