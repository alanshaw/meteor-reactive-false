# meteor-reactive-false

Experiment to see what happens when you subscribe to the same subscription twice, but don't want the UI for the second subscription to be reactive.

Note the thing that's specifying reactivity is the following code in `imports/ui/Widget.js`:

```js
Items.find({}, { reactive: false }).fetch()
```
