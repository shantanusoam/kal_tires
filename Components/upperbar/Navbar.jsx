import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flexBetween w-full  z-10  flex-row">
    <div className="flex flex-1 flex-row justify-start">
      <Link href="/">
        <div>Photo</div>
      </Link>
    </div>
  </nav>
);

export default Navbar;
