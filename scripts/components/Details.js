import React from 'react';
import { withStyles, Grid, Card, CardContent } from '@material-ui/core';

const styles = theme => ({
    invite: {
        fontFamily: '"Great Vibes", cursive',
        textAlign: "center",
        width: "100%",
        fontSize: "50px",
        fontWeight: "600",
    },
    card: {
        textAlign: "center",
        height: "40vh",
        fontSize: "x-large",
        fontFamily: 'Julius Sans One',
        textShadow: '1px 1px 12px #361effa6',
        fontWeight: "bold",
    }
});

class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <div className={classes.invite}>We Cordially invite you to bless this joyous occasion</div>
                </div>
                <Grid container spacing={24}>
                    <Grid item xs md lg xl>
                        <Card className={classes.card} style={{background:"url(13.jpg)", backgroundSize: "cover"}}>
                            <CardContent>
                                Wedding Date<br/>
                                February 23rd 2019 : 12:28 AM<br/>
                                (feb 22nd mid-night)<br/>
                                Dinner 7:00 PM Onwards
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs md lg xl>
                        <Card className={classes.card} style={{background:"url(10.jpg)", backgroundSize: "cover"}}>
                            <CardContent>
                                Reception Date<br/>
                                February 23rd 2019 : 7:00 PM<br/>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Details);