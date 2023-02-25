import React, { Component } from 'react';
import { StyledDeleteButton } from './ContactListElement.styled';
import PropTypes from 'prop-types';

export class ContactListElement extends Component {
  render() {
    const { name, number, onDeleteContact } = this.props;
    return (
      <li>
        <span id="name">{name}</span>: {number}
        <StyledDeleteButton onClick={onDeleteContact} type="button">
          Delete
        </StyledDeleteButton>
      </li>
    );
  }
}

ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};
