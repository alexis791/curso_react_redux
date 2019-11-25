import React from 'react'
import Page from './page'
import './style.css'
import { connect } from 'react-redux'

import findSuggestions from '../../redux/actions/findSuggestions'
<<<<<<< HEAD
import findResults from '../../redux/actions/findResults'
=======
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655

class AppBar extends React.Component {

    constructor(props){
        super(props)

        this.state={
            text:''
        }

        this.onChangeText = this.onChangeText.bind(this)
        this.onChangeSelection = this.onChangeSelection.bind(this)
    }

<<<<<<< HEAD
=======
    

>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655

    onChangeText(text) {
        this.setState({ text })

<<<<<<< HEAD
        this.props.findSuggestions(text)
    }

    onChangeSelection(text){
        this.setState({ text })

        this.props.findResults(text)
=======
        // this.props.findSuggestions(text)
    }

    onChangeSelection(text){

>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655
    }
    
    render(){

        console.log(this.props)

        const { text } = this.state
        const { suggestions } = this.props

        return(
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return{
        suggestions: state.suggestions
    }
}

const mapDispatchToProps = {
<<<<<<< HEAD
        findSuggestions,
        findResults
=======
        findSuggestions
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
