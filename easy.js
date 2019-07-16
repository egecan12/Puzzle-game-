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

const boxes = [...document.querySelectorAll('[class^="box"]')];



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

    for (i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", this.slide3);
    }

    // show puzzle pieces
    this.display();
  },
  display: function () {
    // initialize pieces to their proper order

    TweenMax.set(puzzlePieces, {
      x: 0,
      y: 0

    });
  },


  /// SLIDE FUNCTIONs for 4 different  movement POSITION 


  //that goes to the right side
  slide: function () {
    TweenMax.to(this, 1, {
      x: 100,
      y: 0
    });

  },


  //that goes to the left side
  slide2: function () {

    TweenMax.to(this, 1, {
      x: -100,
      y: 0
    });

  },


  //that goes to the down side
  slide3: function () {

    TweenMax.to(this, 1, {
      x: 0,
      y: 100
      
    });
    
    updatePosition(puzzlePieces.x, puzzlePieces + 100);


  },

  //that goes to the up side

  slide4: function () {
    TweenMax.to(this, 1, {
      x: 0,
      y: -100
    });

    updatePosition(this.object1.x, this.object1.y );

  },


  isMoveable: function () {

    if ((blankSpace.x === this.x) && (blankSpace.y === this.y)) {

      return console.log("this is working");
    } else {
      false
    }


  }
};

function updatePosition(x,y) {
  object1.x=x
  Object1.y=y +100
}

puzzle.initialize();

/* 
STEP 5 - Comment each function implemented
STEP 6 - Submit to github
STEP 7 - host on web server
*/