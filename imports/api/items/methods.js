import { Meteor } from 'meteor/meteor'
import Items from './items'

Meteor.methods({
  'items.add' ({ text }) {
    Items.insert({ text })
  }
})
