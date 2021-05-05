import React, {useState} from "react";

function ListingCard({ id, description, image, location, onListingDelete }) {
  const[isFavorite, setIsFavorite] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })

    onListingDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={() => setIsFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setIsFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
