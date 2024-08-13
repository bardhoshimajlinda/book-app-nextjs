import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Book Space. All rights reserved.
        </p>
        <p>Contact: book.space@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
