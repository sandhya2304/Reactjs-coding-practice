import React, { useState } from 'react';

function App() {
  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) => {
   return item.toLowerCase().includes(searchText.toLowerCase());
  });

  return <div>
     <h1> Search Filter  </h1>
      
      <input
        type= "text"
        placeholder = "Seacrh Fiter ..."
        value = {searchText}
        onChange = {(e) => setSearchText(e.target.value)}
        style = {{padding : "8px" , marginBottom : "20px" ,width : "200px"}}
      />

      <ul style = {{listStyle : "none" , padding: 0}}>
          {
              filteredItems.length > 0 ? (
                  filteredItems.map((item , index) => <li key={index}> 
                     {item}
                  </li>)
              ): (
                <p> No Resute found </p>
              )
          }


      </ul>  

  </div>;
}
export default App;
