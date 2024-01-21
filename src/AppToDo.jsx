import React, { Component } from 'react'

export default class AppToDo extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            array: [],
            isEdit: false,
            dataAvailable: false
        }
    }
    textChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    textAdd = () => {
        const todo = [...this.state.array];
        const todoLower = this.state.text.toLocaleLowerCase();
        const todoUpper = todoLower.charAt(0).toLocaleUpperCase();
        const rem = todoLower.slice(0);
        const data = todoUpper + rem;
        if (this.state.text === '') {
            alert('Please enter text');
        } else if (todo.find((ele) => ele === data)) {
            alert(`${this.state.text} is already exist`)
        } else {
            todo.push(data);
            this.setState({
                text: '',
                array: todo,
                isEdit: false,
                dataAvailable: true
            })
        }
    }

    textClick = (select) => {
        this.setState({
            text: select,
            isEdit: true,
            select: select,
            dataAvailable: false
        })
    }

    textEdit = () => {
        const todo = [...this.state.array];
        const indexToChange = todo.indexOf(this.state.select)
        const todoLower = this.state.text.toLocaleLowerCase();
        const todoUpper = todoLower.charAt(0).toLocaleUpperCase();
        const rem = todoLower.slice(0);
        const data = todoUpper + rem;
        if (this.state.text === '') {
            alert('Please enter text');
        } else if (todo.find((ele) => ele === data)) {
            alert(`${this.state.text} is already exist`)
        } else {
            todo.splice(indexToChange, 1, data)
            this.setState({
                text: '',
                array: todo,
                isEdit: false,
                dataAvailable: false
            })
        }
    }

    textDelete = () => {
        const todo = [...this.state.array];
        const indexToDelete = todo.indexOf(this.state.select)

        if (this.state.text === '') {
            alert('Please enter text');
        } else {
            todo.splice(indexToDelete, 1);
            this.setState({
                text: '',
                array: todo,
                isEdit: false,
                dataAvailable: true
            })
        }
    }

    textClear=()=>{
        this.setState({
            text: '',
            array: [],
            isEdit: false,
            dataAvailable: false
        })
    }




    render() {
        return (
            <div>
                <h1>To-Do List </h1>

                <input
                    type='text'
                    placeholder='Enter Your Activity Name'
                    value={this.state.text}
                    onChange={this.textChange}

                />

                {this.state.isEdit ?
                    <div>

                        <button onClick={this.textEdit}>Edit</button>
                        <button onClick={this.textDelete}>Delete</button>

                    </div>
                    :
                    <div ><button onClick={this.textAdd}>Text Add</button></div>

                }

                {this.state.dataAvailable && <div><button onClick={this.textClear}>Clear</button></div>}


                {this.state.array.map((item, index) => {
                    return <p key={index} onClick={() => this.textClick(item)}>{item}</p>;
                })}

            </div>
        )
    }
}
