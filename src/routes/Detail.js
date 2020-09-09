import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <h2><span style={{ padding:"20%", margin:"20%" }}>{location.state.title}</span></h2>
        } else {
            return null;
        }
    }
}

export default Detail;