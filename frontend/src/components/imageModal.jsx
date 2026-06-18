import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const overlayClass =
  "fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-[1000] bg-[rgba(7,5,16,0.9)] backdrop-blur-sm";

const contentClass =
  "relative flex items-center justify-center max-w-[94vw] max-h-[90vh] sm:max-w-[92vw] sm:max-h-[92vh] rounded-2xl border border-purple-500/30 bg-[#0a0817] overflow-hidden outline-none";

const ImageModal = ({imageSrc, setImageSrc}) => {

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target && target.tagName === "IMG") {
        if (target.closest("[data-no-image-modal]")) return;
        setImageSrc(target.currentSrc || target.src);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const close = () => setImageSrc(null);

  return (
    <Modal
      isOpen={!!imageSrc}
      onRequestClose={close}
      closeTimeoutMS={200}
      shouldCloseOnOverlayClick={true}
      className={contentClass}
      overlayClassName={overlayClass}
      contentLabel="Image preview"
    >
      <button
        onClick={close}
        aria-label="Close"
        className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-purple-300 hover:text-white transition-colors z-10 bg-purple-500/25 border border-purple-500/40"
      >
        ✕
      </button>

      {imageSrc && (
        <img
          src={imageSrc}
          alt="Preview"
          className="block w-auto h-auto max-w-[94vw] max-h-[90vh] sm:max-w-[92vw] sm:max-h-[92vh] object-contain"
        />
      )}
    </Modal>
  );
};

export default ImageModal;