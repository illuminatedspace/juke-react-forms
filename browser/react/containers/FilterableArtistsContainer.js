import React, { Component } from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import Artist from '../components/Artist';

export default class FilterableArtistsContainer extends Component {

  constructor (props) {
    super(props);

    this.state = {
      artistInput: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    var value = event.target.value;
    this.setState({
      artistInput: value
    });
  }

  render () {
    const artistInput = this.state.artistInput;
    const filteredArtists = this.props.artists.filter(artist => {
      return artist.name.match(artistInput)
    });
    return (
      <div>
        <FilterInput handleChange={this.handleChange}/>
        <Artists artists={ filteredArtists } />
      </div>
    )}

}
