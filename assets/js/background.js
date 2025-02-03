const links = [
    'https://raw.githubusercontent.com/Shoylekov/Finance_tracker/refs/heads/main/main.py',
    'https://raw.githubusercontent.com/Shoylekov/ChatRooms/refs/heads/main/base/views.py',
    'https://raw.githubusercontent.com/Shoylekov/News_Aggregator/refs/heads/main/news_aggregator/news/views.py',
    'https://raw.githubusercontent.com/Shoylekov/Movie_Recommender/refs/heads/main/Main.ipynb',
    'https://raw.githubusercontent.com/Shoylekov/AiFlap/refs/heads/main/flap.py',
    'https://raw.githubusercontent.com/Shoylekov/Python_Wordle/refs/heads/main/play_wordle.py',
    'https://raw.githubusercontent.com/Shoylekov/C-Projects/refs/heads/main/Super_Market/Super_Market.cpp',
    'https://raw.githubusercontent.com/Shoylekov/ChatRooms/refs/heads/main/static/js/script.js',
];

let word_speed = 100;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function get_text(link) {
    return fetch(link).then(response => response.text());
};

function min(a, b) {
    if (a < b) return a;
    return b;
};

function delay(char) {
    if (char == ' ') {
        word_speed = Math.floor(Math.random() * 50) + 10;
        return word_speed;
    }
    word_speed = min(word_speed + 2, 100);
    return word_speed;
};

function print(text, index, callback) {
    let char = text[index];
    if (text[index] == '\n') char = '<br>';

    setTimeout(() => {
        document.querySelector('#background').innerHTML += char;
        if (index < text.length - 1) {
            print(text, index + 1, callback);
        } else {
            document.querySelector('#background').innerHTML += '<br><br>';
            callback();
        }
    }, delay(char));
};

function fetch_and_print() {
    const link = shuffleArray(links).pop();
    if (!link) {
        console.log("finish");
        return;
    }

    fetch(link)
        .then(response => response.text())
        .then(text => {
            print(text, 0, fetch_and_print);
        })
        .catch(error => console.error(`Error fetching ${link}:`, error))
};

fetch(shuffleArray(links).pop())
    .then(response => response.text())
    .then(text => {
        let inner_HTML = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            if (text[i] == '\n') char = '<br>';
            inner_HTML += char;
        }
        document.querySelector('#background').innerHTML += inner_HTML;
        document.querySelector('#background').innerHTML += '<br><br>';
        fetch_and_print();
    })
    .catch(error => console.error(`Error fetching ${link}:`, error));