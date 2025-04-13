import React from "react";

export default function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg relative">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                    onClick={onClose}
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
