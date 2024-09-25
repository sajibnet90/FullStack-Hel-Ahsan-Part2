const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((total,part)=> total + part.exercises,0)
  return (
    <p>Number of exercises {sum}</p>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
  <>
    {parts.map((part)=>
      <Part part={part} />
    )}   
  </>
  )}

//  Course component
const Course = ({ course, parts }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Course course= {course} parts={parts} />
    </div>
  )
}

export default App