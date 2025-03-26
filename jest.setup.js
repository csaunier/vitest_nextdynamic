import {jest, test, expect} from '@jest/globals'
import "@testing-library/jest-dom/jest-globals"

import React from "react";
global.React = React;

jest.mock("next/dynamic", () => ({
    __esModule: true,
    default: (...props) => {
        const dynamicModule = jest.requireActual("next/dynamic")
        // @ts-ignore
        const dynamicActualComp = dynamicModule.default
        const RequiredComponent = dynamicActualComp(...props)

        if (RequiredComponent.preload) {
            RequiredComponent.preload()
        } else {
            RequiredComponent.render.preload()
        }

        return RequiredComponent
    },
}))

jest.mock("next/navigation", () => ({
    __esModule: true,
    useParams: () => ({}),
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
}))