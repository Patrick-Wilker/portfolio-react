import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Blog from './pages/Blog';
import Project from './pages/Project';
import Resume from './pages/Resume';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path="/projects" exact component={Project}/>
                <Route path="/resume" exact component={Resume}/>
            </Switch>
        </BrowserRouter>
    );
}