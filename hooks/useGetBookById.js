"use client";

import { useEffect, useState } from "react";
import { bookApiUrl } from "../constants/index";
import { googleKey } from "../appConfig";

const useGetBookById = (id) => {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getBook = async (bookId) => {
    setIsLoading(true);
    console.log("sad", `${bookApiUrl}${bookId}&key=${googleKey}`);
    try {
      const res = await fetch(`${bookApiUrl}${bookId}`);
      const data = await res.json();
      if (data.error) {
        setIsError(true);
      } else {
        setBook(data);
        localStorage.setItem("reading-list", JSON.stringify([data.id]));
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBook(id);
  }, [id]);

  return { book, isLoading, isError };
};

export default useGetBookById;
