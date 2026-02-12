import { useState } from 'react'
import './App.css'

import data from "../data/data.json"
import Header from './components/Header'
import SearchByName from './components/SearchByName'
import SearchByNumber from './components/SearchByNumber'
import Filter from './components/Filter'
import FindDangerousTerrorist from './components/FindDangerousTerrorist'
import ShowList from './components/ShowList'


function App() {

  const [list, setList] = useState(data)

  const nameSearch = (name) => {
    const newList = data.filter( (item) => item.name.includes(name ));
    setList(newList);
  };
  const numSearch = (number) => {
    const newList = data.filter(( item) => item.attacksCount == number)
    setList(newList);
  };

  const filterByStatus = (status) => {
    const newList = data.filter(( item) => item.status == status)
    setList(newList);
  };

  const findMostDangerous = () => {
    let newList = data.filter(( item) => item.status == 'active')
    newList = newList.filter((item) => item.imageUrl !== null)
    newList = newList.sort((a, b) => b.attacksCount - a.attacksCount)
    newList = newList.filter((item, index) => index === 0)

    setList(newList)
  }


  return (  
    <section>
      <Header />
      <section className='container'>
        <SearchByName nameSearch={nameSearch} />
        <SearchByNumber numSearch={numSearch} />
        <Filter filterByStatus={filterByStatus}/>
        <FindDangerousTerrorist findMostDangerous={findMostDangerous}/>
        <ShowList list={list} />
      </section>
    </section>
  )
}

export default App
