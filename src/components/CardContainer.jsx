import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

import CardImage from './CardImage';
 
export default class CardContainer extends React.Component {
 
    render() {
        const cinema = this.props.cinemaName;
        return (
            <Card>
                <CardImage url={cinema.getIn(['poster-image'])}></CardImage> 
                <CardBlock className="card-block-modified">
                    <CardSubtitle className="default-card-font">{cinema.getIn(['name'])}</CardSubtitle>
                </CardBlock>
            </Card>
        );
    }
}