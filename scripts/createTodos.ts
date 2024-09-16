// createTodos.ts
// * a script to genereate <num> todo records in the db

import db from "..";
import { todo } from '../schema/todo';


const createTodos = async () => {
    for (let i = 0; i < 100; i++) {
        await db.insert(todo).values({
            text: 'todo' + i
        })
    }
};

createTodos()
    .then(() => {
        console.log("Todos created successfully.");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Error creating todos:", error);
        process.exit(1);
    });