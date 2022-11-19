import React , {useState} from "react";
import {useParams } from "react-router-dom";
import { API } from "../../Api";
import ProductEdit from "../ProductEdit/ProductEdit";
import "./ProductPage.css";


const ProductPage = (props) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const { data } = await API.get(`/shoes/${id}`);
            setProduct(data);
            setLoading(false);
        } catch (e) {
            setError(e.message);
            setLoading(false);
        }
        };
        fetchData();
    }, [id]);
    
    const displayCats = () => {
        return (
            <ProductEdit
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            getUpdated={getUpdated}
            />
        );
    };
    const getUpdated = async (name, image, description, price, id) => {                
        const { data } = await API.put(`/shoes/${id}`, {
            name,
            image,
            description,
            price,
        });
        setProduct(data);        
    }

    if (loading) return <div className='loader2' ></div>;
    if (error) return <h1>{error}</h1>;
    
    return (
        <>
        <div>            
            <div>{displayCats()}</div>
        </div>
        </>
    );
    

}
export default ProductPage;