import React from "react";
import TextInput from "@/Components/Form/TextInput";
import DateInput from "@/components/Form/DateInput";
import Modal from "@/Components/Form/Modal";

export default function Form({
    show,
    onClose,
    certificationForm,
    setCertificationForm,
    onSave,
    errors,
}) {
    if (!show) return null;

    return (
        <div>
            <Modal onClose={onClose}>
                <h3 className="text-lg font-semibold mb-4">
                    {certificationForm && certificationForm.title
                        ? "Edit Certification"
                        : "New Entry"}
                </h3>
                <TextInput
                    label="Certification Title"
                    name="title"
                    value={certificationForm.title}
                    onChange={(e) =>
                        setCertificationForm({
                            ...certificationForm,
                            title: e.target.value,
                        })
                    }
                    error={errors.title}
                />
                <DateInput
                    label="Exam Year"
                    name="exam_year"
                    selected={certificationForm.exam_year}
                    onChange={(date) =>
                        setCertificationForm({
                            ...certificationForm,
                            exam_year: date,
                        })
                    }
                    error={errors.exam_year}
                />
                <TextInput
                    label="Delivered By"
                    name="delivered_by"
                    value={certificationForm.delivered_by}
                    onChange={(e) =>
                        setCertificationForm({
                            ...certificationForm,
                            delivered_by: e.target.value,
                        })
                    }
                    error={errors.delivered_by}
                />
                <div className="mt-4 flex justify-end">
                    <button
                        type="button"
                        onClick={onSave}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Record Entry
                    </button>
                </div>
            </Modal>
        </div>
    );
}
