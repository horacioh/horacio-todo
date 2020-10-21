import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { API } from 'aws-amplify'
import { createTodo } from './graphql/mutations'

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: 'q2398q7b23',
      title: 'Todo example',
      completed: false,
    },
  ])

  const handleFormSubmit = async (newTodo) => {
    const result = await API.graphql({
      query: createTodo,
      variables: {
        input: newTodo
      }
    })
    console.log({result})

    setTodos([...todos, result.data.createTodo])
  }
  return (
    <div className="w-screen h-screen bg-gray-100 p-4">
      <main className="mx-auto max-w-3xl bg-white rounded-lg shadow-md m-8">
        <Header title="Another ol' Todo App" />
        <TodoForm handleFormSubmit={handleFormSubmit} />
        <hr />
        <TodoList todos={todos} updateTodos={setTodos} />
      </main>
      <Footer />
    </div>
  )
}

export default App
