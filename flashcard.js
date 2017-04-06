var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;

  this.FrontOrBack = function() {
    if (this.front === "start") {
      console.log("Who was the first president of the United States!");
    }
    else {
      console.log("You must type start to begin.");
    }
  };
};

var ClozeCard = function(front, back) {
  this.text = text;
  this.cloze = cloze;
  };
};
