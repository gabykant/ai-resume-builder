import React from "react";
import { useState } from "react";
import TextInput from "@/Components/Form/TextInput";
import TextArea from "@/components/Form/TextArea";
import DateInput from "@/components/Form/DateInput";
import Modal from "@/Components/Form/Modal";
import ExperienceTable from "./ExperienceTable";

export default function ExperienceSection({
    experiences,
    setExperiences,
    errors,
}) {
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    // const [experiences, setExperiences] = useState([]);
    const [experienceForm, setExperienceForm] = useState({
        company_name: "",
        position: "",
        mission: "",
        start_date: null,
        end_date: null,
    });

    const handleAddExperience = () => {
        setExperiences([...experiences, experienceForm]);
        setExperienceForm({
            company_name: "",
            position: "",
            mission: "",
            start_date: null,
            end_date: null,
        });
        setShowModal(false);
    };

    return (
        <div>
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">
                    Expériences professionnelles
                </h2>
                <button
                    type="button"
                    onClick={() => setShowModal(true)}
                    className="px-3 py-1 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                    +
                </button>
            </div>

            <ExperienceTable
                experiences={experiences}
                setExperiences={setExperiences}
            />

            {/* {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="p-4 border rounded bg-gray-50 text-sm space-y-1"
                >
                    <div className="font-semibold">
                        {exp.position} @ {exp.company_name}
                    </div>
                    <div className="text-gray-500 text-xs">
                        {exp.start_date?.toLocaleDateString()} -{" "}
                        {exp.end_date?.toLocaleDateString()}
                    </div>
                    <div>{exp.mission}</div>
                </div>
            ))} */}

            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <h3 className="text-lg font-semibold mb-4">
                        Ajouter une expérience
                    </h3>
                    <TextInput
                        label="Company/Organisation"
                        name="company_name"
                        value={experienceForm.company_name}
                        onChange={(e) =>
                            setExperienceForm({
                                ...experienceForm,
                                company_name: e.target.value,
                            })
                        }
                        error={errors.company_name}
                    />
                    <TextInput
                        label="Job position"
                        name="position"
                        value={experienceForm.position}
                        onChange={(e) =>
                            setExperienceForm({
                                ...experienceForm,
                                position: e.target.value,
                            })
                        }
                        error={errors.position}
                    />
                    <DateInput
                        label="Start year"
                        name="start_date"
                        selected={experienceForm.start_date}
                        onChange={(date) =>
                            setExperienceForm({
                                ...experienceForm,
                                start_date: date,
                            })
                        }
                        error={errors.start_date}
                    />
                    <DateInput
                        label="End year"
                        name="end_date"
                        selected={experienceForm.end_date}
                        onChange={(date) =>
                            setExperienceForm({
                                ...experienceForm,
                                end_date: date,
                            })
                        }
                        error={errors.end_date}
                    />
                    <TextArea
                        label="Your Mission"
                        name="mission"
                        value={experienceForm.mission}
                        onChange={(e) =>
                            setExperienceForm({
                                ...experienceForm,
                                mission: e.target.value,
                            })
                        }
                        error={errors.mission}
                    />
                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={handleAddExperience}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            Ajouter
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
}
