const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');

//Array of results from google
const Google = [
    {
        id: 1,
        search: 'Twitter',
        summary: 'Social media website for Twitter',
        link: 'https://twitter.com/'
    },
    {
        id: 2,
        search: 'Instagram',
        summary: 'Social media website for Instagram',
        link: 'https://instagram.com'
    },
    {
        id: 3,
        search: 'TikTok',
        summary: 'Social media website for TikTok',
        link: 'https://instagram.com'
    },
    {
        id: 4,
        search: 'Facebook',
        summary: 'Social media website for Facebook',
        link: 'https://facebook.com',
    },
    {
        id: 5,
        search: 'Reddit',
        summary: 'Social media website for Reddit',
        link: 'https://reddit.com'
    },
    {
        id: 6,
        search: 'Pinterest',
        summary: 'Social media website for Pinterest',
        link: 'https://pinterest.com'
    },
    {
        id: 7,
        search: 'Youtube',
        summary: 'Social media website for Youtube',
        link: 'https://youtube.com'
    },
    {
        id: 8,
        search: 'Whatsapp',
        summary: 'Social media website for Whatsapp',
        link: 'https://whatsapp.com'
    },
    {
        id: 9,
        search: 'Telegram',
        summary: 'Social media website for Telegram',
        link: 'https://telegram.com'
    },
    {
        id: 10,
        search: 'Snapchat',
        summary: 'Social media website for Snapchat',
        link: 'https://snapchat.com'
    },
]

JSON.stringify(Google);

app.use(cors());

//homepage
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//searches endpoint
app.get('/google_searches', (req, res) => {
    res.send(Google);
})

//route to retrieve result with specific id           
app.get('/google_searches/:id', (req, res) => {
    const indx = parseInt(req.params.id);
    if (indx > 0 && indx <= Google.length) {
        const GoogleId = req.params.id - 1;
        const selectedGoogle = Google[GoogleId];
        res.send(selectedGoogle);
    } else {
        res.send({ Error: 'Page not found' });
    }
});


//run server:

module.exports = app;
