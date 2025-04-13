import { useState } from "react";
import React from "react";

export default function MultiSelect({
    options,
    selectedOptions,
    setSelectedOptions,
    label,
}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOption = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(
                selectedOptions.filter((item) => item !== option)
            );
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <div className="w-full">
            {label && (
                <label className="block mb-1 font-medium text-sm text-gray-700">
                    {label}
                </label>
            )}
            <div className="relative">
                <button
                    type="button"
                    className="w-full border px-4 py-2 text-left bg-white rounded shadow-sm focus:outline-none focus:ring"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {selectedOptions.length > 0
                        ? selectedOptions.join(", ")
                        : "Sélectionner..."}
                </button>

                {isOpen && (
                    <div className="absolute z-10 w-full bg-white border mt-1 rounded shadow max-h-60 overflow-auto">
                        {options.map((option) => (
                            <label
                                key={option}
                                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => toggleOption(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
