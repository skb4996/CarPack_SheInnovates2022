import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import parkingData from "./data/Parking_Meters_Pittsburgh_Parking_Authority.json"

const filteredStations = parkingData.filter(meter => meter.node === "Oakland")

function App() {








  
  return (
    <MapContainer center={[40.439840, -79.954830]} zoom={10} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {filteredStations.map(meter => (
      <Marker 
      
      key = {meter.FID}
      position={[meter.latitude, meter.longitude]}>
    
      </Marker>
  ))}

</MapContainer>
  );
}

export default App;
 