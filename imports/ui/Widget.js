import React from 'react'
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import Items from '../api/items/items'

const Widget = ({ items, loading }) => (
  <div>
    <h1>Widget items (non-reactive)</h1>
    <ul>
      {loading ? (
        <p>Loading...</p>
      ) : (
        items.map((item, i) => <li key={i + item.text}>{item.text}</li>)
      )}
    </ul>
  </div>
)

Widget.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default withTracker((props) => {
  const handle = Meteor.subscribe('items')
  return {
    items: Items.find({}, { reactive: false }).fetch(),
    loading: !handle.ready()
  }
})(Widget)
