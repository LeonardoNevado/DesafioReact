"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./styles/styles.css");
var react_1 = require("react");
var TodoTask_1 = require("./Components/TodoTask/TodoTask");
function App() {
    var _a = react_1.useState(""), task = _a[0], setTask = _a[1];
    var _b = react_1.useState([]), todoList = _b[0], setTodoList = _b[1];
    var handleChange = function (event) {
        if (event.target.name === "task") {
            setTask(event.target.value);
        }
    };
    var addTask = function () {
        var newTask = { taskName: task };
        setTodoList(__spreadArrays(todoList, [newTask]));
        setTask("");
    };
    var deleteTask = function (taskNameToDelete) {
        setTodoList(todoList.filter(function (task) {
            return task.taskName != taskNameToDelete;
        }));
    };
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("div", { className: "header" },
            react_1["default"].createElement("h1", null, "Tarefas"),
            react_1["default"].createElement("input", { type: "text", autoComplete: "off", placeholder: "Nova Tarefa . . .", name: "task", className: "input", value: task, onChange: handleChange }),
            react_1["default"].createElement("button", { className: "btn", onClick: addTask }, "+")),
        react_1["default"].createElement("div", { className: "todoList" }, todoList.map(function (task, key) {
            return react_1["default"].createElement(TodoTask_1["default"], { key: key, task: task, deleteTask: deleteTask });
        }))));
}
exports["default"] = App;
