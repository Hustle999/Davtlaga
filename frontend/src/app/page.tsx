"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]); //eniig ingeed ashiglaj chadsangguee
  const mockdata = async () => {
    const response = await fetch("http://localhost:8000");
    console.log(response);

    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    mockdata();
  }, []);

  return <div>hello</div>;
}
