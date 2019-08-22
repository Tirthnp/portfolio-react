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
                        <h4 style={{color:'grey'}}>Computer Science Student</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                        <p>Hello World ;)</p>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                        <h5>Address</h5>
                        <p> St John's, NL</p>
                        <h5>Phone</h5>
                        <p>709-325-3822</p>
                        <h5>Email</h5>
                        <p>tnpatel@mun.ca</p>
                        <h5>Web</h5>
                        <a href="http://tirthnp.github.io/portfolio-react/">http://tirthnp.github.io/portfolio-react/</a>
                        <hr style={{borderTop:'3px solid #833fb2', width :'50%'}} />
                    </Cell>
                    
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startYear={2017}
                        endYear="present"
                        schoolName="Memorial University of Newfoundland"
                        schoolDescription="Bachelors of Science | Major: Computer Science | Minor: Economics"
                        />
                        <Education 
                        startYear={2014}
                        endYear={2016}
                        schoolName="JG International School"
                        schoolDescription="International Baccalaureate Diploma (IB)"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>
                        <Experience 
                        startYear="April 2019"
                        endYear="September 2019"
                        jobName="IT Infracture Review/Support"
                        companyName="SAFEYNL"
                        companyLocation="St John's NL"
                        jobDescription={["Developing a traffic simulator using Unity","Help to automate some of the office tasks","Fill Microsoft Excel Sheets work using Python script and VBA (Visual Basic for Applications)","Participate in staff information sessions and learn about not-for-profits","General administration tasks"]}
                        />
                        <Experience 
                        startYear="September 2017"
                        endYear="August 2018"
                        jobName="Research Assistant"
                        companyName="Education Depertment, Memorial University of Newfoundland"
                        companyLocation="St John's NL"
                        jobDescription={["Understanding Ethical Compliances by doing online simulations/modules or surveys (CORE 2 Certificate Received)","Research on Literature Analysis related to various educational techniques","Reporting to Supervising Professor with work progress sheet every week"]}
                        />
                        <Experience 
                        startYear="December 2017"
                        endYear="Present"
                        jobName="Supervisor"
                        companyName="Subway"
                        companyLocation="Avalon Mall, St John's NL"
                        jobDescription={["Serving Customers","Doing the required paperwork and deposit","Assisting other staff members when needed","Train new employees"]}
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills 
                        skill='Javascript'
                        progress={64}
                        />
                        <Skills 
                        skill='Python'
                        progress={68}
                        />
                        <Skills 
                        skill='Unity'
                        progress={45}
                        />
                        <Skills 
                        skill='ReactJS'
                        progress={63}
                        />
                        <Skills 
                        skill='Java'
                        progress={75}
                        />
                        <Skills 
                        skill='C++'
                        progress={70}
                        />
                        <Skills 
                        skill='Bash'
                        progress={35}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;