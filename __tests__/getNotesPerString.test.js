//import {GuitarScale} from 'index';
import {GuitarScale, Tuning, Print} from 'index';

test('Test', () => {
  //let x = GuitarScale.get("G", "ionian", true);
  
  Print.print(GuitarScale.get("G", "ionian", Tuning.setTuning(["E", "D", "D", "G"])));
});