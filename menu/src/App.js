import { useState } from 'react';

import './App.css';
import Menu from './Menu';
import Categories from './Categories';

import items from './data'

import { IoRestaurantOutline } from "react-icons/io5";


const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {

    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className = 'container'>
        <div>
          <h1><IoRestaurantOutline className = 'icons'/> Our Menu <IoRestaurantOutline className = 'icons'/></h1>
        </div>  

        <Categories categories = {categories} filterItems = {filterItems}/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
