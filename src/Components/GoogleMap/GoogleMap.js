import GoogleMapReact from 'google-map-react';
import React from 'react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 23.7808875,
          lng: 90.2792385
        },
        zoom: 11
      };
    return (
        <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD8zm5uiwVSn8EVFZzyW68PvNcqZzsuprY" }}
          defaultCenter={defaultProps?.center}
          defaultZoom={defaultProps?.zoom}
        >
          <AnyReactComponent
            lat={23.7808875}
            lng={90.2792385}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;