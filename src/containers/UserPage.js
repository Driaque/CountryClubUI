import React, { Component } from 'react'
import Header from '../Header'
import Menu from '../Menu'
import Content from '../Content'
import Footer from '../Footer'

export default class UserPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Content />
                <Footer />
            </div>
        )
    }
}
