import React, {Component} from "react"

class Application extends Component{
    constructor() {
        super()
        this.state = {

        }
    }


static getDerivedStateFromProps (props, state) {
 // return the new, updated state based upon the props
 // When your component needs to take props from the parent and set its own unique state    
}

getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
}


// componentDidMount() {
//     // GET the data I need to correctly display
//     // Used for API cals
// }

componentWillReceiveProps(nextProps) {
if (nextProps.whatever !== this.props.whaterver) {
    // do something here
    }
}

shouldComponentUpdate(nextProps, nextState) {
    // return true if we want it to update
    // return false if we do not want it to update
}

componentWillUnmount() {
    // remove event listener
    // teardown or cleanup your code before your component disappears

}

    render() {
        return(
            <div>
                Code goes here
            </div>
        )

    }


}

export default Application