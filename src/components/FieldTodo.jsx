import React from "react";

const FieldTodo = (props) => {
   
    console.log(props.todo[0])
    return (
        <ul>
            {
                props.todo.map( (item, index) => {
                    return (
                        <li key={index}>{item.userName + " " + item.userAgeRange}</li>
                        );
                })
            }
        </ul>
    );
}

export default React.memo(FieldTodo);