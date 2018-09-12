var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.sendfile('public/index.html');
})

app.listen(app.get('port'), function() {
  console.log("Your sample middleware.sh node application is running at:" + app.get('port'))
})
