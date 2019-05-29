class Print {
  constructor() {
    this.lineSeparatorTitleLength;
    this.lineSeparatorLength;
  }
  getPrintInfo(GuitarAllStrings, PrintSegments) {
    let info = [];
    let lineCount = this.getFretzLine(
      PrintSegments.numberSpaceAfterTitle,
      PrintSegments.titleFretz,
      GuitarAllStrings.fretzNumber,
      PrintSegments.charStartFretz
    );

    info.push(lineCount);

    let lineSeparator = this.getLineSeparator(PrintSegments.charLineSeparator);
    info.push(lineSeparator);

    GuitarAllStrings.info.forEach((stringInfo) => {
      info.push(this.getString(stringInfo, PrintSegments));
    });

    return info;
  }
  getFretzLine(numberSpaces, titleFretz, numberFretz, charStartFretz) {
    let line = titleFretz;

    for (let count = 0; count < numberSpaces; count++) {
      line += ' ';
    }

    line += charStartFretz;

    this.lineSeparatorTitleLength = line.length;

    for (let i = 0; i < numberFretz; i++) {
      if (i <= 10) {
        line += '  ' + i;
      } else {
        line += '   ' + i;
      }

    }

    this.lineSeparatorLength = line.length;

    return line;
  }
  getLineSeparator(charLineSeparator) {
    let line = '';

    for (let count = 0; count < this.lineSeparatorTitleLength; count++) {
      line += ' ';
    }

    for (let i = this.lineSeparatorTitleLength - 1; i < this.lineSeparatorLength; i++) {
      line += charLineSeparator;
    }

    return line;
  }
  getString(stringInfo, PrintSegments) {
    let lineBeforeStart = '';
    for (let count = 0; count < this.lineSeparatorTitleLength; count++) {
      lineBeforeStart += ' ';
    }

    let firstPartOfString = stringInfo[0].note + lineBeforeStart;

    var stringPrinfInfo = firstPartOfString.substring(0, firstPartOfString.length - 2);

    if (stringInfo[0].note.length > 1) {
      stringPrinfInfo = stringPrinfInfo.substring(0, stringPrinfInfo.length - 1);
    }

    stringPrinfInfo += PrintSegments.charStartFretz;

    stringInfo.forEach((fretzInfo) => {

      let spaceBetweenNotes;

      if (fretzInfo.freet > 10) {
        spaceBetweenNotes = PrintSegments.charBetweenNotes
        +PrintSegments.charBetweenNotes+PrintSegments.charBetweenNotes+PrintSegments.charBetweenNotes;
        
      } else {
        spaceBetweenNotes = PrintSegments.charBetweenNotes+PrintSegments.charBetweenNotes;
      }

      if (fretzInfo.isPartOfScale) {
        stringPrinfInfo += spaceBetweenNotes + fretzInfo.scalePosition;
      } else {
        stringPrinfInfo += spaceBetweenNotes + PrintSegments.charEmptyNote;
      }
    });

    return stringPrinfInfo;
  }
}

export default Print;