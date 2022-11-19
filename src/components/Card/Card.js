import { Link } from 'react-router-dom';
import './Card.css'


const Card = ({ product ,deleteProduct}) => {
    return (
        <div className='card'>
            <div className='card-header'>                
            <img src={product.image} alt={product.name} />
            </div>
            <div className='card-body'>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>  
            <div className='button-card'>          
                <Link to={`/products/${product.id}`}>
                    <button>Edit</button>
                </Link>
            <button onClick={() => deleteProduct(product.id)}>Remove</button>
            </div>
            </div>
        </div>
    );
}

export default Card;