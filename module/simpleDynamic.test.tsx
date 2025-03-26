import { render, screen } from "@testing-library/react"
import React  from "react";
import { SimpleDynamic } from "./simpleDynamic"

test("SimpleDynamic", () => {
    render(<SimpleDynamic />);
    expect(
        screen.getByText(/This is a simple dynamic component/),
    ).toBeDefined();
});
