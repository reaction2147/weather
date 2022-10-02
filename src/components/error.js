import React from "react";

const Error = () => {
    return(
        <>
        <div className="bg-black/[.5] rounded shadow backdrop-blur-sm border-black/[.9] w-100">
            <div className="flex flex-col justify-center p-4 text-red-700">
            <h1 data-testid="title" className="text-2xl">ERROR</h1>
            <p data-testid="sub_title" className="text-xl">Please enter a valid location</p>
            </div>
        </div>
        </>
    )
}

export default Error