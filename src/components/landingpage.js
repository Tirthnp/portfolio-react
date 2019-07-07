import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';


class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%',margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p>HTML/CSS | Unity | Javascript | React | NodeJS | MongoDB <i className="fab fa-linkedin-square"  aria-hidden="true" /></p>

                            
                            <div className="social">
                            <a href="https://www.linkedin.com/in/tirth-patel-252869153/" rel="noopener noreferrer" target="_blank">
                               <img src="https://image.flaticon.com/icons/svg/226/226241.svg" alt=""/>
                            </a>
                            <a href="https://github.com/Tirthnp" rel="noopener noreferrer" target="_blank">
                               <img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt=""/>
                            </a>

                            </div>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;