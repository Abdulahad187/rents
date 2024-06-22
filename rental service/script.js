document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    const chatbotSendButton = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');

    chatbotSendButton.addEventListener('click', () => {
        const userMessage = chatbotInput.value.trim();
        if (userMessage) {
            const userMessageElement = document.createElement('div');
            userMessageElement.textContent = userMessage;
            userMessageElement.className = 'chatbot-message-user';
            chatbotMessages.appendChild(userMessageElement);
            chatbotInput.value = '';

            // Simulate bot response
            const botMessageElement = document.createElement('div');
            botMessageElement.textContent = 'Thank you for your message. We will get back to you shortly.';
            botMessageElement.className = 'chatbot-message-bot';
            setTimeout(() => {
                chatbotMessages.appendChild(botMessageElement);
            }, 1000);
        }
    });
});

