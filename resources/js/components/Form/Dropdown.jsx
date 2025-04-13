import React from "react";

export default function Dropdown({
    label,
    name,
    options = [],
    error,
    ...props
}) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block mb-1 font-medium">
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                className={`w-full px-4 py-2 border rounded ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...props}
            >
                <option value="">-- Sélectionner --</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
