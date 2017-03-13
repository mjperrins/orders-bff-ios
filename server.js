const cfenv = require('cfenv');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.text());

// Emulating VCAP_VARIABLES if running in local mode
try { require("./vcap-local"); } catch (e) {}
var appEnv = cfenv.getAppEnv();



// Swagger instrumentation
app.use("/swagger/api", express.static("./public/swagger.yaml"));
app.use("/", express.static("./public/swagger-ui"));

// Business logic
app.get("/products", function(req, res, next){
	/*
	Put your business logic here, e.g.
	cloudantDb.list(function(err, body){
		if (!err){
			body.rows.forEach(function(doc){
				console.log(doc);
			});
		}
	});
	*/
	res.json();
});

app.post("/products", function(req, res, next){
	// Put your business logic here
	res.json();
});

app.get("/product/:id", function(req, res, next){
	// Put your business logic here
	res.json();
});

app.put("/product/:id", function(req, res, next){
	// Put your business logic here
	res.json();
});

app.delete("/product/:id", function(req, res, next){
	// Put your business logic here
	res.json();
});


// Starting the server
const port = 'PORT' in process.env ? process.env.PORT : 8080;
app.listen(port, function () {
  console.log(`Example app listening on port ${this.address().port}!`)
});
