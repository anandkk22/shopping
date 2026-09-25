import "./CartCard.css";

export const CartCard = ({ product }) => {
    const {name, price, image} = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
       <p className="productPrice">${price}</p>
        <button>Remove</button>
    </div>
  )
}
