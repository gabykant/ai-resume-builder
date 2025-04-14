import React from "react";
import TextInput from "@/Components/Form/TextInput";
import DateInput from "@/components/Form/DateInput";
import Modal from "@/Components/Form/Modal";

export default function Form({
    show,
    onClose,
    educationForm,
    setEducationForm,
    onSave,
    errors,
}) {
    if (!show) return null;

    return (
        <div>
            <Modal onClose={onClose}>
                <h3 className="text-lg font-semibold mb-4">
                    {educationForm && educationForm.title
                        ? "Edit Education"
                        : "New Entry"}
                </h3>
                <TextInput
                    label="Graduate Title"
                    name="title"
                    value={educationForm.title}
                    onChange={(e) =>
                        setEducationForm({
                            ...educationForm,
                            title: e.target.value,
                        })
                    }
                    error={errors.title}
                />
                <TextInput
                    label="School Name"
                    name="school"
                    value={educationForm.school}
                    onChange={(e) =>
                        setEducationForm({
                            ...educationForm,
                            school: e.target.value,
                        })
                    }
                    error={errors.school}
                />
                <DateInput
                    label="Graduate Year"
                    name="start_date"
                    selected={educationForm.start_date}
                    onChange={(date) =>
                        setEducationForm({
                            ...educationForm,
                            start_date: date,
                        })
                    }
                    error={errors.start_date}
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
