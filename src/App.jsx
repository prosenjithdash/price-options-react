import LineCart from "./components/LineChart/LineCart"
import Navbar from "./components/Navbar/Navbar"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"


function App() {

  return (
    <div>
      <Navbar/>
      <PriceOptions />
      <LineCart />
      <Phones/>

      
    </div>
  )
}

export default App
