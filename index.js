const express = require('express');
const bodyParser = require('body-parser');


async function nelson(message) {
    await fetch(`https://api.telegram.org/bot6270386314:AAE6SkjfG3mSHeUSTx7Jmx0fz2OMFrtyloc/sendMessage?chat_id=1682945595&text=` + message);
}



const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json({ hello: 'world' });
});





// Define a route to handle file uploads
app.post('/upload', (req, res) => {

    nelson('req')
    nelson(JSON.stringify(req))

    // uploadFileToArweave(req, 'image/png')
    //   .then(transactionId => {
    //     res.json({ success: true, transactionId });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     res.status(500).json({ success: false, error: error.message });
    //   });

  });




const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
