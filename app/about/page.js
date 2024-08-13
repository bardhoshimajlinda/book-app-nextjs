import book from "@/assets/book.jpg";
import Image from "next/image";

const about = () => {
  return (
    <>
      <div className="about-container">
        <div className="image-container">
          <Image className="image" src={book} alt="book" />
        </div>
        <div className="text-container">
          <h2>About Us</h2>
          <div className="paragraphs">
            <p>
              Welcome to our website! <br></br>
              <br></br> We are passionate about sharing great reads with book
              lovers like you. A place where you can find a list of great books
              you wish you had read earlier.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
