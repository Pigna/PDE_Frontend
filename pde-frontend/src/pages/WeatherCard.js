function WeatherCard(props) {
    return (
        <div>
            <div>{props.date}</div>
            <div>{props.temperatureC}</div>
            <div>{props.temperatureF}</div>
            <div>{props.summary}</div>
        </div>
    );
}
export default WeatherCard;