const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Olá {props.name}, você {props.idade} anos
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Renato'
  const idade = 40

  return (
    <div>
      <h1>Olá a todos!</h1>
      <Hello name = 'Humberto' idade={30 - 10}/>
      <Hello name = {name} idade={idade}/>
      
    </div>
  )
}
 
export default App
