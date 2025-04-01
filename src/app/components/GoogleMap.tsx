"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  StandaloneSearchBox,
} from "@react-google-maps/api";

interface Business {
  updatedAt: string;
  createdAt: string;
  ttl: number;
  businessName?: string;
  address: string;
  id: string;
  lat: number;
  long: number;
}

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "400px",
  borderRadius: "20px",
  padding: "20px",
};

const libraries: "places"[] = ["places"];

const GoogleMaps = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );

  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onPlacesChanged = () => {
    if (searchBoxRef.current) {
      const places = searchBoxRef.current.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        if (place.geometry && place.geometry.location && mapRef.current) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          mapRef.current.panTo({ lat, lng });
          mapRef.current.setZoom(14);
        }
      }
    }
  };

  useEffect(() => {
    fetch(
      "https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/businessLocations"
    )
      .then((response) => response.json())
      .then((data) => {
        const businessArray = data.data
          ? data.data
          : Array.isArray(data)
          ? data
          : [data];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsedData: Business[] = businessArray.map((b: any) => ({
          ...b,
          lat: Number(b.lat),
          long: Number(b.long),
        }));
        setBusinesses(parsedData);
        console.log("Fetched Businesses:", parsedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const defaultCenter =
    businesses.length > 0 &&
    !isNaN(businesses[0].lat) &&
    !isNaN(businesses[0].long)
      ? { lat: businesses[0].lat, lng: businesses[0].long }
      : { lat: 6.45273, lng: 3.39566 };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCT4jtRej7af6EBhr_nOEN4Gw1F0dbJLp0"
      libraries={libraries}
    >
      <div className="flex justify-between items-center relative">
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={onPlacesChanged}
        >
          <div className="relative flex flex-row">
            <input
              type="text"
              placeholder="Search places..."
              className="w-[170px] focus:outline-none absolute bg-white border-white rounded-[5px] py-2 text-[14px]  border z-50 bottom-24 p-5 left-8"
            />
            <Image
              src="/filter.png"
              alt=""
              height={30}
              width={30}
              className="relative z-50 bottom-24 left-[220px]"
            />
          </div>
        </StandaloneSearchBox>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          onLoad={onMapLoad}
        >
          {businesses.map((business) => (
            <Marker
              key={business.id}
              position={{ lat: business.lat, lng: business.long }}
              onClick={() => setSelectedBusiness(business)}
            />
          ))}
          {selectedBusiness && (
            <InfoWindow
              key={`info-${selectedBusiness.id}`}
              position={{
                lat: selectedBusiness.lat,
                lng: selectedBusiness.long,
              }}
              onCloseClick={() => setSelectedBusiness(null)}
            >
              <div>
                <h3>{selectedBusiness.businessName || "Business"}</h3>
                <p>{selectedBusiness.address}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMaps;
