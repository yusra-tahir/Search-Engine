const app = require('./app');
const port = 3000;


app.listen(port, () => {
    console.log(`Express example app departed from http://localhost:${port}`);
});