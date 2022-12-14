import React from "react";

export default class SongCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDragging: false,
            draggedTo: false
        }
    }
    handleDragStart = (event) => {
        event.dataTransfer.setData("song", event.target.id);
        this.setState(prevState => ({
            isDragging: true,
            draggedTo: prevState.draggedTo
        }));
    }
    handleDragOver = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragEnter = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: true
        }));
    }
    handleDragLeave = (event) => {
        event.preventDefault();
        this.setState(prevState => ({
            isDragging: prevState.isDragging,
            draggedTo: false
        }));
    }
    handleDrop = (event) => {
        event.preventDefault();
        let target = event.target;
        let targetId = target.id;
        targetId = targetId.substring(target.id.indexOf("-") + 1);
        let sourceId = event.dataTransfer.getData("song");
        sourceId = sourceId.substring(sourceId.indexOf("-") + 1);
        
        this.setState(prevState => ({
            isDragging: false,
            draggedTo: false
        }));

        // ASK THE MODEL TO MOVE THE DATA
        this.props.moveCallback(sourceId, targetId);
    }

    getItemNum = () => {
        return this.props.id.substring("playlist-song-".length);
    }

    onDeleteClick = (event) => {
        event.preventDefault();
        let index = this.getItemNum() - 1;
        this.props.deleteSongCallback(index);
    }

    handleDoubleClick = (event) => {
        event.preventDefault();
        let index = this.getItemNum() - 1;
        this.props.editSongCallback(index);
    }

    render() {
        const { song } = this.props;
        let num = this.getItemNum();
        let itemClass = ["playlister-song", "unselected-list-card", "selected-list-card"];
        if (this.state.draggedTo) {
            itemClass = ["playlister-song-dragged-to", "unselected-list-card", "selected-list-card"];
        }
        return (
            <div
                id={'song-' + num}
                className={itemClass.join(" ")}
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDragEnter={this.handleDragEnter}
                onDragLeave={this.handleDragLeave}
                onDrop={this.handleDrop}
                onDoubleClick={this.handleDoubleClick}
                draggable="true"
            >
                {num}. 
                <a
                    href={"https://www.youtube.com/watch?v=" + song.youTubeId}
                >
                    {song.title} by {song.artist}
                </a>
                <input
                    type={"button"}
                    id={"delete-song-" + num}
                    value={"\u2715"}
                    style={{marginLeft: "auto"}}
                    onClick={this.onDeleteClick}
                >

                </input>
            </div>
        )
    }
}