# ObjectModel

**ObjectModel** is a tiny package that help you use any object as a Model.

## How to install

Add **ObjectModel** to your project with the following command:

```
npm install object-model
```

Include it when you needed:

```js
var OM = require('object-model');
```

## How to use

Let's say, we want to define `carModel`, as a model to define `cars`:

```js
var carModel = {
    make: '',
    year: '',
    name: '',
    mpg: ''
};
```

Create the model from `carModel` object with:

```js
OM.createModel(carModel);
```

From now on, you can create any data object with `carModel` model:

```js
var rav4 = carModel.init('toyota', 2000, 'RAV4', 27);
console.log(rav4);
```

or if you want to write more meaningful code:

```js
var crv = carModel.init({
    make: 'honda',
    year: 2005,
    name: 'CRV'
});
console.log(crv);
```

You can skip some key, it will automatically takes the default value from model.

## Real-life usage

For example, we use **ObjectModel** with **MongoDB** in a simple **To Do** app.

Firstly, we define our `task` model:

```js
var taskModel = {
    task: '',
    timeCreated: 0,
    done: false
}
```

Then we create a model from `task` object with **ObjectManager**:

```js
OM.createModel(taskModel);
```

Now the `taskModel` is available to use. Let's insert a new task to **MongoDB**:

```js
db.collection('tasks').insertOne(
    taskModel.init('Pay gas bill', Date.now()),
    function(err, result) {
        if (err) console.error(err);
        else console.log(result);
    }
);
```

Or insert many document at a time:

```js
db.collection('tasks').insertMany(
    [
        taskModel.init('Pay gas bill', Date.now()),
        taskModel.init('Pay phone bill', Date.now()),
        taskModel.init('Pay car loan', Date.now()),
    ],
    function(err, result) {
        if (err) console.error(err);
        else console.log(result);
    }
);
```

# Contribute

I know my code isn't cool yet, there are many potential issues with such a logic. Please help me improve it if you can. Feel free to create _Pull Request_ or do code review for other _PR_.

# License

This project published under **MIT License**, please refer `LICENSE.md` for more detail.
