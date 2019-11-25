import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Autocomplete from '../Autocomplete'

const Page = (props) => {

    console.log(props)
<<<<<<< HEAD
    const { text, onChangeSelection, onChangeText, suggestions } = props
=======
    const { text, onChangeSeleccion, onChangeText, suggestions } = props
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655

    return(
        <AppBar position="static">
            <Toolbar className="appbar">
                <Typography variant="h6" color="inherit">
                    Búsqueda
                </Typography>

                <Autocomplete
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
<<<<<<< HEAD
                    onChangeSelection={onChangeSelection}
=======
                    onChangeSeleccion={onChangeSeleccion}
>>>>>>> 436c310f2c4de585124af5b1a9045b1f7e624655
                />

                <AccountCircle />
            </Toolbar>
        </AppBar>
    )
}

export default Page