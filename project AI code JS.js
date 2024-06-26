script.js:

```js
document.getElementById('bookingForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Send the booking data to the server
    const response = await fetch('/bookAppointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, date, time })
    });

    const data = await response.json();
    document.getElementById('message').textContent = data.message;
});
```

2. Back-end (Node.js with Express):

server.js:

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/bookAppointment', (req, res) => {
    const { name, date, time } = req.body;
    // Here you can save the appointment data to a database
    // For simplicity, let's just send a response back
    res.json({ message: `Appointment booked for ${name} on ${date} at ${time}` });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
```
