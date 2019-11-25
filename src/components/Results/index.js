import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Results extends React.Component {
    
    render(){

<<<<<<< HEAD
        console.log(this.props)

        const { results } = this.props
=======
        const { suggestions } = this.props
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655

        return(
            <Page
                results = {results}
                goTo={
                    (path) => {
                        this.props.history.push(path)
                    }}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return{
        results: state.results
    }
}


export default withRouter( connect(mapStateToProps)(Results) )