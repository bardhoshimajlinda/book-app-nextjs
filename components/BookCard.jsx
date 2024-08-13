"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";

function BookCard({ book, isAdded, toggleReadingList }) {
  const router = useRouter();

  return (
    <div className="book-container" key={book.id}>
      <div className="book-image">
        {book.volumeInfo.imageLinks?.thumbnail ? (
          <Image
            src={book.volumeInfo.imageLinks?.thumbnail}
            alt={book.volumeInfo.title}
            width={350}
            height={220}
          />
        ) : (
          <div>No thumbnail</div>
        )}
      </div>
      <h2>{book.volumeInfo.title}</h2>
      <p className="author">{book.volumeInfo.authors?.join(", ")}</p>
      <div className="book-actions">
        <button
          className="read-more"
          onClick={() => {
            router.push(`/books/${book.id}`);
          }}
          type="button"
        >
          Read More
        </button>
        {toggleReadingList && (
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart-icon ${isAdded ? "added" : ""}`}
            onClick={() => toggleReadingList(book.id)}
          />
        )}
      </div>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  isAdded: PropTypes.bool,
  toggleReadingList: PropTypes.func,
};

export default BookCard;
