import './App.css'
import { Route, Switch } from 'react-router'
import Home from './components/Home'
import FiveToTen from './components/FiveToTen'
import ElevenToThirteen from './components/ElevenToThirteen'
import FourteenToEighteen from './components/FourteenToEighteen'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/fiveToTen' component={FiveToTen} />
        <Route path='/elevenToThirteen' component={ElevenToThirteen} />
        <Route path='/fourteenToEighteen' component={FourteenToEighteen} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
