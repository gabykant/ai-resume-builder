import React from "react";
import DatePicker from "react-datepicker";

export default function DateInput({
    label,
    name,
    selected,
    onChange,
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

            <DatePicker
                id={name}
                name={name}
                selected={selected}
                onChange={onChange}
                className={`w-full px-4 py-2 border rounded ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                dateFormat="yyyy-MM-dd"
                {...props}
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
