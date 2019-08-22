import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tirth Patel</h2>
                        <img
                        src={require('./Tirth.JPG')}
                        alt="avatar"
                        style={{height:'250px'}}/>
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em' }}>Contact Me for any potential opportuniy.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}} icon="person">
                                {/* <i className="fab fa-phone"></i> */}
                                Phone: (709) 325-3822
                                </ListItemContent>
                        </ListItem>
                        {/* <ListItem> */}
                        {/* <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}} icon="person"> */}
                                {/* <i className="fab fa-phone"></i> */}
                                {/* FAX */}
                                {/* </ListItemContent> */}
                        {/* </ListItem> */}
                        <ListItem>
                        <ListItemContent style={{fontSize:'30px', fontFamily:'Anton'}} icon="person">
                                {/* <i className="fab fa-phone"></i> */}
                                Email: tnpatel@mun.ca
                                </ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;