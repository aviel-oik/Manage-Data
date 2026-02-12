function SearchByName(props) {
  return (
    <input className="search" type="text" placeholder="Search by name.." onChange={(e) => props.nameSearch(e.target.value)} />
  )
}

export default SearchByName

