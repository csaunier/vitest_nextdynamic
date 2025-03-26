import { render, screen } from "@testing-library/react"
import React  from "react";
import { Client } from "./client"

test("Client", () => {
    render(<Client />);
    expect(
        screen.getByText(/This is a client component with some dynamic component below/),
    ).toBeDefined();
    expect(
        screen.getByText(/This is a simple dynamic component/),
    ).toBeDefined();
    expect(
        screen.getByText(/This is a dynamic component/),
    ).toBeDefined();
});
