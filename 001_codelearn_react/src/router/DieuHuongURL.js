import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Danhsachtin from './../components/Danhsachtin';
import Tinchitiet from './../components/Tinchitiet';

class DieuHuongURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/tin">
                    <Danhsachtin />
                </Route>
                <Route path="/tin-tuc/:slug.:id.html" component={Tinchitiet} />
            </Switch>
        );
    }
}

export default DieuHuongURL;