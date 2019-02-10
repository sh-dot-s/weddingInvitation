import React from "react";

export default class Letter extends React.Component {
    envelopeOnClick = () => {
        if (document.querySelector('.letter').classList.contains('letter--open')) {
            document.querySelector('.letter').classList.remove('letter--open');
            document.querySelector('.letter').classList.add('letter--close');
            setTimeout(function () {
                document.querySelector('.letter').classList.remove('letter--close');
            }, 600);
        } else {
            document.querySelector('.letter').classList.remove('letter--close');
            document.querySelector('.letter').classList.add('letter--open');
        }
    };

    paperCloseOnClick = () => {
        document.querySelector('.letter').classList.remove('letter--open');
        document.querySelector('.letter').classList.add('letter--close');
        setTimeout(function () {
            document.querySelector('.letter').classList.remove('letter--close');
        }, 600);
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="letter">
                <div className="envelope" onClick={this.envelopeOnClick}>
                    <div className="envelope-flap"></div>
                    <div className="envelope-paper"></div>
                    <div className="envelope-detail"></div>
                </div>
                <div className="paper">
                    <div className="paper-content">
                        <div className="paper-close" onClick={this.paperCloseOnClick}>x</div>
                        <img src="invitation.jpeg"></img>
                    </div >
                </div >
            </div >
        );
    }
}