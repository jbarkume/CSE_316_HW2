import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, song) {
        super();
        this.app = initApp;
        this.song = song;
        this.index = this.app.songIndex;
    }

    doTransaction() {
        this.app.editSong();
    }
    
    undoTransaction() {
        this.app.changeSong(this.index, this.song);
    }
}