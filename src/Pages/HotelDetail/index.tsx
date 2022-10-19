import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';

function HotelDetail() {
    const { hotelId } = useParams()
    const getHotel = () => {
        return axios.get(`http://localhost:4000/hotels/${hotelId}`);
      };
    
      const { data: Hotel, isLoading, isError } = useQuery("hotels-list", getHotel);
    console.log({Hotel});
    
  return (
    <div>HotelDetail</div>
  )
}

export default HotelDetail