import React, { Component } from 'react';

export default class PlaylistContainer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      playlistNameInput: '',
      playlistNameSubmit: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit (event) {
    // const value = event.target.value;
    // this.setState({
    //   playlistNameSubmit: value
    // });
    // event.preventDefault();
    console.log('new playlist name', event.target.value);
  }

  handleSubmit (event) {
    // const value = event.target.value;
    // this.setState({
    //   playlistNameInput: value
    // });
    console.log('new text in field', value);
  }

  render () {
    const playlistNameInput = this.state.playlistNameInput;

    return(
      <div>
        <NewPlaylist
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )}

}
