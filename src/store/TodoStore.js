import { action, computed, observable, makeAutoObservable, toJS } from "mobx";

class TodoStroe{
    
    constructor(){
        makeAutoObservable(this);
    }

    @observable
    _todo = {
        title:"할일을 입력하세요", 
        date:null
    }

    @observable
    _todos = [];

    @computed
    get todo(){
        return this._todo
    }

    @computed
    get todos(){
        // return this._todos
        return toJS(this._todos);
    }

    @action
    setTodoProps(name, value){
        this._todo={
            ...this._todo,
            [name] : value
        }
    }

    @action
    addTodo(todo){
        this._todos.push(todo)
    }
}

export default new TodoStroe();