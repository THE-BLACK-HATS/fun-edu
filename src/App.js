import './App.css'
import { Route, Switch } from 'react-router'
import Home from './components/Home'
import FiveToTen from './components/FiveToTen'
import ElevenToThirteen from './components/ElevenToThirteen'
import FourteenToEighteen from './components/FourteenToEighteen'
import Music from './components/resource pages/Music'
import Video from './components/resource pages/Video'
import Books from './components/resource pages/Books'
import Career from './components/resource pages/Career'
import Moral from './components/resource pages/Moral'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/fun-edu/fiveToTen/music' exact><Music age={10} /></Route>
        <Route path='/fun-edu/fiveToTen/video' exact><Video age={10} /></Route>
        <Route path='/fun-edu/fiveToTen' component={FiveToTen} exact />

        <Route path='/fun-edu/elevenToThirteen/music' exact ><Music age={13} /></Route>
        <Route path='/fun-edu/elevenToThirteen/video' exact ><Video age={13} /></Route>
        <Route path='/fun-edu/elevenToThirteen/books' exact ><Books age={13} /></Route>
        <Route path='/fun-edu/elevenToThirteen' component={ElevenToThirteen} exact />

        <Route path='/fun-edu/fourteenToEighteen/music' exact ><Music age={18} /></Route>
        <Route path='/fun-edu/fourteenToEighteen/video' exact ><Video age={18} /></Route>
        <Route path='/fun-edu/fourteenToEighteen/books' exact ><Books age={18} /></Route>
        <Route path='/fun-edu/fourteenToEighteen/career' exact ><Career age={18} /></Route>
        <Route path='/fun-edu/fourteenToEighteen/moral' exact ><Moral age={18} /></Route>
        <Route path='/fun-edu/fourteenToEighteen/' component={FourteenToEighteen} exact />

        <Route path='/fun-edu/' component={Home} />
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  )
}

export default App
