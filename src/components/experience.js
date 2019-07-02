import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component{
    
    render(){
        const des = this.props.jobDescription.map((des) =>
    <li>{des}</li>
  );
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
                    <h5>{this.props.companyName}</h5>
                    <h6>{this.props.companyLocation}</h6>
                    
                    {des}
                </Cell>
                
            </Grid>
            
            
        )
    }
}

export default Experience;