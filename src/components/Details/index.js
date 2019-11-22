import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import findCurrentItem from '../../redux/actions/findCurrentItem'

class Details extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.findCurrentItem(parseInt(this.props.match.params.idItem))
    }
    
    render(){

        console.log(this.props)

        const { currentItem } = this.props

        return(
            <Page
                currentItem = {currentItem}
                goTo={
                    (path) => {
                        this.props.history.push(path)
                    }}
            />
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        currentItem: state.currentItem
    }
}

const mapDispatchToProps = {
    findCurrentItem
}


export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Details) )