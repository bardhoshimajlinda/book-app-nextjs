"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loader from "@/components/Loader";
import useReadingList from "@/hooks/useReadingList";
import useGetBookById from "@/hooks/useGetBookById";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const BookDetails = () => {
  let { bookId } = useParams();

  const { book, isLoading, isError } = useGetBookById(bookId);
  const { readingList, toggleReadingList } = useReadingList();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(readingList.includes(bookId));
  }, [readingList, bookId]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) return "Book Not Found";

  const description = book.volumeInfo.description
    ? book.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, "")
    : "No description available";

  let imageUrl = book.volumeInfo.imageLinks.smallThumbnail;

  const url = new URL(imageUrl);
  url.searchParams.delete("zoom");
  const updatedImageUrl = url.toString();

  const handleToggleReadingList = () => {
    if (readingList.includes(bookId)) {
      toggleReadingList(bookId);
      setIsAdded(false);
    } else {
      toggleReadingList(bookId);
      setIsAdded(true);
    }
  };

  return (
    <>
      <div className="book-details">
        <div className="book-cover">
          <Image
            src={updatedImageUrl}
            alt="book-image"
            width={300}
            height={200}
          />
        </div>
        <div className="book-info">
          <h1 className="book-title">{book.volumeInfo.title}</h1>
          <p className="book-author">
            <strong>Authors: </strong>
            {book.volumeInfo.authors.join(", ")}
          </p>
          <p>
            <strong>Publish Date: </strong>
            {book.volumeInfo.publishedDate}
          </p>
          <p className="book-pages">
            <strong>Pages: </strong>
            {book.volumeInfo.pageCount}
          </p>
          <p className="book-description">
            <strong>Description: </strong>
            {description}
          </p>
          <button
            className={`btn ${readingList.includes(bookId) ? "added" : ""}`}
            onClick={handleToggleReadingList}
          >
            <FontAwesomeIcon
              icon={faHeart}
              className={`icon ${readingList.includes(bookId) ? "added" : ""}`}
            />
            {readingList.includes(bookId)
              ? "Added to My Reading List"
              : "Add to My Reading List"}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
