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
        <Route path='/fiveToTen/music' exact><Music age={10} /></Route>
        <Route path='/fiveToTen/video' exact><Video age={10} /></Route>
        <Route path='/fiveToTen' component={FiveToTen} exact />

        <Route path='/elevenToThirteen/music' exact ><Music age={13} /></Route>
        <Route path='/elevenToThirteen/video' exact ><Video age={13} /></Route>
        <Route path='/elevenToThirteen/books' exact ><Books age={13} /></Route>
        <Route path='/elevenToThirteen' component={ElevenToThirteen} exact />

        <Route path='/fourteenToEighteen/music' exact ><Music age={18} /></Route>
        <Route path='/fourteenToEighteen/video' exact ><Video age={18} /></Route>
        <Route path='/fourteenToEighteen/books' exact ><Books age={18} /></Route>
        <Route path='/fourteenToEighteen/career' exact ><Career age={18} /></Route>
        <Route path='/fourteenToEighteen/moral' exact ><Moral age={18} /></Route>
        <Route path='/fourteenToEighteen/' component={FourteenToEighteen} exact />

        <Route path='/fun-edu/' component={Home} />
        <Route path='/' component={Home} exact />
      </Switch>
    </div>
  )
}

export default App
