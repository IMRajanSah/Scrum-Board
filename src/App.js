import{BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import AddStory from './pages/AddStory';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditStory from './pages/EditStory';
import Story from './pages/Story';

function App() {
  return (
    <BrowserRouter>
          <Switch>
          <Route exact path = "/" component = {Story}/>
          <Route exact path="/addStory" component={AddStory} />
          <Route exact path="/editStory/:id" component={EditStory} />
          <Route path="*">
           <h3> 404 page not found !</h3>
          </Route>
         </Switch>
       </BrowserRouter> 
  );
}

export default App;
