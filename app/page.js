"use client";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Search from "../components/Search";
import Suggested from "../components/Suggested";

export default function Home() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/books?q=${query}`);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="title">Book Space</h2>

        <Search value={query} onChange={setQuery} handleSearch={handleSearch} />

        <div>
          <h3 className="sugested">Suggested Books</h3>
          <hr></hr>
          <div>
            <Suggested query="Albert Kamy" />
          </div>
        </div>
      </div>
    </main>
  );
}
