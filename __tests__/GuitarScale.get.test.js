import { GuitarScale, Tuning } from 'index';

test('Get Correct structure', () => {
  let scaleInfo = GuitarScale.get("G", "ionian");

  expect(scaleInfo).toHaveProperty('info');
  expect(scaleInfo).toHaveProperty('tuning');
  expect(scaleInfo).toHaveProperty('fretzNumber');

  scaleInfo.info[1].forEach((gtrFretzInfo) => {
    expect(gtrFretzInfo).toHaveProperty('note')
    expect(gtrFretzInfo).toHaveProperty('noteEnharmonic')
    expect(gtrFretzInfo).toHaveProperty('freet')
    expect(gtrFretzInfo).toHaveProperty('isPartOfScale')
    expect(gtrFretzInfo).toHaveProperty('scalePosition')
  })
});

test('Get with different tuning', () => {
  let customTuning = ["E", "D", "D", "G"]
  let scaleInfo = GuitarScale.get("G", "ionian", false, Tuning.setTuning(customTuning));

  expect(scaleInfo).toHaveProperty('info');
  expect(scaleInfo).toHaveProperty('tuning');
  expect(scaleInfo).toHaveProperty('fretzNumber');
  expect(scaleInfo.tuning).toEqual(customTuning)
  
  let customTuningFromResult = []
  
  for (let count =1; count <= customTuning.length; count++) {
    customTuningFromResult.push(scaleInfo.info[count][0].note);
  }

  expect(customTuningFromResult).toEqual(customTuning.reverse())
});

test('Get all neck notes', () => {
  let scaleInfo = GuitarScale.get("G", "ionian", true);

  expect(scaleInfo.fretzNumber).toEqual(24)

  expect(scaleInfo.info[1].length).toEqual(24)
});

test('Get the notes for the middle of the neck', () => {
  let scaleInfo = GuitarScale.get("G", "ionian", false);

  expect(scaleInfo.fretzNumber).toEqual(12)

  expect(scaleInfo.info[1].length).toEqual(12)
});