import React from 'react';
import './index.css';


class ProductDashboard extends React.Component{
    
    render(){
        console.log(this.props.products)
        return(
            <>
            <div className="container Grid_style">
                <h3>Apollo Products</h3>
                <h5>Top Brands</h5>
                <div className="row" style={{marginTop:"30px"}}>
                {this.props.products.map((item, i)=>{
                              return(
                    <div className="col-sm-4">
                         
                                  <div key={i}>
                                        <img src={item.imgsrc} alt="frist" />
                                        <h4>Name : {item.Name}</h4>
                                        <h6>Price : {item.price}</h6>
                                        <button className="btn-btn-primary" onClick={()=>{this.props.addtocart(item)}}>Add To Cart</button>
                                   </div>
                    </div>
                    
                    )
                          })
                      }
                </div>
                </div>
            </>
        );
    }
}

export default ProductDashboard;