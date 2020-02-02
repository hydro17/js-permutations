function makePermutations(elements, partialPerm, collection) {
  if (elements.length === 0) {
    collection.push(partialPerm);
    return;
  }

  for (let i = 0; i < elements.length; i++) {
    let elementsWithoutOneElem = [...elements];
    elementsWithoutOneElem.splice(i, 1);
    makePermutations(elementsWithoutOneElem, [...partialPerm, elements[i]], collection);
  }
}

const coll = [];

makePermutations("123".split(""), [], coll);

console.log(coll);
console.log(coll.map((permArr) => permArr.join("")));
