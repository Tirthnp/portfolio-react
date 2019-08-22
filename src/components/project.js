import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText} from 'react-mdl';
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab:0}
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="project-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                        To Do List
                    </CardTitle>
                <CardText>Simple front end TODO List.</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <a href="http://tirthnp.github.io/react-todo/" target="_blank" rel="noopener noreferrer"><Button colored>LiveDemo</Button></a>
                </CardActions >
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff',height:'176px',background:'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>
                        React Project
                    </CardTitle>
                <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita nobis veniam dolorum eos dolore eius, harum magnam. Rem, nemo, natus perferendis nostrum culpa tenetur iure quod, id delectus ab labore?</CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    {/* <Button colored>CodePen</Button> */}
                    {/* <Button colored>LiveDemo</Button> */}
                </CardActions >
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"></IconButton>
                </CardMenu>
                </Card>
                </div>
                
                
                
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div><h1>This is python</h1></div>
            )
            
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Unity</h1></div>
            )
            
        }
        else if(this.state.activeTab === 2){
            return(
                <div><h1>This is Java</h1></div>
            )
            
        }
   }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID)=> this.setState({activeTab:tabID})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>Unity</Tab>
                    <Tab>Java</Tab>
                    <Tab>nothing</Tab>

                </Tabs>

                
                    <Grid className="project-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                    
                
            </div>
        )
    }
}

export default Project;