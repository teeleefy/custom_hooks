import React, { useState, useEffect } from 'react';
import axios from "axios";
import {v1 as uuid} from "uuid";


const useAxios = (url) => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const addCard = async (restOfUrl) => {
        let fullUrl = typeof restOfUrl=='undefined' ? url : `${url}${restOfUrl}`
        try { const res = await axios.get(fullUrl);
            
          setCards(cards => [...cards, { ...res.data, id: uuid() }]);
        } catch (error) {
          setError(error);
        }
        setIsLoading(false);
      };
  
      const clearCards = () => setCards([]);

    return [{ cards, error, isLoading }, addCard, clearCards ];
  };

export default useAxios