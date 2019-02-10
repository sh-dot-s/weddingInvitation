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
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs md lg xl>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8690687453036!2d78.55518381403799!3d17.321865309252804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba21a25a803dd%3A0xe7ff2e1c075a1525!2sB+D+Reddy+Gardens!5e0!3m2!1sen!2sin!4v1549786252896" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>                    
                    </Grid>
                    <Grid item xs md lg xl>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.625372600718!2d80.63998431402257!3d16.239688139162713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0605db92bf75%3A0x616019601f1e2ee6!2sGoutham+Grand+Hotel!5e0!3m2!1sen!2sin!4v1549783371563" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

export default withStyles(styles)(Map);