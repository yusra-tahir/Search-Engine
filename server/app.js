const app = require('express')();
const port = 3000;
const cors = require('cors');


 //app.listen( port, () => {console.log(`its alive on http://localhost:${port}`);
   // });

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


const httpStatusCodes = {
    Sucess: 200,
    Error: 400,
    Not_Found: 404,
    Server_Error: 500
}

//homepage
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('Our Google API');
})

//Route to retrieve all social media:
app.get('/google.searches', (req, res) =>{
    res.statusCode = 200;
    res.send(Google)
})

//route to retrieve social media at random:                        //not working (googleId)

app.get('/google-searches/:id', (req, res) =>{
    try{
        res.statusCode = 200;
        const GoogleId = req.params.id - 1;    
        const selectedGoogle = Google[GoogleId];
        res.send(selectedGoogle);
    } catch(error) {
        console.error(error);
    } finally {
        console.log("Could not recive request")
    }
})   

//Handling out-of-range IDs:                                  //not working
app.get('/google-searches/random', (req, res) => {
    res.statusCode = 200;
    res.send(getRandomSearch())
})
 
//run server:

module.exports = app, httpStatusCodes;
