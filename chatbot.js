document.getElementById('chatInput').addEventListener('keypress', async function(e) {
    if (e.key === 'Enter') {
        const message = e.target.value;
        if (message.trim() !== '') {
            displayMessage('user', message);
            e.target.value = '';

            const response = await getChatbotResponse(message);
            displayMessage('bot', response);
        }
    }
});

function displayMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const newMessage = document.createElement('div');
    newMessage.classList.add(sender === 'user' ? 'bg-blue-500' : 'bg-gray-700', 'text-white', 'p-2', 'rounded-lg', 'mb-2');
    newMessage.innerText = message;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function getChatbotResponse(message) {
    try {
        const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer YOUR_API_KEY`
            },
            body: JSON.stringify({
                prompt: `User: ${message}\nBot:`,
                max_tokens: 150,
                n: 1,
                stop: null,
                temperature: 0.9
            })
        });

        const data = await response.json();
        return data.choices[0].text.trim();
    } catch (error) {
        console.error('Error:', error);
        return '챗봇 응답을 가져오는 데 문제가 발생했습니다.';
    }
}





