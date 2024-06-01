import React from 'react'

const Button = ({ title, className }) => (
    <button className={`button py-3 px-6 bg-pink-999 capitalize tex-xl ${className} border border-blue-999/50`}>{title}</button>
)

export default Button