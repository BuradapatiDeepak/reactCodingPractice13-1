import './index.css'

const countryCapital = () => {
  return (
    <option onChange={onClickChangeCountry} key={eachItem.id}>
      {eachItem.country}
    </option>
  )
}

export default countryCapital
