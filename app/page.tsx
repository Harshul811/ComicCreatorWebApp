"use client"
import { useState } from 'react';
import { handleQuery } from "@/services";

const Home: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    return (
        <div className="p-5 sm:px-10 md:px-20">
            
	        <img id="comicPic" src = "https://www.thelancet.com/cms/attachment/91278e82-b394-4863-88c2-39c11fae8137/gr1.jpg" 
            width="100px" height="100px"/>
	        <button id="generateComic" onClick={() => {handleQuery("astronaut riding")}}>Generate Comic</button>
        </div>
    );
};

export default Home;