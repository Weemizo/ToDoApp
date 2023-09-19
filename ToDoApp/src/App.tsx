import './App.css'
import TodoApp from './components/AddingFunc'

function App() {

  return (
    <>
        <div className="main">
          <div className="header">
            Basic To Do App
          </div>

          <div>
              <div className='container'>
                <TodoApp/>
              </div>
          </div>
        </div>
    </>
  )
}

export default App
