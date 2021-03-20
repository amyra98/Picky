function generate_excuse() {
  const adverbs = [
    "Well, here I am. What are your other two wishes?",
    "My name's Microsft. Can I crash at your place tonight?",
    "If I could rearrange the alphabet, I’d put ‘U’ and ‘I’ together.",
    "Do you have 11 protons because you're sodium fine",
    "Do you watch star wars? Cause baby yoda one",
    "You girl,be my derivative so that I can lie tangent to your curves",
    "There is something wrong with my cell phone. It doesn't have your number in it.",
    "Do you know CPR? Because you are taking my breath away!",
    "I never believed in love at first sight, but that was before I saw you.",
    "What time do you have to be back in heaven?",
  ];

 
  const sentences = [
    ` ${get_random_array_element(adverbs)} `
  ];
  const excuse_output = document.getElementById("excuse_output");
  excuse_output.innerHTML = `${get_random_array_element(sentences)}`;
  excuse_output.classList.remove("hidden");
}

function get_random_array_element(array) {
  return array[Math.floor(Math.random() * array.length)];
}
