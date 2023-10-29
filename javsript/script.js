function transform(input) {
    const vowels = 'aeiouAEIOU';
    const inputArray = input.split('');
    const transformedArray = [];
  
    for (let i = 0; i < inputArray.length; i++) {
      const currentChar = inputArray[i];
      transformedArray.push(currentChar);
  
      if (vowels.includes(currentChar)) {
        transformedArray.push('p');
        transformedArray.push(currentChar);
      }
    }
  
    const transformedString = transformedArray.join('');
    console.log(transformedString);
    return transformedString;
  }