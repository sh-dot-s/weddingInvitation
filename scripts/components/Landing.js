import React from 'react';
import { withStyles, Paper } from '@material-ui/core';

const styles = theme => ({
    root: {
    },
    card: {
        maxWidth: "80%",
        fontSize: "xx-large",
        fontFamily: "satisfy",
        textAlign: "center",
        margin: "auto",
        marginTop: theme.spacing.unit * 15,
        transition: "0.4s"
    },
    names: {
        fontFamily: "'Great Vibes', cursive",
        fontSize: "60px",
        fontWeight: 900,
    },
    mess: {
        fontSize: "40px",
        fontWeight: 900,
    },

});

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elevation: 3
        }
    }
    upElevation = () => { this.setState({ elevation: 10 }) }
    downElevation = () => { this.setState({ elevation: 3 }) }
    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.card} elevation={this.state.elevation} onMouseEnter={this.upElevation} onMouseLeave={this.downElevation}>
                    
                        <div className={classes.names}>Sindhuja & Naga Raju</div>
                        are
                        <div className={classes.mess}>Tying the Knot</div>
                    
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Landing);