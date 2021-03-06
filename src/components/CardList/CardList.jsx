import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./CardList.css";
import { Card } from "../Card/Card";

export class CardList extends Component {
    render() {
        return (
            <ul className="c-card-list">
                {this.props.listItems.map(function(listItem) {
                    return (
                        <Card
                            theme={listItem.theme}
                            title={listItem.title}
                            description={listItem.description}
                        />
                    );
                })}
            </ul>
        );
    }
}

CardList.defaultProps = {
	listItems: PropTypes.array
}
