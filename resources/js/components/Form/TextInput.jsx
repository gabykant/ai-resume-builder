import React from "react";

export default function TextInput({ label, name, className, error, ...props }) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 font-medium">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                {...props}
                className={`form-input w-full border rounded focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 border-gray-300 rounded ${
                    error
                        ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                        : ""
                } ${className}`}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
