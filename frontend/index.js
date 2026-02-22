<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { max-width: 600px; margin: auto; padding: 20px; }
        h1 { text-align: center; }
        form { margin-bottom: 20px; }
        input, button { width: 100%; padding: 10px; margin: 5px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Task Manager</h1>
        <form id="taskForm">
            <input type="text" id="title" placeholder="Task Title" required />
            <input type="text" id="description" placeholder="Task Description" required />
            <input type="date" id="due_date" required />
            <button type="submit">Add Task</button>
        </form>
        <div id="taskList"></div>
    </div>
    <script>
        document.getElementById('taskForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const due_date = document.getElementById('due_date').value;
            fetch('/api/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, due_date })
            }).then(response => response.json()).then(data => {
                console.log(data);
                loadTasks();
            });
        });
        function loadTasks() {
            fetch('/api/tasks').then(response => response.json()).then(tasks => {
                const taskList = document.getElementById('taskList');
                taskList.innerHTML = '';
                tasks.forEach(task => {
                    const div = document.createElement('div');
                    div.textContent = `${task.title} - ${task.description} (Due: ${task.due_date})`;
                    taskList.appendChild(div);
                });
            });
        }
        loadTasks();
    </script>
</body>
</html>