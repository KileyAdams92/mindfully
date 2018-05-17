# Mindfully
[Mindfully letter app](https://secret-brook-82924.herokuapp.com/)

## Team
* Kiley Adams
* Ted Hodges
* Samantha McCall

## Object

Kiley proposed the idea to our team of an app that takes the simple-yet-timeless concept of a parent’s letters to their child on each birthday and gives it a digital twist. Ted and Sam agreed it was a good idea and Mindfully was born!

With Mindfully, anyone can write and save letters to a loved one, then save them all in one place. You can sort them by category — such as birthdays — to ensure you’re sending a new message each year. 


## Technology used

Mindfully uses an MVC framework, a MySQL database for data storage, Node, Express, and Handlebars. It also uses technology we've used in class and some new libraries and frameworks: 

### Existing
* Github and Heroku deployment
* Chai, Mocha & Nightmare for testing

### New Technologies
* Semantic UI for front-end design
* **TypeIt.js for typewriter animation effects??**
* Passport.js for authentication 

## Code excerpts

The MVC framework includes: 

### Model files
This code snippet illustrates how the letters.js model interacts with the MySQL database:

```
module.exports = function(sequelize, DataTypes) {
var Letter = sequelize.define("Letter", {
title: {
type: DataTypes.STRING,
allowNull: false,
validate: {
len: [1, 50]
}
},
letter: {
type: DataTypes.TEXT,
allowNull: false,
len: [1, 1000]
},
category: {
type: DataTypes.STRING,
defaultValue: "Personal"
}
});

Letter.associate = function(models) {
// every Letter belongs to an Author
// Foreign key means a Letter can't be created without an Author
models.Letter.belongsTo(models.Author, {
foreignKey: {
allowNull: false
}
});
};

return Letter;
}; 
```

### View files
Within the public/views/ folder there's a file for each HTML page that corresponds to a file in public/js/:

* dashboard.js
```
// InitializeRows handles appending all of our constructed post HTML inside blogContainer
function initializeRows() {
blogContainer.empty();
var postsToAdd = [];
for (var i = 0; i < posts.length; i++) {
postsToAdd.push(createNewRow(posts[i]));
}
blogContainer.append(postsToAdd);
}
```
* dashboard.html
```
<div class="ui text container" id="blog-container">
<p>Starting a new letter is as easy as clicking the New Post button!</p>

<p>Worried about repeating yourself? No problem! To review previous letters, 
just choose the category from the dropdown menu.</p> 

<p>Whether you decide to write something completely new or continue a story 
from a previous letter, Mindfully preserves your words so you can refer back to them.</p>
</div>
```

### Controller files
The html-routes and api-routes.js files controls the routes to and from the database and html pages, such as this POST route:
```
//POST route for creating new letter
app.post("/api/letters", function(req, res) {
db.Letter.create({
title: req.body.title,
letter: req.body.letter,
category: req.body.category
}).then(function(result) {
res.json(result);
});
});
```



