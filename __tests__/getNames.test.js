import {GuitarScale} from 'index';

test('Number of names', () => {
  let names = GuitarScale.getNames()
  expect(names.length).toBe(91)
});

test('Type of return value', () => {
  let names = GuitarScale.getNames()
  expect(typeof names).toBe("object")
});

test('Valid values', () => {
  let names = GuitarScale.getNames()
  let randomNumber = Math.floor((Math.random() * 91) + 1)
  
  let randomName = names[randomNumber]

  let scaleInfo = GuitarScale.get("c", randomName)
  
  expect(scaleInfo).toHaveProperty('info');
  expect(scaleInfo).toHaveProperty('tuning');
  expect(scaleInfo).toHaveProperty('fretzNumber');
});