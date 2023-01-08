import './App.css';
function App() {
  return (
    <div className="container">
      <h1>Add Inventory Items</h1>
      <input className="brand-name" type="text" placeholder="Enter Brand Name"/>
       <input className="mobile-name" type="text" placeholder="Enter Mobile Name"/>
       <label className="label" for="Ram">Select Ram Size:</label>

            <select name="Ram" id="Ram">
                <option value="4GB"> 4GB</option>
                <option value="6GB"> 6GB</option>
                <option value="8GB"> 8GB</option>
                <option value="12GB">12GB</option>
            </select>
            <div></div>
            <label className="Storage" for="Storage">Select Storage Size:</label>

               <select name="Storage" id="Storage" placeholder="Enter">
                <option value="64GB"> 64GB</option>
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option> 
              </select>    
      <input className="Button" type="submit" value="Add"/>      
    </div>
  );
}

export default App;
