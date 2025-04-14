import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/Form/TextInput";
import TextArea from "@/components/Form/TextArea";
import Dropdown from "@/Components/Form/Dropdown";
import ExperienceSection from "@/components/ExperienceSection";
import Education from "../components/Education/Section";
import Skill from "@/components/Skill/Form";
import Certification from "@/components/Certification/Section";

export default function Resume() {
    const [experiences, setExperiences] = useState([]);
    const [educations, setEducations] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const { data, setData, post, processing, errors } = useForm({
        fullname: "",
        email: "",
        phone: "",
        linkedin: "",
        city: "",
        country: "",
        professionnal_objective: "",
        experiences: [],
        educations: [],
        certifications: [],
    });

    // Let format the date and be sure to send the Y-m-d to the backEnd
    const formatDate = (date) => {
        return new Date(date).toISOString().split("T")[0];
    };

    useEffect(() => {
        setData("experiences", experiences);
        setData("educations", educations);
        setData("certifications", certifications);
    }, [experiences, educations, certifications]);

    function handleSubmit(e) {
        e.preventDefault();

        // Build the payload
        const payload = {
            ...data,
            experiences: experiences.map((exp) => ({
                ...exp,
                start_date: formatDate(exp.start_date),
                end_date: formatDate(exp.end_date),
            })),
            educations: educations.map((edu) => ({
                ...edu,
                start_date: formatDate(edu.start_date),
            })),
            certifications: certifications.map((certif) => ({
                ...certif,
                exam_year: formatDate(certif.exam_year),
            })),
        };

        // Then, pass it as the second parameter
        post("new/resume", payload);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">
                        Informations personnelles
                    </h2>
                    <TextInput
                        label="Full Name"
                        name="fullname"
                        value={data.fullname}
                        onChange={(e) => setData("fullname", e.target.value)}
                        error={errors.fullname}
                    />
                    <TextInput
                        label="email"
                        name="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                    />
                    <TextInput
                        label="Phone Number"
                        name="phone"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        error={errors.phone}
                    />
                    <TextInput
                        label="Link to your LinkedIn profile"
                        name="linkedin"
                        value={data.linkedin}
                        onChange={(e) => setData("linkedin", e.target.value)}
                        error={errors.linkedin}
                    />
                    <Dropdown
                        label="Country of residence"
                        name="country"
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
                        options={[
                            { value: 1, label: "Cameroon" },
                            { value: 2, label: "USA" },
                        ]}
                        error={errors.status}
                    />
                    <TextInput
                        label="Your current city"
                        name="city"
                        value={data.city}
                        onChange={(e) => setData("city", e.target.value)}
                        error={errors.city}
                    />
                    <TextArea
                        label="Your professionnal Objective"
                        name="professionnal_objective"
                        value={data.professionnal_objective}
                        onChange={(e) =>
                            setData("professionnal_objective", e.target.value)
                        }
                        error={errors.professionnal_objective}
                    />
                    {/* <input type="file" name="photo" onChange={handleChange} /> */}
                </div>

                <div className="p-6">
                    <ExperienceSection
                        experiences={experiences}
                        setExperiences={setExperiences}
                        errors={errors}
                    />
                </div>

                <div className="p-6">
                    <Education errors={errors} />
                </div>

                <div className="p-6">
                    <Certification errors={errors} />
                </div>

                <div className="p-6">
                    <Skill errors={errors} />
                </div>

                <div className="flex justify-between pt-4">
                    <button type="submit" className="btn">
                        Soumettre
                    </button>
                </div>
            </form>
        </div>
    );
}
