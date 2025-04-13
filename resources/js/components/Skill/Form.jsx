import React from "react";
import { useState } from "react";
import MultiSelect from "@/Components/Form/MultiSelect";

export default function Form() {
    const [selectedTechs, setSelectedTechs] = useState([]);

    const technologies = [
        "Laravel",
        "React",
        "Vue",
        "Django",
        "Spring Boot",
        "Node.js",
    ];

    return (
        <div>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Skills</h2>
            </div>
            <div className="max-w-md mx-auto mt-10 space-y-4">
                <MultiSelect
                    options={technologies}
                    selectedOptions={selectedTechs}
                    setSelectedOptions={setSelectedTechs}
                    label="Technologies maîtrisées"
                />

                <div className="text-sm text-gray-600">
                    Sélection(s) actuelle(s) : {selectedTechs.join(", ")}
                </div>
            </div>
        </div>
    );
}
