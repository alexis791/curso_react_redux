import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

/**Components */
import Details from './components/Details'
import Results from './components/Results'

/** Store de redux */
import store from './redux/store'

const Root = () => (
    
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results}/>
                <Route path="/details/:idItem" component={Details}/>
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(<Root/>, document.getElementById('root'))