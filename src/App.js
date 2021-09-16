import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/' component={ } />
        <Route path='/' component={ } /> */}
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
