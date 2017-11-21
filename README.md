# meteor-reactive-false

Experiment to see what happens when you subscribe to the same subscription twice, but don't want the UI for the second subscription to be reactive.

Note the thing that's specifying reactivity is the following code in `imports/ui/Widget.js`:

```js
Items.find({}, { reactive: false }).fetch()
```

## Conclusion

`{ reactive: false }` is a signal to the tracker to not track the query. i.e. it won't re-run the computation if the results of the `find()` change. However it **will re-run the computation if other things it is tracking change**. So to ensure non-reactivity, you really want a tracker that tracks **only** the ready state of the subscription and the query for the data.
