function ClozeCard(text, clozeDeletion) {

  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, clozeDeletion);
  }

  var clozePostions = clozeDelete(text, clozeDeletion);

  this.partial = getPartial(text, clozePostions);

  this.cloze = text.slice(clozePostions[0], clozePostions[1]);
