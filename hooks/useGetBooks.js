"use client";

import { useEffect, useState } from "react";
import { bookApiUrl, maxResult } from "../constants/index";
import { googleKey } from "../appConfig";

const useGetBooks = ({ query, startIndex = 1 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = async (q, idx) => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `${bookApiUrl}?q=${q}&startIndex=${idx}&maxResults=${maxResult}&key=${googleKey}`
      );
      console.log(res);
      const data = await res.json();
      setBooks(data.items);
      console.log(data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = (value) => getBooks(value, startIndex);

  useEffect(() => {
    getBooks(query, startIndex);
  }, []);
  return { isLoading, books, refetch };
};

export default useGetBooks;
