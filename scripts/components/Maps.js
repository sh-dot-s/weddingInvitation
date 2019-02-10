import React, { Component } from 'react';
import { Button, CardContent, Card, CardActions, Typography, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        fontSize: "large",
        fontFamily: "'Roboto Mono', monospace",
        margin: "auto",
        transition: "0.4s"
    }
});

class Map extends Component {

    state = {
        url: "https://www.google.com/maps/dir/?api=1&destination=B+D+Reddy+Gardens+Hyderabad+Telangana&dir_action=navigate"
    };
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12} md={4} lg={4} xl={5}>
                        <Card className={classes.card}>
                            <CardContent>
                                <div variant="h4">
                                    <h3>Address:</h3>
                                    <div variant="overline">
                                        B D Reddy Gardens,<br />
                                        Nagarjuna Sagar Road,<br />
                                        B N Reddy Nagar,<br />
                                        Hyderabad - 500059.
                                    </div>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="large" color="primary" variant="contained" href={this.state.url} target="_blank">Start Navigation</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md lg xl>
                        <iframe src="https://www.google.com/maps/d/embed?mid=1t2Q0EC93GAECU55AaBpCTHZvd6U" width="100%" height="100%"></iframe>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Map);