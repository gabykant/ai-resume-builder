import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function ExperienceTable({ experiences, setExperiences }) {
    const [form, setForm] = useState({
        company_name: "",
        position: "",
        start_date: null,
        end_date: null,
        mission: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    function resetForm() {
        setForm({
            company_name: "",
            position: "",
            start_date: null,
            end_date: null,
            mission: "",
        });
        setEditingIndex(null);
    }
    function handleEdit(index) {
        setForm(experiences[index]);
        setEditingIndex(index);
        setShowModal(true);
    }

    function handleDelete(index) {
        if (confirm("Voulez-vous vraiment supprimer cette expérience ?")) {
            const updated = experiences.filter((_, i) => i !== index);
            setExperiences(updated);
        }
    }

    return (
        <div>
            {experiences.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2">Poste</th>
                            <th className="px-4 py-2">Entreprise</th>
                            <th className="px-4 py-2">Période</th>
                            <th className="px-4 py-2">Mission</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {experiences.map((exp, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 font-medium">
                                    {exp.position}
                                </td>
                                <td className="px-4 py-2">
                                    {exp.company_name}
                                </td>
                                <td className="px-4 py-2 text-xs text-gray-500">
                                    {exp.start_date?.toLocaleDateString()} –{" "}
                                    {exp.end_date?.toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2">{exp.mission}</td>
                                <td className="px-4 py-2 text-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(index)}
                                        className="px-2 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                                    >
                                        Modifier
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(index)}
                                        className="px-2 py-1 text-xs font-medium text-red-600 border border-red-600 rounded hover:bg-red-50"
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
