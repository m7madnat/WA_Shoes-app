import './Products.css'
import { useState, useEffect } from 'react'
import { API } from "../../Api";
import Card from '../Card/Card'
import AddProduct from '../AddProduct/AddProduct'

const Products = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data } = await API.get('/shoes')
        setProducts(data);
      } catch (e) {
        console.log(e.message); // ! Handle Error message

      }
      setLoading(false)      
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      setLoading(true)
      await API.delete(`/shoes/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (e) {
      console.log(e.message); // ! Handle Error message
    }
    setLoading(false)
  };  

  const addProduct = async (name, image, description, price) => {
    try {
      setLoading(true)
      const { data } = await API.post('/shoes', {
        name,
        image,
        description,
        price,
      });
      setProducts([...products, data]);
    } catch (e) {
      console.log(e.message); // ! Handle Error message
    }
    setLoading(false)
  };

  if (loading) return <div className='loader2' ></div>;

    return (

        <div className='products'>     
            <div className='productsContainer'>              
                <div className='addPro'>
                   <AddProduct className="addProduct" addProduct={addProduct} /> 
                </div>   
                {products.map(product => (
                    <Card key={product.id} product={product}  deleteProduct={deleteProduct}  />
                ))}
            </div>
        </div>
    )
}

export default Products

