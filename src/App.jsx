
import './App.css'
import RefForm from './components/refForm/RefForm'

function App() {

  const handlesignup = data => {
    console.log('sign up', data)
    
  }

  const handleUpdate = data => {
    console.log('update', data)
  }

  return (
    <>

      <RefForm formTitle={"Sign up"} submitBtn={'Sign-up'} handleSubmit={handlesignup}>
      <div>
        <h2>Sign Up</h2>
        <p>Please Sign up right now</p>
      </div>
      </RefForm>
      <br/>
      <RefForm formTitle={"ProFile Update"} submitBtn={'Update'} handleSubmit={handleUpdate}>
      <div>
        <h2>Sign Up</h2>
        <p>Please update right now</p>
      </div>
      </RefForm>
      
    </>
  )
}

export default App
