import React, { Component } from 'react'

export default class MainHeader extends Component {
    render() {
        return (
            <td colspan="5" className="thead">
                <h2> {this.props.tableTitle}</h2>
            </td>
        )
    }
}
