import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <a href="" className="site-title">Site Name</a>
            <ul>
                <li className='active'>
                    <a href="/pricing">Price</a>
                </li>

            </ul>
        </nav>
    )
}

function customLink({ href, children, ...props }) {

    return (
        <li>
            <a href={href}>{children}</a>
        </li>
    )
}

export default Navbar