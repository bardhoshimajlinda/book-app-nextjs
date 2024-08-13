import PropTypes from "prop-types";
import BookCard from "../components/BookCard";
import useGetBooks from "../hooks/useGetBooks";
import useReadingList from "../hooks/useReadingList";

const Suggested = ({ query }) => {
  const { books, isLoading } = useGetBooks({ query });
  const { readingList, toggleReadingList } = useReadingList();

  if (isLoading) return "loading suggestions";

  if (!books || books.length === 0) return "No suggestions available";

  return (
    <div className="books">
      {books.slice(0, 3).map((book) => {
        const isAdded = readingList.includes(book.id);
        return (
          <BookCard
            key={book.id}
            book={book}
            isAdded={isAdded}
            toggleReadingList={toggleReadingList}
          />
        );
      })}
    </div>
  );
};

Suggested.propTypes = {
  query: PropTypes.string,
};

export default Suggested;
