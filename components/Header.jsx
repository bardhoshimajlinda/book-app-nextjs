import Link from "next/link";

function Header() {
  return (
    <>
      <nav>
        <ul className="navigation">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/reading-list">MY READING LIST</Link>
          </li>
          <li>
            <Link href="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
