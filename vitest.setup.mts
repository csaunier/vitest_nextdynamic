import { vi, expect, test } from "vitest"

import { render, screen } from "@testing-library/react"

const dynamicModule = await vi.importActual<any>("next/dynamic")
const dynamicActualComp = dynamicModule.default

vi.mock('next/dynamic', () => ({
    __esModule: true,
    default: (...props: any) => {
        const RequiredComponent = dynamicActualComp(...props)

        if (RequiredComponent.preload) {
            RequiredComponent.preload()
        } else {
            RequiredComponent.render.preload()
        }

        return RequiredComponent
    }
}));

vi.mock('next/navigation', () => ({
    __esModule: true,
    useParams: () => ({}),
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
}))