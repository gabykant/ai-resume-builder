import React, { useState } from "react";
import EducationForm from "@/components/Education/Form";
import EducationList from "@/components/Education/List";

export default function Section({ errors }) {
    const [educations, setEducations] = useState([]);
    const [educationForm, setEducationForm] = useState({
        titletitle: "",
        school: "",
        start_date: null,
    });
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    // Handle Add or Update request
    const handleAddOrUpdate = () => {
        const updated = [...educations];
        if (editingIndex !== null) {
            updated[editingIndex] = educationForm;
        } else {
            updated.push(educationForm);
        }
        setEducations(updated);
        setEducationForm({ title: "", school: "", start_date: null });
        setEditingIndex(null);
        setShowModal(false);
    };

    // Edit the form and submit
    const handleEdit = (index) => {
        setEducationForm(educations[index]);
        setEditingIndex(index);
        setShowModal(true);
    };

    // Handle the delete action
    const handleDelete = (index) => {
        if (confirm("Do you really want to delete the entry ?")) {
            const updated = educations.filter((_, i) => i !== index);
            setEducations(updated);
        }
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Education</h2>
            <button
                type="button"
                onClick={() => {
                    setEditingIndex(null);
                    setEducationForm({
                        title: "",
                        school: "",
                        start_date: null,
                    });
                    setShowModal(true);
                }}
                className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
            >
                +
            </button>

            <EducationList
                educations={educations}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <EducationForm
                show={showModal}
                onClose={() => setShowModal(false)}
                educationForm={educationForm}
                setEducationForm={setEducationForm}
                onSave={handleAddOrUpdate}
                errors={errors}
            />
        </div>
    );
}
