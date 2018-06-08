const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('stylesheets'));
app.use(express.static('recursos'));
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Activo el test → PORT 3000');
});
