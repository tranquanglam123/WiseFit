import React from 'react';
import { Box } from '@mui/material';

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.statusRef = React.createRef();
    this.mapLinkRef = React.createRef();
    this.previousLocation = null;
    this.tripMeter = 0;
  }

  geoFindMe = () => {
    const status = this.statusRef.current;
    const mapLink = this.mapLinkRef.current;

    mapLink.href = '';
    mapLink.textContent = '';

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      mapLink.style.fontSize ='24px';
      mapLink.style.textAlign = 'center';
      mapLink.style.marginLeft='500px'
      mapLink.style.marginTop='500px'
      mapLink.style.color = '#ffffff';

      if (this.previousLocation) {
        const distance = this.calculateDistance(latitude, longitude);
        this.tripMeter += distance;
        console.log('Distance:', distance);
        console.log('Trip Meter:', this.tripMeter);
      }

      this.previousLocation = { latitude, longitude };
    };

    const error = () => {
      status.textContent = 'Unable to retrieve your location';
    };

    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  calculateDistance = (latitude, longitude) => {
    const previousLat = this.previousLocation.latitude;
    const previousLong = this.previousLocation.longitude;

    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = (latitude - previousLat) * (Math.PI / 180);
    const dLon = (longitude - previousLong) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(previousLat * (Math.PI / 180)) *
        Math.cos(latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
  };

  render() {
    return (
      <div>
        <p ref={this.statusRef} style={{
            fontSize: '24px',
            textAlign: 'center',
            color: '#ffffff',
          }}></p>
        <a ref={this.mapLinkRef} target="_blank" rel="noopener noreferrer"></a>
        <button onClick={this.geoFindMe}>Find Me</button>
        {this.tripMeter >= 0 && (
          <p style={{
              fontSize: '24px',
              textAlign: 'center',
              color: '#ffffff',
              marginTop: '20px',
            }}>Distance Traveled: {this.tripMeter.toFixed(2)} kilometers</p>
        )}
      </div>
    );
  }
}

export default GeoLocation;
