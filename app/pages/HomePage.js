import React, { useEffect, useState } from 'react'
import CardNews from '../components/CardNews';
import { ScrollView } from 'native-base';

export default function HomePage() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://newsdata.io/api/1/news?apikey=pub_2281939b9c8850c494b7180e0de6886741a5a&language=ar&category=politics,science,sports,technology");
    const data = await resp.json();
    setData(data.results);
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <ScrollView margin={3}>
      { data.map((item,index) =>
          (<CardNews key={index} item={item} />))
      }
    </ScrollView>
  )
}