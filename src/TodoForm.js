import React from 'react'

function TodoForm({ handleFormSubmit }) {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleFormSubmit({
      title: inputValue,
      completed: false,
    })
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          New Todo
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={inputValue}
          placeholder={'enter a todo'}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add todo
        </button>
      </div>
    </form>
  )
}

export default TodoForm
