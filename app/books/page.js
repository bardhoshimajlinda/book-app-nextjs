"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import BookCard from "@/components/BookCard";
import Search from "@/components/Search";
import useGetBooks from "@/hooks/useGetBooks";
import useReadingList from "@/hooks/useReadingList";
import Loader from "@/components/Loader";

const BooksQueryContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("q");
  const [searchValue, setSearchValue] = useState(search || "");
  const { readingList, toggleReadingList } = useReadingList();

  const {
    books = [],
    isLoading,
    refetch: fetchBooks,
  } = useGetBooks({
    query: searchValue,
  });

  useEffect(() => {
    if (search === null) {
      router.push("/");
    } else {
      setSearchValue(search);
    }
  }, [search, router]);

  if (search === null) {
    return null;
  }

  const handleSearch = () => {
    fetchBooks(searchValue);
    window.history.pushState({}, null, `/books?q=${searchValue}`);
  };

  return (
    <>
      <Search
        value={searchValue}
        onChange={setSearchValue}
        handleSearch={handleSearch}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="books">
          {books.length > 0
            ? books.map((book) => {
                const isAdded = readingList.includes(book.id);
                return (
                  <BookCard
                    key={book.id}
                    book={book}
                    isAdded={isAdded}
                    toggleReadingList={toggleReadingList}
                  />
                );
              })
            : "No books found"}
        </div>
      )}
    </>
  );
};

const BooksQuery = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BooksQueryContent />
    </Suspense>
  );
};

export default BooksQuery;
