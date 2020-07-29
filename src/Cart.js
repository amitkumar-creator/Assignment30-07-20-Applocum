import React from 'react';


const Cart = (props) => {
    const data =  props.products.filter(item =>item.isCartAdded)
    if(!data.length){
        return  <h5 style={{marginLeft:"700px",marginTop:"200px", color:"red"}}> No Item in this cart</h5>
    }
        return(
              <div className="row">
                  {
                    data.map((itm, i)=>{
                         return(
                             <>
                             <div className="col-sm-3 col-lg-3"><img src={itm.imgsrc} alt="img" height="200" width="200" /></div>
                             <div className="col-sm-9">
                             <p className="data">Product Name : {itm.Name}</p>
                             <p>Price: {itm.price}</p>
                             <p>Location: {itm.Location}</p>
                             <p>Qty: {itm.qty}</p>
                             </div><hr />
                             </>
                         )
                    })
                  }
              </div> 
        );
}

export default Cart;