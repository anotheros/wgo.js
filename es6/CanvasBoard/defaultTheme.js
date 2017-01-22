import * as drawHandlers from "./drawHandlers";
import coordinates from "./drawHandlers/coordinates";

/** 
 * Object containing default graphical properties of a board.
 * A value of all properties can be even static value or function, returning final value.
 * Theme object doesn't set board and stone textures - they are set separately.
 */ 

export default {
    // stones
    stoneHandler: drawHandlers.shellStone,
    stoneSize: function(board) {
        const fieldSize = Math.min(board.fieldWidth, board.fieldHeight);
        return 8/17*fieldSize;
    },

    // shadow
    shadowColor: "rgba(62,32,32,0.5)",
    shadowTransparentColor: "rgba(62,32,32,0)",
    shadowBlur: function(board){
        return board.stoneRadius*0.1;
    },
    shadowSize: 1,

    // markup
    markupBlackColor: "rgba(255,255,255,0.9)",
    markupWhiteColor: "rgba(0,0,0,0.7)",
    markupNoneColor: "rgba(0,0,0,0.7)",
    markupLinesWidth: function(board) {
        return board.stoneRadius/7.5;
    },
    markupHandlers: {
        CR: drawHandlers.circle,
        LB: drawHandlers.label,
        SQ: drawHandlers.square,
        TR: drawHandlers.triangle,
        MA: drawHandlers.xMark,
        SL: drawHandlers.dot,
        SM: drawHandlers.smileyFace,
    },

    // grid & star points
    gridLinesWidth: function(board) {
        return board.stoneRadius/15;
    },
    gridLinesColor: "#654525",
    starColor: "#531",
    starSize: function(board) {
        return (board.stoneRadius/8)+1;
    },
    
    // coordinates
    coordinatesHandler: coordinates,
    coordinatesColor: "#531",
    coordinatesX: "ABCDEFGHJKLMNOPQRST",
    coordinatesY: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],

    // other
    variationColor: "rgba(0,32,128,0.8)",
    font: "calibri",
    linesShift: -0.25,
}
