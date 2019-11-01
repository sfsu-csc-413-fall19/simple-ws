import React from 'react'; // step 1

// Step 2 make a function, name it the same as the file, camelcase
const MyComponent = ({ text = "default value" }) => { // IMPORTANT props are READ ONLY
  // Step 4 return some jsx
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};

// Step 3 export
export default MyComponent;
