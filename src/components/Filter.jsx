import Button from './Button'

function Filter(props) {
  const status = ['active', 'quiet', 'dead', 'israeli agent']
  return (
    <section className="filter">
      {status.map((statu) => (
        <Button className="btn" key={statu} content={statu} onClick={() => props.filterByStatus(statu)}  />
      ))}
    </section>
  )
}

export default Filter