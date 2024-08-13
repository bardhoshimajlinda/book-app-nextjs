import Button from "./Button";

const Search = ({ value, onChange, handleSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search book"
      />
      <Button onClick={handleSearch} />
    </div>
  );
};

export default Search;
