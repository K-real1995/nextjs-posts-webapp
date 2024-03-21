import React from "react";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Page about us",
    description: "Page about us",
};
export default function About(): React.JSX.Element {
    return (
        <div>
            <h1>About</h1>
            <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </div>
    );
}
