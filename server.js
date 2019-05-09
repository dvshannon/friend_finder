const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("../friend_finder/app/routing/apiRoutes.js")(app);
require("../friend_finder/app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
