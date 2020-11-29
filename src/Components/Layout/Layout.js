import React from 'react'
import classes from './Layout.module.css'
import axios from 'axios'

class Layout extends React.Component {

    state = {
        data: ''
    }

    async componentDidMount() {
        const data = await axios.get('http://localhost:5000/', {
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Content-Type': 'application/json'
        })
        this.setState({ data: data.data })
    }

    render() {
        let timeZones = 'Loading...'
        if (this.state.data) {
            timeZones = this.state.data.map((object, i) => {
                return (<div
                    key={i}>
                    <p>{object.timeStamp}</p>
                    <p>{object.timeZones.delhi}</p>
                    <p>{object.timeZones.london}</p>
                    <p>{object.timeZones.newyork}</p>
                </div>)

            })
        }
        return (
            <div className={classes.wrapper}>
                <div className={classes.head}>
                    <h3>TimeStamp</h3>
                    <h3>New Delhi</h3>
                    <h3>London</h3>
                    <h3>New York</h3>
                </div>
                <div className={classes.data}>
                    {timeZones}
                </div>
            </div>
        )
    }
}

export default Layout