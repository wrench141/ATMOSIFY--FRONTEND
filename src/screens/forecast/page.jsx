import { useState } from "react";
import "./style.css";

function Screen1() {
  return (
    <>
      <div className="data">
        <div className="temp">
          <p className="num">26°C</p>
          <p className="status">
            <ion-icon name="rainy"></ion-icon>
            Cloudy
          </p>
          <p className="date">Thursday 15 • 05:30pm</p>
          <button className="btn">
            This Week
            <div className="circle">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </button>
        </div>
      </div>
      <div className="time-wrap">
        <div className="wrap sun">
          <div className="icon">
            <ion-icon name="sunny"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">SUNRISE</p>
            <p className="time">06:30AM</p>
          </div>
        </div>
        <div className="wrap moon pd">
          <div className="icon">
            <ion-icon name="cloudy-night"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">SUNSET</p>
            <p className="time">06:30PM</p>
          </div>
        </div>
      </div>
      <div className="time-wrap">
        <div className="wrap moon">
          <div className="icon">
            <ion-icon name="water"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">HUMIDITY</p>
            <p className="time">60%</p>
          </div>
        </div>
        <div className="wrap pd">
          <div className="icon">
            <ion-icon name="sparkles"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">AIR QUALITY</p>
            <p className="time">50 Moderate</p>
          </div>
        </div>
      </div>
      <div className="time-wrap">
        <div className="wrap">
          <div className="icon">
            <ion-icon name="snow"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">PRECIPITATION</p>
            <p className="time">75%</p>
          </div>
        </div>
        <div className="wrap pd moon">
          <div className="icon">
            <ion-icon name="rainy"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">RAIN FALL</p>
            <p className="time">20</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Screen2() {
  return (
    <>
      <div className="time-wrap grid" style={{marginTop: "20px"}}>
        <div className="wrap sun">
          <div className="col">
            <p className="sub">TIME</p>
            <p className="time">06:30AM</p>
          </div>
        </div>
        <div className="wrap mid">
          <div className="col">
            <p className="sub">TEMP</p>
            <p className="time">26°C</p>
          </div>
        </div>
        <div className="wrap end">
          <div className="icon">
            <ion-icon name="cloudy-night"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">STATUS</p>
            <p className="time">Rainy</p>
          </div>
        </div>
      </div>
      <div className="time-wrap grid" style={{marginTop: "20px"}}>
        <div className="wrap sun">
          <div className="col">
            <p className="sub">TIME</p>
            <p className="time">06:30AM</p>
          </div>
        </div>
        <div className="wrap mid">
          <div className="col">
            <p className="sub">TEMP</p>
            <p className="time">26°C</p>
          </div>
        </div>
        <div className="wrap end">
          <div className="icon">
            <ion-icon name="cloudy-night"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">STATUS</p>
            <p className="time">Rainy</p>
          </div>
        </div>
      </div>
      <div className="time-wrap grid" style={{marginTop: "20px"}}>
        <div className="wrap sun">
          <div className="col">
            <p className="sub">TIME</p>
            <p className="time">06:30AM</p>
          </div>
        </div>
        <div className="wrap mid">
          <div className="col">
            <p className="sub">TEMP</p>
            <p className="time">26°C</p>
          </div>
        </div>
        <div className="wrap end">
          <div className="icon">
            <ion-icon name="cloudy-night"></ion-icon>
          </div>
          <div className="col">
            <p className="sub">STATUS</p>
            <p className="time">Rainy</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Forecast() {
  const [menu, setMenu] = useState(false);
  const [screen, setScreen] = useState(0);

  return (
    <div className="container">
      <div className="wrap">
        <div className="tag">2024</div>
        <div className="subtag">
          Weather Monitoring in Vignans institute of information and technology
          exclusively sponsored by CUNY & BRONX community colleges
          <br />
          <br />
          @Supported by Weather link live • Davis
        </div>
        <div className="menu pc">
          <a href="/forecast" className="link">
            Menu • Daily Forecast
          </a>
          <a href="/" className="link">
            Menu • Blog
          </a>
          <a href="/" className="link">
            Menu • History
          </a>
        </div>
        {menu ? (
          <div className="menu mb">
            <div className="cl" onClick={() => setMenu(false)}>
              <ion-icon name="close-outline"></ion-icon>Close
            </div>
            <a href="/forecast" className="link">
              Menu • Daily Forecast
            </a>
            <a href="/" className="link">
              Menu • Blog
            </a>
            <a href="/" className="link">
              Menu • History
            </a>
            <p className="ftag">Sponsors</p>
            <div className="img-wrap">
              <img src="/assets/BC.png" alt="" className="img" />
              <img src="/assets/cuny.png" alt="" className="img" />
            </div>
            <p className="ftag">@Supported by Weather link live • Davis</p>
            <div className="desc">
              Weather Monitoring in Vignans institute of information and
              technology exclusively sponsored by CUNY & BRONX community
              colleges
            </div>
          </div>
        ) : null}
        <div className="line">
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
        </div>
        <div className="big">
          <p className="title">VIGNAN'S</p>
          <div className="box">
            <div className="mockup">
              <div className="topbar">
                <div>
                  <p
                    className="title"
                    style={{ color: "white", display: "flex", gap: "5px" }}
                  >
                    <ion-icon name="bonfire"></ion-icon>
                    Atmosify
                  </p>
                  <p className="sub">
                    {
                        screen == 0 ? "Good Morning!" : "Hourly Forecast"
                    }
                  </p>
                </div>
                <ion-icon
                  name="menu-outline"
                  style={{ fontSize: "20px" }}
                  onClick={() => setMenu(true)}
                ></ion-icon>
              </div>
              <div className="border"></div>
              <div className="blur"></div>
              {screen == 0 ? <Screen1 /> : screen == 1 ? <Screen2 /> : null}
              <div className="phonemenu">
                <div className={screen == 0 ? "icon sel" : "icon"} onClick={() => setScreen(0)}>
                  <ion-icon name="sunny"></ion-icon>
                </div>
                <div className={screen == 1 ? "icon sel" : "icon"}onClick={() => setScreen(1)}>
                  <ion-icon name="time"></ion-icon>
                </div>
                <div className={screen == 2 ? "icon sel" : "icon"}onClick={() => setScreen(2)}>
                  <ion-icon name="calendar"></ion-icon>
                </div>
              </div>
            </div>
          </div>
          <p className="title">ATMOSIFY</p>
        </div>
        <div className="line bck">
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
          <p>✴</p>
          <p>Weather</p>
          <p>✴</p>
          <p>Forecast</p>
        </div>
      </div>
    </div>
  );
}
