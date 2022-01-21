import Link from 'next/link';
import { getCategories } from '../services'
import React, {useState, useEffect} from 'react'

const Header = () => {
  const [categories, setCategories] =useState([]);

  useEffect(() =>{
      getCategories()
      .then((newCategories)=> setCategories(newCategories))
  },
  []);

    return (
        <div className="container mx-auto px-10 mb-8">
          <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block">
              <Link href="/">
                <span className="md:float-right px-2 align-middle text-purple-700 ml-4 font-semibold cursor-pointer">
                    Graph CMS color chnages
                    </span>
                    
              </Link>
            </div>
            <div className="hidden md:float-left md:contents">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className="md:float-right mt-2 align-middle text-purple-700 ml-4 font-semibold cursor-pointer">
                        {category.name}
                        </span></Link>
              ))}
            </div>
          </div>
        </div>
      );
    };

    

        
export default Header;
