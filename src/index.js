import { Scale, Note, transpose } from "tonal";
import Tuning from './Tuning';
import _ from 'lodash';

class GuitarAllStrings {
  constructor(info, tuning, fretzNumber) {
    this.info = info;
    this.tuning = tuning;
    this.fretzNumber = fretzNumber;
  }
}

class PrintScale {
  static print(GuitarAllStrings) {
    let spaceBetweenNotes = ' ';
    let spaceBeforeStart = '      |' 
    let lineCount = 'Fretz   ';
    let lineSeparator = "         ";

    for (let i=0; i<GuitarAllStrings.fretzNumber; i++) {
      lineCount += spaceBetweenNotes+i+spaceBetweenNotes;
      lineSeparator += '---';

      if (i > 9) {
        lineSeparator += '-';
      }
    }
    console.log(lineCount);
    console.log(lineSeparator);

    GuitarAllStrings.info.forEach((stringInfo, numberString) => {
      let stringPrintInfo = stringInfo[0].note+spaceBeforeStart;  
    
      stringInfo.forEach((fretzInfo) => {
        let separatorFretzNumber = '';
        
        if (fretzInfo.freet > 9) {
          separatorFretzNumber = ' ';
        }

        if (fretzInfo.isPartOfScale) {
          
          stringPrintInfo += spaceBetweenNotes+fretzInfo.scalePosition+separatorFretzNumber+spaceBetweenNotes;
        } else {
          stringPrintInfo += spaceBetweenNotes+"."+separatorFretzNumber+spaceBetweenNotes;
        }
      });

      console.log(stringPrintInfo);
    });
  }
}

let GuitarScale = {
  tuning: ["E", "A", "D", "G", "B", "E"],
  scaleNames() {
    return Scale.names();
  },
  getNotesPerString(noteString) {
    let finalString = [noteString];

    for (let i = 1; i < 12; i++) {
      finalString.push(Note.enharmonic(transpose(finalString[i - 1], "2m")));
    }

    return finalString;
  },
  getScalePerString(scale, stringNotes) {
    let scaleString = [];

    stringNotes.forEach((value, key) => {
      if (typeof scaleString[key] === 'undefined') {
        scaleString[key] = { note: value, noteEnharmonic: Note.enharmonic(value), freet: key, isPartOfScale: false, scalePosition: null };
      }

      scale.forEach((scaleNote, scaleKey) => {
        if (value === scaleNote || value === Note.enharmonic(scaleNote)) {
          scaleString[key] = { note: scaleNote, noteEnharmonic: Note.enharmonic(value), freet: key, isPartOfScale: true, scalePosition: scaleKey + 1, }
        }
      });
    });

    return scaleString;
  },
  getTuning() {
    return this.tuning;
  },
  setTuning(tuning) {
    this.tuning = tuning;
  },
  get(note, scaleName, allNeck = false) {
    let scaleAllStrings = [];

    let numberStrings = this.tuning.length;
    let numberFretz;

    this.tuning.forEach((noteString, val) => {
      let notesPerSting = this.getNotesPerString(noteString);

      if (allNeck) {
        notesPerSting = notesPerSting.concat(notesPerSting);
      }
      
      numberFretz = notesPerSting.length;

      scaleAllStrings[numberStrings-val] = this.getScalePerString(Scale.notes(note, scaleName), notesPerSting);
    });

    return new GuitarAllStrings(scaleAllStrings, this.tuning, numberFretz);
  }
}

// let x = GuitarScale.get("G", "ionian", true);
// PrintScale.print(x);
//export { default as Tuning } from './Tuning';

//export default GuitarScale;
export {GuitarScale, Tuning, PrintScale};