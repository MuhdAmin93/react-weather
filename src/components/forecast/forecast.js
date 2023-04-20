import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion"

import "./forecast.css"

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
export const Forecast = ({data}) => {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
  console.log(forecastDays)

  return (
    <>
      <label className="title"> Daily </label>
      <Accordion allowZeroExpanded>
      {data.list.splice(0, 7).map((item, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="daily-item">
                <img alt="" src={`Icons/${item.weather[0].icon}.png`} className="icon-small"/>
                <label className="day">{forecastDays[idx]}</label>
                <label className="description">{item.weather[0].description}</label>
                <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="daily-details-grid">
              <div className="daily-details-grid-items">
                <label> Pressure:</label>
                <label> {Math.round(item.main.pressure)}hPa</label>
              </div>
              <div className="daily-details-grid-items">
                <label> Humidity:</label>
                <label> {Math.round(item.main.humidity)}%</label>
              </div>
              <div className="daily-details-grid-items">
                <label> Clouds:</label>
                <label> {Math.round(item.clouds.all)}%</label>
              </div>
              <div className="daily-details-grid-items">
                <label> Wind speed:</label>
                <label> {Math.round(item.wind.speed)}km/h</label>
              </div>
              <div className="daily-details-grid-items">
                <label> Sea level:</label>
                <label> {Math.round(item.main.sea_level)}m</label>
              </div>
              <div className="daily-details-grid-items">
                <label> Feels like:</label>
                <label> {Math.round(item.main.feels_like)}°C</label>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
      </Accordion>
    </>
  )
}
