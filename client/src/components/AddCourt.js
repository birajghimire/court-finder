import React, { useState } from 'react';
import axios from 'axios';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

async function geocodeAddress(address, apiKey) {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(address)}&key=${apiKey}`);
    const data = response.data;
    if (data.results && data.results.length > 0) {
        return {
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
        };
    } else {
        throw new Error("Failed to geocode address");
    }
}

const containerStyle = {
    flex: 1,  
    height: '100vh'
};

function AddCourt() {
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState(40.730610);  // Default NY latitude
    const [lng, setLng] = useState(-73.935242);  // Default NY longitude
    const [isAddressVerified, setIsAddressVerified] = useState(false);
    const [name, setName] = useState("");

    const handleVerifyAddress = async () => {
        try {
            const coords = await geocodeAddress(address, process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
            setLat(coords.lat);
            setLng(coords.lng);
            setIsAddressVerified(true);
        } catch (error) {
            console.error("Geocoding error", error);
            alert("Unable to verify address. Please check your input.");
            setIsAddressVerified(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAddressVerified) {
            alert("Please verify the address before submitting.");
            return;
        }
        try {
            const response = await axios.post('http://localhost:4000/court', {
                name: name,
                address: address,
                latitude: lat,
                longitude: lng,
            });
            console.log(response.data);
            alert("Court added successfully!");
        } catch (error) {
            console.error("Error submitting the court", error);
            alert("Failed to add court. Please try again.");
        }
    };

    return (
        <div style={{ display: "flex", height: '100vh', width: '100vw' }}>
            <div style={{ width: "300px", padding: "20px", backgroundImage: "linear-gradient(79deg, #3a373e, #5f2c59 0%, #3a373e)", overflowY: "auto" }}>
              <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Court Name</label>
                  <br/>
                  <input 
                      type="text" 
                      id="name"
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      required
                  />
                  <br />
                  <label htmlFor="address">Address</label>
                  <br/>
                  <input 
                      type="text" 
                      id="address"
                      value={address} 
                      onChange={(e) => setAddress(e.target.value)}
                      required
                  />
                  <p/>
                  <button type="button" onClick={handleVerifyAddress}>Verify Address</button>
                  <p/>
                  <button type="submit">Add Court</button>
              </form>
          </div>
          
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={{ lat, lng }} 
                  zoom={10}
              >
                  {isAddressVerified && <Marker position={{ lat, lng }} />}
              </GoogleMap>
          </LoadScript>
      </div>
  );
}

export default AddCourt;


