import GuitarAllStrings from './structs/GuitarAllStrings';
import { Scale, Note, transpose } from "tonal";
import GuitarFretzInfo from './structs/GuitarFretzInfo';
import Tuning from './Tuning';

const GuitarScale = {
  tuning: Tuning.get(),
  getNames() {
    return Scale.names();
  },
  /**
   * 
   * @param {String} noteString 
   */
  getNotesPerString(noteString) {
    let finalString = [noteString];

    for (let i = 1; i < 12; i++) {
      finalString.push(Note.enharmonic(transpose(finalString[i - 1], "2m")));
    }

    return finalString;
  },
  /**
   * 
   * @param {Array} scale 
   * @param {Array} stringNotes 
   */
  getScalePerString(scale, stringNotes) {
    let scaleString = [];

    stringNotes.forEach((value, key) => {
      if (typeof scaleString[key] === 'undefined') {
        scaleString[key] = GuitarFretzInfo.get(value, Note.enharmonic(value), key);
      }

      scale.forEach((scaleNote, scaleKey) => {
        if (value === scaleNote || value === Note.enharmonic(scaleNote)) {
          scaleString[key] = GuitarFretzInfo.get(scaleNote, Note.enharmonic(value), key, true, scaleKey + 1);
        }
      });
    });

    return scaleString;
  },
  setTuning(tuning) {
    this.tuning = tuning;
  },
  get(note, scaleName, allNeck = false, altTuning = null) {

    if (altTuning !== null) {
      this.setTuning = altTuning;
    }

    let scaleAllStrings = [];

    let numberStrings = this.tuning.numberOfStrings;
    let numberFretz;

    this.tuning.getTuning().forEach((noteString, val) => {
      let notesPerSting = this.getNotesPerString(noteString);

      if (allNeck) {
        notesPerSting = notesPerSting.concat(notesPerSting);
      }

      numberFretz = notesPerSting.length;

      scaleAllStrings[numberStrings - val] = this.getScalePerString(Scale.notes(note, scaleName), notesPerSting);
    });

    return new GuitarAllStrings(scaleAllStrings, this.tuning.getTuning(), numberFretz);
  }
}

export default GuitarScale;