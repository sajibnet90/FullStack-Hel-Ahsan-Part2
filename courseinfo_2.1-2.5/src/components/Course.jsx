const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((total,part)=> total + part.exercises,0)
  return (
    <p>Total of {sum} exercises</p>
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
const Course = ({ course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default Course