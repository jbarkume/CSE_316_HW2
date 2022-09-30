import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {currentList, editSongCallback, hideEditSongModalCallback} = this.props;
        console.log(currentList);
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                <form>
                                    <label for="title">Title:</label>
                                    <input type="text" id="title-modal-input" name="title" style={{marginLeft: "auto"}}></input>
                                    <br></br>
                                    <label for="artist">Artist: </label>
                                    <input type="text" name="artist" id="artist-modal-input" style={{marginLeft: "auto"}}></input>
                                    <br></br>
                                    <label for="youTubeId">You Tube Id:</label>
                                    <input type="text" name="youTubeId" id="youTubeId-modal-input" style={{marginLeft: "auto"}}></input>
                                </form>
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={editSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}