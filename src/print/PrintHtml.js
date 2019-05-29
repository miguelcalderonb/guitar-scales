import Print from './Print';
import PrintSegmentsObj from './../structs/PrintSegments';

class PrintHtml extends Print {
  constructor() {
    super();
    this.configTemplate = {
      charLineSeparator: '-',
      charBetweenNotes: ' ',
      charEmptyNote: 'X',
      charStartFretz: '|',
      titleFretz: 'Fretz',
      numberSpaceAfterTitle: 10,
    }
  }
  print(GuitarAllStrings, refDivHtml, PrintSegments = null) {
    
    let printSegments = PrintSegments;

    if (printSegments === null) {
      printSegments = new PrintSegmentsObj(this.spaceBetweenNotes, this.spaceBeforeStart, this.lineCount, this.lineSeparator);
    }

    let infoPrint = super.getPrintInfo(GuitarAllStrings, printSegments);

    infoPrint.forEach((line) => {
      console.log(line);
    });
  }
}

export default PrintConsoleLog;