import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  function handleDeleteListing(id){
    const updatedListings = listings.filter(listing => listing.id !== id)
    
    setListings(updatedListings)
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(r => r.json())
      .then(setListings)
  }, [])

  const displayedListings = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
      listings={displayedListings} 
      onListingDelete={handleDeleteListing}
      />
    </div>
  );
}

export default App;
