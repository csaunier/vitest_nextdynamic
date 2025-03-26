"use client"

import { useLocale } from "../hooks/useLocal"

export const Dynamic = () => {
    const locale = useLocale()
    return (
        <div>
            This is a dynamic component : {locale}
        </div>
    )
}