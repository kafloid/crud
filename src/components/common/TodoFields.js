import React from "react";

class TodoFields extends React.Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.number}</th>
                <td>{this.props.task}</td>
                <td>{this.props.status}</td>
                <td>
                    <button type="submit" className="btn btn-danger">delete</button>
                    <button type="submit" className="btn btn-success ms-1">Finish</button>
                </td>
            </tr>
        )
    }
}

export default TodoFields;