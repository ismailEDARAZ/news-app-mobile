import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardNews from '../components/CardNews';

export default function HomePage() {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://newsdata.io/api/1/news?apikey=pub_2281939b9c8850c494b7180e0de6886741a5a&language=ar&category=politics,science,sports,technology");
    const data = await resp.json();
    setData(data);
  };

  useEffect(()=>{
    fetchData();
    //console.log(data);
  },[]);

  return (
    <View>
      {
        data.map((item,index)=> {
          return (
            <CardNews key={index} />
          );
        })
      }
    </View>
  )
}