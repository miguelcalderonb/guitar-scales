import {GuitarScale, Tuning, PrintConsoleLog, PrintSegments, PrintHtml} from 'index';

test('Test', () => {
  let consolePrint = new PrintConsoleLog();
  let printHtml = new PrintHtml();

  let scale = GuitarScale.get("G", "ionian", true, Tuning.setTuning(["E", "D", "D", "G"]));

  let configTemplate = {
    charLineSeparator: '_',
    charBetweenNotes: '.',
    charEmptyNote: 'Y',
    charStartFretz: '/',
    titleFretz: 'Trastes',
    numberSpaceAfterTitle: 3,
  }
  let printSegments = new PrintSegments(configTemplate);
  let idContainer = 'body';
  
  console.log(printHtml.print(scale, printSegments));

});