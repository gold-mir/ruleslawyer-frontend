import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom'

import SearchPage from './searchPage'
import MainPage from './mainPage'
import RulePage from './rulePage'
import Glossary from './glossary'
import NotFound from "./notfound"
import About from "./about"
import BotsPage from './botsPage'
import Footer from './footer'
import { Helmet } from 'react-helmet'

import CSS from '../styles/app.module.css'

export const API_URL = process.env.LOCAL_SERVER || window.location.origin

export function App(): React.ReactElement {
    return(
        <div className={CSS.app}>
            <Helmet>
                <title>RulesLawyer</title>
            </Helmet>
            <Router>
                {/* <TopBar/> */}
                <div className={CSS.body}>
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>
                        <Route path='/search'>
                            <SearchPage/>
                        </Route>
                        <Route path='/rule/:id' component={RulePage}/>
                        <Route exact path='/glossary/' component={Glossary}/>
                        <Route path='/glossary/:id' component={Glossary}/>
                        <Route path='/about' component={About}/>
                        <Route path='/bots' component={BotsPage}/>
                        <Route path='*'component={NotFound}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>
    )
}

export const render = (): void => { ReactDOM.render(<App/>, document.getElementById('react-app-root')) }