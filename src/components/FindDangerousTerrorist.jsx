import Button from "./Button"

function FindDangerousTerrorist(props) {
  return (
    <Button className="btn-dangerous" content='Most Dangerous Terrorist' onClick={() => props.findMostDangerous()} />
  )
}

export default FindDangerousTerrorist;