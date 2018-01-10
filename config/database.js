const crypto = require("crypto").randomBytes(50).toString("hex");

module.exports = {
    uri: "mongodb://localhost:27017/"+ this.db,
    secret: crypto,
    db: "meantutorial"
}