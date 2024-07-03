import React, { Component } from 'react';
import './Todoapp.css';


export default class Todoapp extends Component {
    state = {
        input: "",
        items: [],
        editing: false,
        currentIndex: null
    };

    handleChange = event => {
        this.setState({
            input: event.target.value
        });
    };

    storeItems = event => {
        event.preventDefault();
        const { input, items, editing, currentIndex } = this.state;

        if (input.trim()) {
            if (editing) {
                items[currentIndex] = input;
                this.setState({
                    items,
                    input: "",
                    editing: false,
                    currentIndex: null
                });
            } else {
                this.setState({
                    items: [...items, input],
                    input: ""
                });
            }
        }
    };

    deleteItem = index => {
        const { items } = this.state;
        this.setState({
            items: items.filter((item, i) => i !== index)
        });
    };

    editItem = index => {
        const { items } = this.state;
        this.setState({
            input: items[index],
            editing: true,
            currentIndex: index
        });
    };

    render() {
        const { input, items, editing } = this.state;
        return (
            <div className='todo-container'>
                <form className="input-section" onSubmit={this.storeItems}>
                    <h1>Todo App</h1>
                    <input
                        type="text"
                        placeholder='Enter the item...'
                        value={input}
                        onChange={this.handleChange}
                    />
                    <button type="submit">{editing ? "Update" : "Add"}</button>
                </form>
                <div className="list">
                    <ul>
                        {items.map((data, index) => (
                            <li key={index}>
                                {data}
                                <button className='btn' onClick={() => this.editItem(index)} aria-label={`Edit ${data}`}>
                                    <i className="fa-solid fa-edit"></i>
                                </button>
                                <button className='btn' onClick={() => this.deleteItem(index)} aria-label={`Delete ${data}`}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
