import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route, Redirect,withRouter } from 'react-router-dom'
import Sign from './Sign';
import Resister from './Resister';
import ProductDashboard from './ProductDashboard';
import Cart from './Cart';
import Navbar from './Navbar';
import './App.css';


const App = (props) => {
  const list =  [
                  { id: '1', "Name": "Cheese", isCartAdded : false, "price" : 2.50, "Location": "Refrigerated foods", "qty": 2 , "imgsrc":"./image/images/img1.jpg"},
                  { id: '2', "Name": "Crisps", isCartAdded : false, "price" : 3, "Location": "the Snack isle", "qty": 5, "imgsrc":"./image/images/img2.jpg"},
                  {id: '3', "Name": "pizza", isCartAdded : false, "price" : 4, "Location": "Refrigerated foods", "qty": 7, "imgsrc":"./image/images/img3.jpg"},
                  { id: '4', "Name": "Chocolate", isCartAdded : false, "price" : 1.50, "Location": "the Snack isle", "qty": 8, "imgsrc":"./image/images/img4.jpg"},
                  { id: '5', "Name": "Selfraising flour", isCartAdded : false, "price" : 1.50, "Location": "Home baking", "qty": 0, "imgsrc":"./image/images/img5.jpg" },
                  { id: '6', "Name": "Ground almonds", isCartAdded : false, "price" : 3, "Location": "Home baking", "qty": 1,"imgsrc":"./image/images/img6.jpg" }
                  ];

  const [products, setproductAddCart] = useState(list);

  const addtocart = (data) =>{
    data.isCartAdded = !data.isCartAdded;
    let productsList = [...products];
    productsList = productsList.filter((item) => item.id !== data.id);
    setproductAddCart([
      ...productsList,
      data
    ].sort((a,b)=>a.id-b.id));
  }
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact strict path='/' render={(props) => <Home {...props}/>} />
        <Route exact path='/sign' render={(props) => <Sign {...props}/>} />
        <Route exact path='/resister' component={Resister} />
        <Route exact path ="/dashboard" render = {() => <ProductDashboard products= {products}  addtocart = {addtocart} />} />
         <Route exact path ="/cart" render={(props) => <Cart products={products} />} />
      </Switch>
    </>
  );
}

const Home = (props) =>{
  if(localStorage.getItem('isLoggedIn')){
    return <Redirect to='/dashboard' />;
  }
  return <Redirect to='/sign' />
}

export default withRouter(App);
