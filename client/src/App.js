
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "../src/pages/home.js";
import {Auth} from "../src/pages/auth.js";
import {CreateRecipe} from "../src/pages/create-recipe";
import {SavedRecipes} from "../src/pages/saved-recipes";
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<Auth />}/>
        <Route path='create-recipe' element={<CreateRecipe />}/>
        <Route path='saved-recipes' element={<SavedRecipes />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
