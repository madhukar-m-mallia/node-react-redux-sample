import React from 'react';
import { connect } from 'react-redux';
import { getImages } from '../action-creators';
import { Row, Col, Container } from 'reactstrap';

import CardContainer from './CardContainer';
 
export class Home extends React.Component {
 
    componentWillMount() {
        this.props.getImages();
    }
    render() {
        var listItems = this.props.cinemaList.map(function(item) {
            return (
                <Col className="column-modified" xs={4} key={item.getIn(['_id'])}>
                    <CardContainer cinemaName={item}></CardContainer>
                </Col>
            );
        });

        return (
            <Container>
                <Row>
                    {listItems}
                </Row>
            </Container>
        );
    }
}
 
function mapStateToProps(state) {
  return {
    totalContentItems: state.get('totalContentItems'),
    pageNumRequested: state.get('pageNumRequested'),
    pageSizeRequested: state.get('pageSizeRequested'),
    pageSizeReturned: state.get('pageSizeReturned'),
    cinemaList: state.get('cinemaList'),
    isLoading: state.getIn(['view', 'isLoading'])
  };
}
 
function mapDispatchToProps(dispatch) {
    return {
        getImages: () => dispatch(getImages())
    }
}
 
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);