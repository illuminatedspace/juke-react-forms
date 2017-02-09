import React from 'react';
import { Link } from 'react-router';

const NewPlaylist = (props) => {

  return(
    <div className="well">
      <form
        className="form-horizontal"
        onSubmit={props.handleSubmit}
        onChange={props.handleChange}
      >
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">New Playlist Name</label>
            <div className="col-xs-10">
              <input
                className="form-control"
                type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

  )}

export default NewPlaylist;