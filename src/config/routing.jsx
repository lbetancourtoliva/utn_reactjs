import {Route, Routes} from 'react-router-dom';
import Home from '../main/Home';
import Registration from '../main/auth/Registration';
import Login from '../main/auth/Login';
import Product from '../main/ecommerce/Product';
import ContentUnavailable from '../main/error/ContentUnavailable';

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registro' element={<Registration/>}/>
            <Route path='/ingresar' element={<Login/>}/>
            <Route path='/producto/:id' element={<Product/>}/>
            <Route path='*' element={<ContentUnavailable/>}/>
        </Routes>
    )
}

export default Routing;