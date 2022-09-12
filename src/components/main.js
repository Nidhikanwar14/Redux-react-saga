
import {useDispatch} from "react-redux";
import {addToCart, emptyCart, removeFromCart} from "../redux/action";
// import {PRODUCT_LIST} from "../redux/constant";
import {productList} from "../redux/productAction";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) =>state.productData);
    console.log("data in main component from saga...",data)

    useEffect(()=>{
        dispatch(productList())
    },[])
    return (
        <>
        <div>
            <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
        </div>


         <div className="product-container">
             {
                 data.map((item) => <div key={item.id} className="product-item">
                  <img src = {item.photo} alt=""/>
                  <div>Name : {item.name} </div>
                  <div>Color : {item.color} </div>
                  <div>Brand : {item.brand} </div>
                  <div>Price : {item.price} </div>
                  <div>Category : {item.category}
                  </div>
                   <div>
                       <button onClick={()=>dispatch(addToCart(item))}>ADD TO CART </button>
                       <button onClick={()=>dispatch(removeFromCart(item.id))}>REMOVE FROM CART </button>
                   </div>
                 </div>
                     )
             }
         </div>

        </>
    );
}

export default Main;
