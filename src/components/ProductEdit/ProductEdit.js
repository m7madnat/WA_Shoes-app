import React, { useState } from "react";
import { Link } from "react-router-dom";
const ProductEdit = ({name, image, description, price, id,getUpdated}) => {
  
  const [editing, setEditing] = useState(false);
  const [nameS, setnameS] = useState(name);
  const [imageS, setimageS] = useState(image);
  const [descriptionS, setdescriptionS] = useState(description);
  const [priceS, setPriceS] = useState(price);

  const handleSave = () => {    
    getUpdated(nameS, imageS, descriptionS, priceS, id);
    setEditing(false);
  };


  return (
    <div className='container'>        
      {editing ? (<img className="imgEnter" src={image} alt={name} />) : null}
      <div className="name">        
      {editing ? (<input value={nameS} onChange={({ target }) => setnameS(target.value)}/>) :
         (<div>{name}</div>)}
      </div>
      <div>
      {editing ? (<input value={imageS} onChange={({ target }) => setimageS(target.value)}/>) :
         ( <img className="imgEnter" src={image} alt={name} /> )
        }
      </div>     
      <div className="description">
        <span>Description: </span>
        {editing ? (<input value={descriptionS} onChange={({ target }) => setdescriptionS(target.value)}/>) :
         (<div>{description}</div>)}
      </div>
      <div>
        <span>Price: </span>
        {editing ? (<input type="number" value={priceS} onChange={({ target }) => setPriceS(target.value)}/>) :
         (<div>{price.split(".")[0] + " $"}</div>)}
      </div>
      <div>
        <button className="ButtonD" onClick={() => setEditing(!editing)}>
            {editing ? "Cancel" : "Edit"}
        </button>
        <Link to={`/products/${id}`}>
            {editing && <button className="ButtonD" onClick={handleSave}>Save</button>}            
        </Link>
      </div>      
    </div>
  );
};

export default ProductEdit;
