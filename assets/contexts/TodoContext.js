import React, { Component, createContext } from 'react';
export const TodoContext = createContext();

export default class TodoContextProvider extends Component {
    constructor(props) {
        console.log("let's start");
        super(props);
        this.state = {
            todos: [
                {id:1, name:"this is a todo element1"},
                {id:2, name:"this is a todo element2"},
            ],
        };
    }

    // create
    
    createTodo(event, todo){
        event.preventDefault();
        console.log(event);
        let data = [...this.state.todos];
        data.push(todo);
        this.setState ({
            todos : data,
        });
    }

    // read
    readTodo(){

    }

    // update
    updateTodo(event,data){
        event.preventDefault();
        console.log(data);

        let todos = [...this.state.todos];

        let todo = todos.find(todo => {return todo.id===data.id});
        
        todo.name = data.name;

        this.setState({todos : todos});
        
    }

    // delete
    deleteTodo(){
        
    }


    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo : this.createTodo = this.createTodo.bind(this),
                updateTodo : this.updateTodo = this.updateTodo.bind(this),
                deleteTodo : this.deleteTodo = this.deleteTodo.bind(this),


            }}>
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}
