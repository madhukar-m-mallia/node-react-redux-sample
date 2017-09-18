import React from 'react';
import { connect } from 'react-redux';
import { getImages } from '../action-creators';
import { Row, Col, Container } from 'reactstrap';
import InfiniteScroll from 'redux-infinite-scroll';
import _ from 'lodash'; 

import CardContainer from './CardContainer';
 
import { Map, List } from 'immutable';
export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.initialCount = 20;
        this.initialPageCount = 1;
    }
 
    componentWillMount() {
        this.props.getImages(this.initialPageCount, this.initialCount);
    }

    _loadMore() {
        console.log('load-more-called', this.initialPageCount, this.props.totalContentItems);
        if (this._hasMore(this.props.cinemaList.size, parseInt(this.props.totalContentItems))) {
            this.props.getImages(++this.initialPageCount, this.initialCount )
        }
    }

    _renderMessages() {
        return this.props.cinemaList.map(function(cinema) {
                return (
                    <Col className="column-modified" xs={4} key={cinema['_id']}>
                        <CardContainer cinemaName={cinema}></CardContainer>
                    </Col>
                );
            }).toArray();
    }

    _hasMore(currentListLength, totalCount) {
        return (totalCount > currentListLength)
    }

    render() {
        if (!this.props.cinemaList.size) {
            return <div>EMPTY</div>
        } else {
            console.log("called");
            return (
                <Container>
                    <Row>
                        <InfiniteScroll
                        loadMore={this._loadMore.bind(this)}
                        hasMore={this._hasMore(this.props.cinemaList.size, parseInt(this.props.totalContentItems))}>
                    {this._renderMessages()}
                    </InfiniteScroll>
                    </Row>
                </Container>
            );
        }
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
        getImages: (pageNumber, countToDisplay) => dispatch(getImages(pageNumber, countToDisplay))
    }
}
 
export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);