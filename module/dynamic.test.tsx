import { render, screen } from "@testing-library/react"
import React  from "react";
import { Dynamic } from "./dynamic"

test("Dynamic", () => {
    render(<Dynamic />);
    expect(
        screen.getByText(/This is a dynamic component/),
    ).toBeDefined();
});
