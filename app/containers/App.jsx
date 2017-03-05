import React from 'react';
import {Grid, DropdownButton, MenuItem} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import {PanelGroup} from 'react-bootstrap';
import {Thumbnail} from 'react-bootstrap';
import AppHeader from '../components/header.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class App extends React.Component {

    render() {

        const teste = this.props.projs.map((proj) => {
            return(
                <Row>
                    <Col xs={4} >
                        <Thumbnail src={proj.url} alt="242x200" href="#">
                            <h3>{proj.name}</h3>
                            <p>{proj.description}</p>
                            <ButtonGroup justified>
                                <Button href="#">Left</Button>
                                <Button href="#" bsStyle="success">Middle</Button>
                            </ButtonGroup>
                        </Thumbnail>
                    </Col>
                </Row>
            );
        });

        return (
            <div>
                <AppHeader />
                <Grid fluid={true}>
                        {teste}
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    projs: state.projs.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);