import React, { useState } from "react";
import CertificationForm from "@/components/Certification/Form";
import CertificationList from "@/components/Certification/List";

export default function Section({ errors }) {
    const [certifications, setCertifications] = useState([]);
    const [certificationForm, setCertificationForm] = useState({
        title: "",
        school: "",
        start_date: null,
    });
    const [showModal, setShowModal] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    // Handle Add or Update request
    const handleAddOrUpdate = () => {
        const updated = [...certifications];
        if (editingIndex !== null) {
            updated[editingIndex] = certificationForm;
        } else {
            updated.push(certificationForm);
        }
        setCertifications(updated);
        setCertificationForm({ title: "", school: "", start_date: null });
        setEditingIndex(null);
        setShowModal(false);
    };

    // Edit the form and submit
    const handleEdit = (index) => {
        setCertificationForm(certifications[index]);
        setEditingIndex(index);
        setShowModal(true);
    };

    // Handle the delete action
    const handleDelete = (index) => {
        if (confirm("Do you really want to delete the entry ?")) {
            const updated = certifications.filter((_, i) => i !== index);
            setCertifications(updated);
        }
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-2">Certifications</h2>
            <button
                type="button"
                onClick={() => {
                    setEditingIndex(null);
                    setCertificationForm({
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

            <CertificationList
                certifications={certifications}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <CertificationForm
                show={showModal}
                onClose={() => setShowModal(false)}
                certificationForm={certificationForm}
                setCertificationForm={setCertificationForm}
                onSave={handleAddOrUpdate}
                errors={errors}
            />
        </div>
    );
}
