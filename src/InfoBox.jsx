import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const HOT_URL = "https://media.istockphoto.com/id/1257088461/photo/glowing-sun-on-orange-sky.jpg?s=612x612&w=0&k=20&c=PIPUiJTgQsm0ER7KVKK2vUMkaqu8v47I8wQvaR5bzt0=";
    const COLD_URL = "https://media.istockphoto.com/id/538327557/photo/frozen-lake.jpg?s=612x612&w=0&k=20&c=ydmmGLEjOmDaLGuVMKPi-vqdDqKQA-ez0QfoY6fw-6w=";
    const RAINY_URL = "https://as1.ftcdn.net/v2/jpg/02/63/96/16/1000_F_263961636_0DbKWcZtrM4EaZNQV2fAhVYJYamVzJbp.jpg";
    const NORMAL_URL = "https://media.istockphoto.com/id/1317255877/photo/nice-cloudless-empty-blue-sky-panorama-background.jpg?s=612x612&w=0&k=20&c=jj-KfArx5K0FguFCbW0l6g1GvWOOA-eu25AxJr641rU="
    
    return(<div className="InfoBox">
        <div className="Info-Card">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.tempMax>23 && info.tempMax<28 ? NORMAL_URL : info.temp<24 ? COLD_URL : info.humidity>90 ? RAINY_URL : HOT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} &nbsp;
          {info.tempMax>22 ? <WbSunnyIcon /> : info.humidity>90 ? <ThunderstormIcon /> : <AcUnitIcon /> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p><b>Temp:</b>  {info.temp}&deg;C</p>
          <p><b>Max-Temp:</b>  {info.tempMax}&deg;C</p>
          <p><b>Min-Temp:</b>  {info.tempMin}&deg;C</p>
          <p><b>Humidity:</b>  {info.humidity}</p>
          <p><b>Sea-level:</b>  {info.seaLevel}</p>
          <p><b>Pressure:</b>  {info.pressure}</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like <b>{info.feelsLike}&deg;C</b></p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    </div>)
}