import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { NavLink} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
const Product = () => {
  const {id}=useParams();
  const  [Product, setProduct] = useState([]);
  const  [loading, setLoading] = useState(false);

  const dispatch=useDispatch();

  const addproduct =()=>{
    dispatch(addCart(Product));

  }

  useEffect(() => {
    return () => {

      const getProduct = async ()=>{
        setLoading(true);
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct(await response.json());
        setLoading(false);

      }



     getProduct();
    };
  }, [])







const Loading =()=>{
  return(
    <>
                <div className="col-md-6">
                <Skeleton height={400} />
               </div>
               {/* <div className="col-md-6"> */}
                {/* <Skeleton height={50} width={300}  /> */}
                {/* <Skeleton height={75}  />
                <Skeleton height={25} width={150}  />
                <Skeleton height={50}  />
                <Skeleton height={150}  />
                <Skeleton height={50} width={100}  />
                <Skeleton height={50} width={100} style={{marginleft:6}} />

 */}


               {/* </div>  */}
               
               

    
   
    </>
  )
  
}

const ShowProduct= () =>{
return(
  <>
  <div className="col-md-6">
    <img src={Product.image} alt={Product.title} height="400px" width="400px" />

  </div>
  <div className="col-md-6">
    <h4 className="text-uppercase text-black-50">
      {Product.category}
    </h4>
    <h1 className="display-5">{Product.title}</h1>
    <p className="lead fw bolder">
      Rating {Product.rating && Product.rating.rate}
    <i className="fa fa-star"> </i>
    </p>
    <h3 className='display-6 fw-bold my-4 '>
      ${Product.price}
    </h3>
    <p className="lead ">
     {Product.description}
    </p>
    <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addproduct(Product)}> add to cart</button>
    <NavLink to="/cart" className="btn btn-dark ms-2 px-4 py-2"> Go to cart</NavLink>

  </div>


  </>

)
}

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading? <Loading/> :<ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
