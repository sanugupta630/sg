import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand">Student Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}