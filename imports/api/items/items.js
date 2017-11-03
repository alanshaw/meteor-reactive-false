import { Mongo } from 'meteor/mongo'

const Items = new Mongo.Collection('items')

Items.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
})

export default Items
