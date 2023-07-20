"use client";
import Modal from "@/components/Modal";
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
      <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal>
    </>
  );
};

export default ModalProvider;
