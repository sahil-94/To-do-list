let input = prompt('What would you like to do');
const todos = ['Buy door lock', 'Return jeans'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('**********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********')
    } else if (input === 'new') {
        const newTodo = prompt('What would you like to add');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the list`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('OK, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt('What would you like to do');
}

console.log('You Quit The App');