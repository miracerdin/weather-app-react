const Card = ({ temp, condition, desc, icon, time }) => {
  return (
    <div className="card">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <div className="infos">
        <p>{Math.round(temp)}℃</p>
        <p>{condition}</p>
        <p>{desc}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Card;
