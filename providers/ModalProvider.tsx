"use client";
import AuthModal from "@/components/AuthModal";
import React, { useEffect, useState } from "react";

// we are essentially checking that non of our modals
//  are rendered during server side rendering.
const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
    </>
  );
};

export default ModalProvider;
