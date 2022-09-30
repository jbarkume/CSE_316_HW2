import React, { Component } from 'react';

export default class DeleteSongModal extends Component {
    render() {
        const {songIndex, currentList, deleteSongCallback, hideDeleteSongModalCallback } = this.props;
        let name = "";
        if (currentList !== null && songIndex >= 0) {
            name = currentList["songs"][songIndex]["title"];
        }
        return (
            <div 
                className="modal" 
                id="delete-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-delete-song-root'>
                        <div className="modal-north">
                            Delete Song?
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                Are you sure you wish to permanently delete {name} from the playlist?
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="delete-song-confirm-button" 
                                className="modal-button" 
                                onClick={deleteSongCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="delete-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideDeleteSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}