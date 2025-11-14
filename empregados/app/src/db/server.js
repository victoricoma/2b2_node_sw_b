const express = require('express');
const { sequelize } = require('./models');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/departamentos', require('./routes/departamentos'));
app.use('/empregados', require('./routes/empregados'));
app.use('/dependentes', require('./routes/dependentes'));

sequelize.authenticate().then(() => {
    console.log('DB conectado');
    app.listen(5000, () => console.log('http://localhost:5000'));
  }).catch(console.error);