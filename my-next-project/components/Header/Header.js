'use client';
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const {data } = useSession();
   
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-white no-underline"
          >
            NextJsPractice
          </Link>
          <Nav className="flex gap-6 ">
            <Link
              href="/"
              className="text-white font-bold font-serif p-2 m-1 no-underline"
            >
              Home
            </Link>
            {data?.user ? (
              <>
                <Link
                  href="/"
                  className="text-white font-bold font-serif p-2 m-1 no-underline"
                >
                  {data?.user?.name}
                </Link>
                <span className="text-white font-bold font-serif p-2 m-1 no-underline cursor-pointer" onClick={()=>signOut()}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="text-white font-bold font-serif p-2 m-1 no-underline"
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  className="text-white font-bold font-serif p-2 m-1 no-underline"
                >
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
