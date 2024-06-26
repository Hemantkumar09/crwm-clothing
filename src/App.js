import './categories.style.scss';

//import CategoryItem from './component/category-item/category-item.component.jsx';
//import CategoriesMenu from './component/categories-menu/categories-menu.component.jsx';
import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component.jsx'
import Shop from './routes/shop/shop.component.jsx'





const App = () => { 
  
  return (
      <Routes>
        <Route path='/' element = {<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path ='shop' element={<Shop/>}/>
          <Route path='auth' element={<Authentication/>}/>        
        </Route>
      </Routes>     
  );
}

export default App;
