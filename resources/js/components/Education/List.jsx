import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function List({ educations, onEdit, onDelete }) {
    return (
        <div>
            {educations.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">School name</th>
                            <th className="px-4 py-2">Graduation date</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {educations.map((educ, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 font-medium">
                                    {educ.title}
                                </td>
                                <td className="px-4 py-2">{educ.school}</td>
                                <td className="px-4 py-2 text-xs text-gray-500">
                                    {educ.start_date?.toLocaleDateString()}
                                </td>
                                <td className="px-4 py-2">{educ.mission}</td>
                                <td className="px-4 py-2 text-center space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => onEdit(index)}
                                        className="px-2 py-1 text-xs font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => onDelete(index)}
                                        className="px-2 py-1 text-xs font-medium text-red-600 border border-red-600 rounded hover:bg-red-50"
                                    >
                                        Delete
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
