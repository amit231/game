

  if (result !== "YOU LOSE") {
    console.log('you are not a winner')
    if (result === "YOU WIN") {
      console.log("in win block");
      setSelectedClass("seleq`ctedDiv animateSelected aura");
      setShuffleClass("shuffleDiv animateShuffle");
      setSel(images[currContext.passedIndex + 5]);
    } else {
      console.log("in draw");
      setShuffleClass("shuffleDiv animateShuffle");
      setSelectedClass("selectedDiv animateSelected");
    }
  }