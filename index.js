const express = require('express');
const app = express();
app.use('/', express.static('./page/dist')),
app.listen(80)