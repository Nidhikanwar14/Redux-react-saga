
import './App.css';
import {addToCart} from "./redux/action";
import {useDispatch} from "react-redux";
import Header from "./components/Header";
import Main from "./components/main";
import {Route , Routes} from "react-router-dom";
import Cart from "./components/Cart";

function App() {

  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>

   </div>
  );
}

export default App;
