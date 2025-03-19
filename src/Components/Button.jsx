import React from 'react'

const Button = () => {
    return (
        <button className="inline-flex items-center border-1 border-gray-200 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0">
            Button
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
            >
                <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
        </button>)
}

export default Button