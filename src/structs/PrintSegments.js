/**
 * @memberof Structs
 * 
 * @class PrintSegments
 */
class PrintSegments {
  constructor(configTemplate) {
    this.charLineSeparator = configTemplate.charLineSeparator;
    this.charBetweenNotes = configTemplate.charBetweenNotes;
    this.charEmptyNote = configTemplate.charEmptyNote; 
    this.charStartFretz = configTemplate.charStartFretz;
    this.titleFretz = configTemplate.titleFretz;
    this.numberSpaceAfterTitle = configTemplate.numberSpaceAfterTitle;
    this.lineSeparatorTitleLength;
    this.lineSeparatorLength;
  }
  
}

export default PrintSegments;