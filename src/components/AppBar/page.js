import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Autocomplete from '../Autocomplete'

const Page = () => (
    <AppBar position="static">
        <Toolbar className="appbar">
            <Typography variant="h6" color="inherit">
                Búsqueda
            </Typography>

            <Autocomplete
                text={'react'}
                suggestions={[]}
                onChangeText={(text) => {}}
                onChangeSeleccion={(text) => {}}
            />

            <AccountCircle />
        </Toolbar>
    </AppBar>
)

export default Page