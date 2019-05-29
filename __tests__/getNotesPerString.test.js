import {GuitarScale, Tuning, PrintConsoleLog} from 'index';

test('Test', () => {
  let consolePrint = new PrintConsoleLog();

  let scale = GuitarScale.get("G", "ionian", true, Tuning.setTuning(["E", "D", "D", "G"]));
  consolePrint.print(scale);
});