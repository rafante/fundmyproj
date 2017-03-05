import React from 'react';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Panel} from 'react-bootstrap';
import AppHeader from '../components/header.jsx';

class App extends React.Component {
   render() {
      return (
          <div>
            <AppHeader />
            <Grid fluid={true}>
                <Row>
                    <Col xs={3} >
                        <Panel>
                            Basic panel example
                        </Panel>
                    </Col>
                    <Col xs={3} >
                        <Panel>
                            Basic panel example
                        </Panel>
                    </Col>
                    <Col xs={3} >
                        <Panel>
                            Basic panel example
                        </Panel>
                    </Col>
                    <Col xs={3} >
                        <Panel>
                            Basic panel example
                        </Panel>
                    </Col>
                </Row>
            </Grid>
          </div>
      );
   }
}

export default App;