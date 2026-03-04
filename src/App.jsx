
import Hello from './components/hello.jsx'
import Letter from './components/letter.jsx' 
import Card from './components/color_card.jsx'
import MultiplicationTable from './components/multiplication_table.jsx' 

function App() {
  return (
    <>
    <Card color = "#000000"/>
    <Card color = "#7dbe32"/>
    <Card color = "#190b6b"/>
    <Hello target="Batman"/>
    <Hello target="Superman"/>
    <Hello target="Hulk"/>
    <Letter bgColor= "red">A</Letter>
    <Letter bgColor= "blue">E</Letter>
    <Letter bgColor= "green">I</Letter>
    <Letter bgColor= "yellow">O</Letter>
    <Letter bgColor= "purple">U</Letter>
    <MultiplicationTable number= "5"/>
    </>
  )
}

export default App
