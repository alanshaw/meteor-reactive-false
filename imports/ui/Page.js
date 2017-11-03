import React from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import Items from '../api/items/items'
import Widget from './Widget'

const Page = ({ items, loading }) => (
  <div>
    <h1>Page items (reactive)</h1>
    <ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.map((item) => <li key={item._id}>{item._id} {item.text}</li>)
      )}
    </ul>
    <Widget />
    <br />
    <p>Call the 'items.add' Meteor method to add to this collection e.g.</p>
    <pre>
      Meteor.call('items.add', {'{'} text: 'test' {'}'})
    </pre>
    <p>Call the 'items.update' Meteor method to update the collection e.g.</p>
    <pre>
      Meteor.call('items.update', {'{'} _id: 'xxx', text: 'test' {'}'})
    </pre>
  </div>
)

Page.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default withTracker((props) => {
  const handle = Meteor.subscribe('items')
  return {
    items: Items.find({}).fetch(),
    loading: !handle.ready()
  }
})(Page)
