// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();

// Sets up the Express App
// =============================================================
var PORT = 3000;

//MIDDLEWARE
// =============================================================
app.use(express.static(__dirname + '/public'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Routes
// =============================================================
var routes = require('./controllers/routes.js');
app.use('/', routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT);
