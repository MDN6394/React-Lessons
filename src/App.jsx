
import Hello from './components/hello.jsx'
import Letter from './components/letter.jsx' 
import Card from './components/color_card.jsx'
import MultiplicationTable from './components/multiplication_table.jsx'
import Rater from './components/rater.jsx' 
import ProgressBar from './components/progress_bar.jsx'

function App() {
  return (
    <>
    {/*<Card color = "#000000"/>
    <Card color = "#7dbe32"/>
    <Card color = "#190b6b"/>
    <Hello target="Batman"/>
    <Hello target="Superman"/>
    <Hello target="Hulk"/>
    <Letter bgColor= "red">A</Letter>
    <Letter bgColor= "blue">E</Letter>
    <Letter bgColor= "green">I</Letter>
    <Letter bgColor= "yellow">O</Letter>
    <Letter bgColor= "purple">U</Letter>*/}
    <MultiplicationTable number= "5"/>
    <Rater rating = {1} max = {5}/>
    <Rater rating = {3} max = {3}/>
    <Rater rating = {7} max = {8}/>
    <ProgressBar percentage="75" color="#ce4b99" />
    <ProgressBar percentage="15" color="#ce1b29" />
    <ProgressBar percentage="65" color="#125b69" />
    </>
  )
}

export default App
