import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class PlaylistContainer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      playlistNameInput: '',
      buttonDisabled: true,
      inputIsInvalid: (props.inputValue.length > 16) || (props.inputValue === '')
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log('new playlist name', this.state.playlistNameInput);
    this.setState({
      playlistNameInput: ''
    })
  }

  handleChange (event) {
    const value = event.target.value;
    this.setState({
      playlistNameInput: value
    });
    console.log('new text in field', value);
  }

  render () {
    const playlistNameInput = this.state.playlistNameInput;

    return(
      <div>
        <NewPlaylist
          buttonDisabled={this.state.buttonDisabled}
          resetValue={playlistNameInput}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputIsInvalid={this.state.inputIsInvalid}
        />
      </div>
    )}

}
