import { Meteor } from 'meteor/meteor'
import Items from './items'

Meteor.methods({
  'items.add' ({ text }) {
    Items.insert({ text })
  },

  'items.update' ({ _id, text }) {
    Items.update({ _id }, { $set: { text } })
  }
})
