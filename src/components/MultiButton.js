// import React from "react";

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={handleClick}>Button 1</button>
//       <button onClick={handleClick}>Button 2</button>
//       <button onClick={handleClick}>Button 3</button>
//     </div>
//   );
// }

// export default MultiButton;

/* When one of the buttons is clicked, we want the callback to log out the button's number. If you try clicking one of those buttons now, you'll still see the event object being logged, not the number of the button.*/

//We could try this: 

// function MultiButton() {
//   function handleClick(number) {
//     console.log(`Button ${number} was clicked`);
//   }

//   return (
//     <div>
//       <button onClick={handleClick(1)}>Button 1</button>
//       <button onClick={handleClick(2)}>Button 2</button>
//       <button onClick={handleClick(3)}>Button 3</button>
//     </div>
//   );
// }
// export default MultiButton;

/* ...but now, the console messages will appear as soon as our component is rendered, not when the button is clicked. This is why we always need to provide a function definition, not a function invocation to our event handlers.*/

// Here's the solution: 

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}
export default MultiButton;
/* By writing out an arrow function here, we're providing each of our button's onClick handlers a function definition that will only be invoked when the button is clicked. */