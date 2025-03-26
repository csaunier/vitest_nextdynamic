"use client"

import dynamic from "next/dynamic"

const SimpleDynamicComponent = dynamic(() =>
    import("./simpleDynamic").then(mod => mod.SimpleDynamic)
)

const DynamicComponent = dynamic(() =>
    import("./dynamic").then(mod => mod.Dynamic)
)

export const Client = () => {

    console.log(DynamicComponent)

    return (
        <div>
            This is a client component with some dynamic component below:
            <br/>
            <SimpleDynamicComponent />
            <br />
            <DynamicComponent />
        </div>
    )
}