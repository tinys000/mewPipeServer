var pow = require('pow-mongodb-fixtures');
var fixtures = pow.connect('book_phone');
var id = pow.createObjectId;

fixtures.load({
	users: [
    {
        "_id" : id(),
        "name" : "kuentz",
        "lastname" : "nicolas",
        "age" : "25"
    },
    {
        "_id" : id(),
        "name" : "Dupond",
        "lastname" : "Paul",
        "age" : "32"
    }
    ]
});