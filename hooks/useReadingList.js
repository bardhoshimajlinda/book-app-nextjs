'use client'

import { useEffect, useState } from 'react';

const useReadingList = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem('readingList');
    if (savedList) {
      setReadingList(JSON.parse(savedList));
    }
  }, []);

  const toggleReadingList = (bookId) => {
    setReadingList((prevReadingList) => {
      let updatedReadingList;
      if (prevReadingList.includes(bookId)) {
        updatedReadingList = prevReadingList.filter((id) => id !== bookId);
      } else {
        updatedReadingList = [...prevReadingList, bookId];
      }
      localStorage.setItem('readingList', JSON.stringify(updatedReadingList));
      return updatedReadingList;
    });
  };

  return { readingList, toggleReadingList };
};

export default useReadingList;
