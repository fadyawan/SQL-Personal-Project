import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link href="/">Home</Link>
        </li>
        <li className="navItem">
          <Link href="/addEmployee">Add Employee</Link>
        </li>
        <li className="navItem">
          <Link href="/removeEmployee">Remove Employee</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
