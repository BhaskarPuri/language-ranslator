/*// Replace YOUR_API_KEY with your actual Google Translate API key
const apiKey = 'AIzaSyA1Uf8ZIg4GlvoLLA1r56BVHS6BTg7umO8';
const endpoint = 'https://translation.googleapis.com/language/translate/v2';

// Function to handle translation
function translateText() {
    // Get the source and target language codes
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    // Get the source text
    const sourceText = document.getElementById('sourceText').value;

    // Create the request URL
    const url = `${endpoint}?key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&q=${encodeURIComponent(
        sourceText
    )}`;

    // Make a GET request to the Google Translate API
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Extract the translated text from the response
            const translatedText = data.data.translations[0].translatedText;

            // Set the translated text in the target text area
            document.getElementById('translatedText').value = translatedText;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function to speak the text using the Google Text-to-Speech API
function speakText(text) {
    const audio = new Audio();

    // Set the URL for the Google Text-to-Speech API
    const apiKey = 'AIzaSyDQKku5vyqiEM22rCEX8xzPFCgFdq8Gvqc'; // Replace with your actual API key
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    // Create the request body
    const body = JSON.stringify({
        input: {
            text: text,
        },
        voice: {
            languageCode: 'en-US',
            ssmlGender: 'FEMALE',
        },
        audioConfig: {
            audioEncoding: 'MP3',
        },
    });

    // Make a POST request to the Google Text-to-Speech API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => {
            // Extract the audio content from the response
            const audioContent = data.audioContent;

            // Set the audio source as a base64-encoded data URI
            audio.src = `data:audio/mp3;base64,${audioContent}`;

            // Play the audio
            audio.play();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function to add event listeners for speech icons
function addSpeechIconEventListeners() {
    // Add event listener to the first speech icon for text-to-speech
    const speechIcon1 = document.querySelector('.speech-icon:nth-child(1)');
    speechIcon1.addEventListener('click', () => {
        const sourceText = document.getElementById('sourceText').value;
        speakText(sourceText);
    });

    // Add event listener to the second speech icon for text-to-speech
    const speechIcon2 = document.querySelector('.speech-icon:nth-child(2)');
    speechIcon2.addEventListener('click', () => {
        const translatedText = document.getElementById('translatedText').value;
        speakText(translatedText);
    });
}

// Add event listener to the translate button
document.getElementById('button').addEventListener('click', translateText);

// Call the function to add event listeners for speech icons
addSpeechIconEventListeners();
*/



// Replace YOUR_API_KEY with your actual Google Translate API key
const apiKey = 'AIzaSyA1Uf8ZIg4GlvoLLA1r56BVHS6BTg7umO8';
const endpoint = 'https://translation.googleapis.com/language/translate/v2';

// Function to handle translation
function translateText() {
    // Get the source and target language codes
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;

    // Get the source text
    const sourceText = document.getElementById('sourceText').value;

    // Create the request URL
    const url = `${endpoint}?key=${apiKey}&source=${sourceLanguage}&target=${targetLanguage}&q=${encodeURIComponent(
        sourceText
    )}`;

    // Make a GET request to the Google Translate API
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Extract the translated text from the response
            const translatedText = data.data.translations[0].translatedText;

            // Set the translated text in the target text area
            document.getElementById('translatedText').value = translatedText;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function to speak the text using the Google Text-to-Speech API
function speakText(text) {
    const audio = new Audio();

    // Set the URL for the Google Text-to-Speech API
    const apiKey = 'AIzaSyDQKku5vyqiEM22rCEX8xzPFCgFdq8Gvqc'; // Replace with your actual API key
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    // Create the request body
    const body = JSON.stringify({
        input: {
            text: text,
        },
        voice: {
            languageCode: 'en-US',
            ssmlGender: 'FEMALE',
        },
        audioConfig: {
            audioEncoding: 'MP3',
        },
    });

    // Make a POST request to the Google Text-to-Speech API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => {
            // Extract the audio content from the response
            const audioContent = data.audioContent;

            // Set the audio source as a base64-encoded data URI
            audio.src = `data:audio/mp3;base64,${audioContent}`;

            // Play the audio
            audio.play();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function to add event listeners for speech icons
function addSpeechIconEventListeners() {
    // Add event listener to the first speech icon for text-to-speech
    const speechIcon1 = document.getElementById('icon-1');
    speechIcon1.addEventListener('click', () => {
        const sourceText = document.getElementById('sourceText').value;
        speakText(sourceText);
    });

    // Add event listener to the second speech icon for text-to-speech
    const speechIcon2 = document.getElementById('icon-2');
    speechIcon2.addEventListener('click', () => {
        const translatedText = document.getElementById('translatedText').value;
        speakText(translatedText);
    });
}

// Add event listener to the translate button
document.getElementById('button').addEventListener('click', translateText);

// Call the function to add event listeners for speech icons
addSpeechIconEventListeners();





