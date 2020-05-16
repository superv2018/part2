import React from 'react'


const Course = ({course}) => {
    return (
      <>
        <Header course={course} />
        <Content course={course} />
      </>
    )
  }
  
  
  
  const Header = ({course}) => <h1>{course.name}</h1>
  
  
  
  const Content = ({course}) => {
    const total = course.parts.reduce((s, p) => s + p.exercises, 0)
  
    console.log('from content', course)
    return (
      <div>
        {course.parts.map( part => <Parts key={part.id} part={part.name} exercises={part.exercises} /> )}
        <h4>Total of {total} exercises</h4>
      </div>
    )
  
  }
  
  const Parts = ({ part, exercises}) => {
    return (
      <div>
        <p>{part}: {exercises}</p>
      </div>
    )
  }
  
  export default Course;