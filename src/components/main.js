import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Project from './project';
import Resume from './resume';


const Main =()=>(
<<<<<<< HEAD
    
        <Router basename={process.env.PUBLIC_URL}>
=======
    <Switch>
        
>>>>>>> parent of f82e5e0... changes
        <Route exact path="/" component={Landing} />
        <Route path="/aboutme" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Project} />
        <Route exact path="/resume" component={Resume} />
<<<<<<< HEAD
        </Router>
    
=======
    </Switch>
>>>>>>> parent of f82e5e0... changes
)
export default Main;