import React from "react";
import { Link } from "@inertiajs/react";
export default function Welcome() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-blue-600">
                Welcome to CV Generation
            </h2>
            <h3>
                Do you want to build a successful CV ?
                <Link href="/resume">Click here!</Link>
            </h3>
        </div>
    );
}
