//import {GuitarScale} from 'index';
import {Tuning} from 'index';

test('Test', () => {
  //let x = GuitarScale.get("G", "ionian", true);
  Tuning.setTuning(["E", "A", "D", "G"]);
  console.log(Tuning);
});