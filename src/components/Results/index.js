import React from 'react'
import Page from './page'
import { connect } from 'react-redux'

class Results extends React.Component {
    
    render(){

        const { suggestions } = this.props

        return(
            <Page
                suggestions = {suggestions}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return{
        suggestions: state.suggestions
    }
} 

export default connect(mapStateToProps)(Results)