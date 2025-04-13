import React from "react";

export default function TextArea({ label, name, error, ...props }) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 font-medium">
                    {label}
                </label>
            )}

            <textarea
                id={name}
                name={name}
                className={`w-full px-4 py-2 border rounded min-h-[100px] ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...props}
            ></textarea>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
