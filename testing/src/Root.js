import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise'
import reducers from 'reducers'
import { connect } from 'react-redux'
import * as actions from 'actions'
import async from 'middlewares/async'
import stateValidator from './middlewares/stateValidator'

// class Root extends React.Component {
//   render() {
//     const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)
//     const store = createStoreWithMiddleware(reducers)
//     return <Provider store={store}>{this.props.children}</Provider>
//   }
// }

// function mapStateToProps(state) {
//   return {}
// }

// export default connect(mapStateToProps, actions)(Root)

export default ({ children, initialState = {} }) => {
  // const store = createStore(
  //   reducers,
  //   initialState,
  //   applyMiddleware(reduxPromise)
  // );
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator),
  )

  return <Provider store={store}>{children}</Provider>
}
