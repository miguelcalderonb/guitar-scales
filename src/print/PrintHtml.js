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
  print(GuitarAllStrings, PrintSegments = null, idContainer = null) {
    
    let printSegments = PrintSegments;

    if (printSegments === null) {
      printSegments = new PrintSegmentsObj(this.spaceBetweenNotes, this.spaceBeforeStart, this.lineCount, this.lineSeparator);
    }

    let infoPrint = super.getPrintInfo(GuitarAllStrings, printSegments);

    let infoHtml = '<div className="guitar-scale-print">';
    infoPrint.forEach((line, numberLine) => {
      let className = 'guitar-scale-print-html-string';

      if (numberLine === 0) {
        className = 'guitar-scale-print-html-first-line'
      } else if (numberLine === 1) {
        className = 'guitar-scale-print-html-separator'
      }
      infoHtml += '<div class="'+className+'">'+line+'</div>'
    });

    infoHtml += '</div>'

    if (idContainer !== null) {
      document.getElementById(idContainer).insertAdjacentHTML('beforeend', infoHtml);
    }
    return infoHtml;
  }
}

export default PrintHtml;