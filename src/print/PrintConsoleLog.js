import Print from './Print';
import PrintSegmentsObj from './../structs/PrintSegments';

class PrintConsoleLog extends Print {
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
  print(GuitarAllStrings, PrintSegments = null) {
    
    let printSegments = PrintSegments;

    if (printSegments === null) {
      printSegments = new PrintSegmentsObj(this.configTemplate);
    }

    let infoPrint = super.getPrintInfo(GuitarAllStrings, printSegments);

    infoPrint.forEach((line) => {
      console.log(line);
    });
  }
}

export default PrintConsoleLog;