const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


const pageRoutes = require('./routes/pages');


app.use('/pages', pageRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
