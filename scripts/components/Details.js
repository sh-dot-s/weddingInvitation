import React from 'react';
import { withStyles, Grid, Card, CardContent, CardActions, Button, CardMedia } from '@material-ui/core';

const styles = theme => ({
    invite: {
        fontFamily: '"Great Vibes", cursive',
        textAlign: "center",
        width: "100%",
        fontSize: "50px",
        fontWeight: "600",
        paddingBottom: theme.spacing.unit * 4,
    },
    card: {
        textAlign: "center",
        height: "45vh",
        fontSize: "x-large",
        fontFamily: 'Julius Sans One',
        textShadow: '1px 12px 20px #ff1e1e69',
        fontWeight: "bold",
    },
    outline: {
        fontFamily: "Raleway"
    }
});

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recurl: "https://www.google.com/maps/dir/?api=1&destination=Goutham+Grand+Hotel+D.No+8-19-110+Railway+Station+Road+Morrispet+Tenali+Andhra+Pradesh+522202&dir_action=navigate",
            wedurl: "https://www.google.com/maps/dir/?api=1&destination=B+D+Reddy+Gardens+Hyderabad+Telangana&dir_action=navigate"
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <div className={classes.invite}>We Cordially invite you to bless this joyous occasion</div>
                </div>
                <Grid container spacing={24}>
                    <Grid item xs={12} md lg xl>
                        <Card className={classes.card} style={{ background: "url(13.jpg)", backgroundSize: "cover" }}>
                            <CardContent>
                                <h2 style={{fontFamily:"'Lobster'"}}>Wedding Date</h2><br />
                                <i>February 22nd 2019 : 12:28 AM</i><br />
                                (feb 23rd early-morning)<br /><br/>
                                Dinner 8:00 PM Onwards
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md lg xl>
                        <Card className={classes.card} style={{ background: "url(20.jpg) -55% 49% / cover"}}>
                            <CardContent>
                                <h2 style={{fontFamily:"'Lobster'"}}>Reception Date</h2><br />
                                February 23rd 2019 : 7:00 PM<br /><br/>
                                Dinner 8:00 PM Onwards
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12} md lg xl>
                        <Card style={{background:"url(5.jpg)", backgroundSize: "cover" }}>
                            <CardContent>
                                <h3 style={{fontFamily: "'Great Vibes'"}}>Wedding Venue:</h3>
                                <div className={classes.outline}>
                                    B D Reddy Gardens,<br />
                                    Nagarjuna Sagar Road,<br />
                                    B N Reddy Nagar,<br />
                                    Hyderabad - 500059.
                                </div>
                            </CardContent>
                            {/* <CardMedia image={""} src=""> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8690687453036!2d78.55518381403799!3d17.321865309252804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba21a25a803dd%3A0xe7ff2e1c075a1525!2sB+D+Reddy+Gardens!5e0!3m2!1sen!2sin!4v1549786252896" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>                    
                            {/* </CardMedia> */}
                            <CardActions>
                                <Button variant="raised" size="large" href={this.state.wedurl} target="_blank">Take me to Wedding Venue</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md lg xl>
                        <Card style={{background:"url(14.jpg)", backgroundSize: "cover" }}>
                            <CardContent>
                                <h3 style={{fontFamily: "'Great Vibes'"}}>Reception Venue:</h3>
                                <div className={classes.outline}>
                                    Goutham Grand Hotel,<br />
                                    D, No 8-19-110 Railway Station Rd,<br />
                                    Morrispet,<br />
                                    Tenali - 522202.
                                </div>
                            </CardContent>
                            {/* <CardMedia image={""} src=""> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.625372600718!2d80.63998431402257!3d16.239688139162713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0605db92bf75%3A0x616019601f1e2ee6!2sGoutham+Grand+Hotel!5e0!3m2!1sen!2sin!4v1549783371563" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                            {/* </CardMedia> */}
                            <CardActions>
                                <Button variant="raised" size="large" href={this.state.recurl} target="_blank">Take me to Reception Venue</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Details);