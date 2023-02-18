import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { useWheather } from "../WeatherContext";
import moment from "moment";

export default function Card() {
  const { days, temperature, country, name, wicon, hours } = useWheather();
  return (
    <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>
      <MDBContainer className={`h-100 `}>
        <MDBRow
          className="justify-content-center align-items-center h-100"
          style={{ color: "#282828" }}
        >
          <MDBCol md="9" lg="7" xl="5">
            <MDBCard
              className="mb-4 gradient-custom"
              style={{ borderRadius: "25px" }}
            >
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-between pb-2">
                  <div>
                    <h2 className="display-2">
                      <strong>{temperature}°C</strong>
                    </h2>
                    <p className="text-muted mb-0">
                      {name}, {country}
                    </p>
                    <p className="text-muted mb-0">
                      <strong>
                        Today is {moment(days?.[0]?.date).format("dddd")}
                      </strong>
                    </p>
                  </div>
                  <div>
                    <img src={wicon} alt="Hava Durumu" width="150px" />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(hours?.[7]?.dewpoint_c)}°C</strong>
                    </p>
                    <div>
                      <img
                        src={hours?.[7]?.condition?.icon}
                        alt="Hava Durumu"
                        width="50px"
                      />
                    </div>
                    <p className="mb-0">
                      <strong>07:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      AM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(hours?.[11]?.dewpoint_c)}°C</strong>
                    </p>
                    <div>
                      <img
                        src={hours?.[11]?.condition?.icon}
                        alt="Hava Durumu"
                        width="50px"
                      />
                    </div>
                    <p className="mb-0">
                      <strong>11:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      AM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(hours?.[15]?.dewpoint_c)}°C</strong>
                    </p>
                    <img
                      src={hours?.[15]?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                    />
                    <p className="mb-0">
                      <strong>3:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(hours?.[19]?.dewpoint_c)}°C</strong>
                    </p>
                    <img
                      src={hours?.[19]?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                    />
                    <p className="mb-0">
                      <strong>7:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(hours?.[23]?.dewpoint_c)}°C</strong>
                    </p>
                    <img
                      src={hours?.[23]?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                    />
                    <p className="mb-0">
                      <strong>11:00</strong>
                    </p>
                    <p
                      className="mb-0 text-muted"
                      style={{ fontSize: ".65rem" }}
                    >
                      PM
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex justify-content-around text-center pb-3 pt-2">
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(days?.[1]?.day?.avgtemp_c)}°C</strong>
                    </p>
                    <img
                      src={days?.[1]?.day?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                      style={{ marginBottom: 5 }}
                    />
                    <p className="mb-0" style={{ marginTop: 5 }}>
                      <strong>Tomorrow</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(days?.[2]?.day?.avgtemp_c)}°C</strong>
                    </p>
                    <img
                      src={days?.[2]?.day?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <p className="mb-0">
                      <strong>{moment(days?.[2]?.date).format("dddd")}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(days?.[3]?.day?.avgtemp_c)}°C</strong>
                    </p>
                    <img
                      src={days?.[3]?.day?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <p className="mb-0">
                      <strong>{moment(days?.[3]?.date).format("dddd")}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(days?.[4]?.day?.avgtemp_c)}°C</strong>
                    </p>
                    <img
                      src={days?.[4]?.day?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <p className="mb-0">
                      <strong>{moment(days?.[4]?.date).format("dddd")}</strong>
                    </p>
                  </div>
                  <div className="flex-column">
                    <p className="medium">
                      <strong>{Math.round(days?.[5]?.day?.avgtemp_c)}°C</strong>
                    </p>
                    <img
                      src={days?.[5]?.day?.condition?.icon}
                      alt="Hava Durumu"
                      width="50px"
                      style={{ marginBottom: 10 }}
                    />
                    <p className="mb-0">
                      <strong>{moment(days?.[5]?.date).format("dddd")}</strong>
                    </p>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
