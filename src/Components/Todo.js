import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const tasks=[{id:1,txt:'Task 1'},{id:2,txt:'Task 2'},{id:3,txt:'Task 3'}];
        return (
            <div>
                <div className='input-container'>
                    <input type='text'></input>
                    <button>Add</button>
                </div>
                <div className='class-list'>
                    <ul>
                        {
                           tasks.map(task=>(
                                <li>
                                    <h1>{task.txt}</h1>
                                    <button>Delete</button>
                                </li>
                           ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
