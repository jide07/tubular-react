import ColumnModelList from '../../srcdocs/components/ColumnModelTable';
import DocumentationList from '../../srcdocs/components/DocumentationList';
import MetaData from '../../srcdocs/components/MetaData';
import NavigationBar from '../../srcdocs/components/NavigationBar';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    container: {
        padding: 30,
    },
    paper: {
        padding: 10,
    }
};

const ColumnModel = (props) => {
    const { classes } = props;
    return (
        <div>
            <MetaData />
            <NavigationBar />
            <Grid container spacing={24} className={classes.container}>
                <Grid item xs={2}>
                    <DocumentationList />
                </Grid>
                <Grid item xs={10}>
                    <Paper className={classes.paper}>
                    <Typography variant="display1" paragraph> Column Model </Typography>
                    <Divider />
                        <ColumnModelList />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

ColumnModel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColumnModel);