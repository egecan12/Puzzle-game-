// distance: number of pixels a puzzle piece will move
const DISTANCE = 100;
/**********************************
// STEP 1 - Create puzzlePieces data structure.
// I suggest using an array of objects but feel free to change that
// An example of a puzzle piece object could be: { name: ".box1", x: 0, y: 0 }
**********************************/
const Object1 = {
  name: ".box1",
  x: 0,
  y: 0
};
const Object2 = {
  name: ".box2",
  x: 0,
  y: 0
};
const Object3 = {
  name: ".box3",
  x: 0,
  y: 0
};
const Object4 = {
  name: ".box4",
  x: 0,
  y: 0
};
const Object5 = {
  name: ".box5",
  x: 0,
  y: 0
};
const Object6 = {
  name: ".box6",
  x: 0,
  y: 0
};
const Object7 = {
  name: ".box7",
  x: 0,
  y: 0
};
const Object8 = {
  name: ".box8",
  x: 0,
  y: 0
};
const Object9 = {
  name: ".box9",
  x: 0,
  y: 0
};
const Object10 = {
  name: ".box10",
  x: 0,
  y: 0
};
const Object11 = {
  name: ".box11",
  x: 0,
  y: 0
};
const Object12 = {
  name: ".box12",
  x: 0,
  y: 0
};
const Object13 = {
  name: ".box13",
  x: 0,
  y: 0
};
const Object14 = {
  name: ".box14",
  x: 0,
  y: 0
};
const Object15 = {
  name: ".box15",
  x: 0,
  y: 0
};



// blankSpace: initialize blank square as last piece so as to remember where it is.
// Will eventually use it to ask direction of clicked puzzle piece(s).
// Once pieces move, must remember to update x,y values to new blank space coords
const blankSpace = {
  name: "blankspace",
  x: 300,
  y: 300,
  order: 16
};


const puzzlePieces = [Object1, Object2, Object3, Object4, Object5, Object6, Object7, Object8, Object9, Object10, Object11, Object12, Object13, Object14, Object15, blankSpace];

// I'm structuring my program sort of like how Vue does it - all in my puzzle object below.
const puzzle = {
  pieces: puzzlePieces,
  distance: DISTANCE,
  blankSpace,
  currentPiece: null,
  directionToMove: "",
  initialize: function () {
    /************************************     
    // STEP 2 - Implement initialize function such that it
    // attache click event handlers for each piece
    // and within that, invokes the slide function
    ***************************************/

    function initialize() {
      puzzlePieces.map(function (puzzlePiece) {
        puzzlePiece.addEventListener('click', slide);
  
      })
    }
    




    // show puzzle pieces
    this.display();
  },
  display: function () {
    // initialize pieces to their proper order
    this.pieces.forEach(piece => {
      const pieceDOM = document.querySelector(piece.name);
      TweenLite.set(pieceDOM, {
        x: piece.x,
        y: piece.y
      });
    });
  },
  slide: function () {
    // call isMoveable to find out direction to move
    // remember to adjust coordinates including adjusting blank piece's coordinates
    /************************************
    // STEP 4 - Implement slide function so that you set x,y coordinates of appropriate puzzle piece(s)
    *********************************/

    // Now animate current puzzle piece now that x, y coordinates have been set above
    TweenMax.to(this.currentPiece, 0.17, {
      x: this.pieces[this.currentPiece.dataset.idx].x,
      y: this.pieces[this.currentPiece.dataset.idx].y,
      ease: Power0.easeNone
    });
  },
  isMoveable: function () {
    /********************************************
    // STEP 3 - Implement isMoveable function to find out / return which direction to move
    // Is the clicked piece movable?
    // If yes, then return a direction to one of: "up", "down", "left", "right"
    // If no, then return a direction of ""
     ******************************************/
    if( (blankSpace.x === this.pieces.x + this.distance)&&(blankSpace.y=== this.pieces.y+this.distance)) {

      return true
    } else {
      false
    }


  }
};

puzzle.initialize();

/* 
STEP 5 - Comment each function implemented
STEP 6 - Submit to github
STEP 7 - host on web server
*/