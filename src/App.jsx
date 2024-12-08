import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
   const loadedCoffees=useLoaderData();
   const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div className="p-10 m-20  bg-base-300">
      <h1 className="text-6xl text-center my-20">
        Hot and Burn : {coffees.length}
      </h1>
      <div className="grid md:grid-cols-2 gap-5 ">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
