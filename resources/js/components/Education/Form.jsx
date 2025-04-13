import React from "react";
import { useState } from "react";
import TextInput from "@/Components/Form/TextInput";
import DateInput from "@/components/Form/DateInput";
import Modal from "@/Components/Form/Modal";
import EducationList from "@/Components/Education/List";

export default function Form({ errors }) {
    const [showModal, setShowModal] = useState(false);
    const [educations, setEducations] = useState([]);
    const [educationForm, setEducationForm] = useState({
        title: "",
        school: "",
        start_date: null,
    });
    function handleAddEducation() {
        setEducations([...educations, educationForm]);
        setEducationForm({
            title: "",
            school: "",
            start_date: null,
        });
        setShowModal(false);
    }
    return (
        <div>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Education</h2>
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    +
                </button>
            </div>

            <EducationList
                educations={educations}
                setEducations={setEducations}
            />

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3 className="text-lg font-semibold mb-4">
                        Ajouter une Education
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
                            onClick={handleAddEducation}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Add Education
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}
