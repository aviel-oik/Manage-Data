function SearchByNumber(props) {
  return (
    <input className="search" type="text" placeholder="Search by attacks.." onChange={(e) => props.numSearch(Number(e.target.value))} />
  )
}

export default SearchByNumber