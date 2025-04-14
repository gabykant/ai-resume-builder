import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export default function List({ certifications, onEdit, onDelete }) {
    return (
        <div>
            {certifications.length > 0 && (
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2">Title</th>
                            <th className="px-4 py-2">Graduation date</th>
                            <th className="px-4 py-2">Delivered By</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                        {certifications.map((certif, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 font-medium">
                                    {certif.title}
                                </td>
                                <td className="px-4 py-2">
                                    {certif.exam_year?.toLocaleDateString}
                                </td>
                                <td className="px-4 py-2">
                                    {certif.delivered_by}
                                </td>
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
