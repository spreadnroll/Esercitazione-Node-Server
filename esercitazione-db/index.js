const form = document.getElementById('form-population');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);
    const data = Object.fromEntries(dataForm.entries());

    const response = await fetch('http://localhost:3005/character/friends', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.text()
    alert(result);
});