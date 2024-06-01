import React from 'react'

const Heading = ({ className, title }) => (
    <h1
        className={`${className} bg-gradient-to-r from-pink-999 to-blue-999 bg-clip-text text-transparent  text-5xl font-bold capitalize border-b-2 pb-2 `}>
        {title}
    </h1>
)

export default Heading