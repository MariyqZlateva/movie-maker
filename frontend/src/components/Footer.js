import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Copyright &copy; Movie Maker{new Date().getFullYear()}</p>
            </div>
        );
    }
}

export default Footer;