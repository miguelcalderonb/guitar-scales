const Print = {
  spaceBetweenNotes: ' ',
  spaceBeforeStart: '      |',
  lineCount: 'Fretz   ',
  lineSeparator: "         ",

  print(GuitarAllStrings) {
    let lineCount = 'Fretz   ';
    let lineSeparator = this.lineSeparator;

    for (let i = 0; i < GuitarAllStrings.fretzNumber; i++) {
      lineCount += this.spaceBetweenNotes + i + this.spaceBetweenNotes;
      lineSeparator += '---';

      if (i > 9) {
        lineSeparator += '-';
      }
    }
    console.log(lineCount);
    console.log(lineSeparator);

    GuitarAllStrings.info.forEach((stringInfo, numberString) => {
      let stringPrintInfo = stringInfo[0].note + this.spaceBeforeStart;

      stringInfo.forEach((fretzInfo) => {
        let separatorFretzNumber = '';

        if (fretzInfo.freet > 9) {
          separatorFretzNumber = ' ';
        }

        if (fretzInfo.isPartOfScale) {

          stringPrintInfo += this.spaceBetweenNotes + fretzInfo.scalePosition + separatorFretzNumber + this.spaceBetweenNotes;
        } else {
          stringPrintInfo += this.spaceBetweenNotes + "." + separatorFretzNumber + this.spaceBetweenNotes;
        }
      });

      console.log(stringPrintInfo);
    });
  }
}

export default Print;