import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function List({ educations, setEducations }) {
    const [form, setForm] = useState({
        title: "",
        school: "",
        start_date: null,
    });
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    function resetForm() {
        setForm({
            title: "",
            school: "",
            start_date: null,
        });
        setEditingIndex(null);
    }
    function handleEdit(index) {
        setForm(educations[index]);
        setEditingIndex(index);
        setShowModal(true);
    }

    function handleDelete(index) {
        if (confirm("Voulez-vous vraiment supprimer cette ecole ?")) {
            const updated = educations.filter((_, i) => i !== index);
            setEducations(updated);
        }
    }

    return (
        <div>
            {educations.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2">Titre</th>
                            <th className="px-4 py-2">Ecole</th>
                            <th className="px-4 py-2">Période</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {educations.map((exp, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 font-medium">
                                    {exp.title}
                                </td>
                                <td className="px-4 py-2">{exp.school}</td>
                                <td className="px-4 py-2 text-xs text-gray-500">
                                    {exp.start_date?.toLocaleDateString()}
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
