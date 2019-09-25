import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './Education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <h2>Tirth Patel</h2>
                        <h4 style={{color:'grey'}}>Computer Scientist</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                        <p>Hello World ;)</p>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                        <h5>Address</h5>
                        <p>305, 6 Wigmore Court, St John's, A1B4A9 </p>
                        <h5>Phone</h5>
                        <p>709-325-3822</p>
                        <h5>Email</h5>
                        <p>tnpatel@mun.ca</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                    </Cell>
                    
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2012}
                        endYear={2006}
                        schoolName="My University"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odit accusamus eius similique sapiente quisquam, ab ex illum voluptatum. Error recusandae magni aspernatur reprehenderit eius, soluta tempora quae ut illum!"
                        />
                        <Education 
                        startYear={2012}
                        endYear={2006}
                        schoolName="My University2"
                        schoolDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam odit accusamus eius similique sapiente quisquam, ab ex illum voluptatum. Error recusandae magni aspernatur reprehenderit eius, soluta tempora quae ut illum!"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2009}
                        endYear={2012}
                        jobName="First Job"
                        jobDescription="sldknfadjkfnadskljfdsakfnaskdjfnakdsljfnasklv xkjcas djknasjdk csdc sdc dsdsj "
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills 
                        skill='javascript'
                        progress={100}
                        />
                        <Skills 
                        skill='python'
                        progress={60}
                        />
                        <Skills 
                        skill='unity'
                        progress={45}
                        />
                        <Skills 
                        skill='react'
                        progress={25}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;