import { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";
export const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["Dragon Ball"]);

  // const handleAdd = ()=>{
  //     //setCategories([...categories, 'HunterX']);
  //     setCategories(cat => [...cat,'HunterX']);
  // }

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {

          categories.map(category => (
            <GifGrid key={category} category={ category } />
          ))

          // categories.map(category => {
          //   return <li key={ category }>{ category }</li>;
          // })
        }
      </ol>
    </>
  );
};
