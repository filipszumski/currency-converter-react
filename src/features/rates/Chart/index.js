import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { selectRatesForChart, getRates, selectState, selectBase } from "../ratesSlice";
import { Wrapper } from "./styled";
import { Footer } from "../../../common/Footer";

const Chart = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const loadingState = useSelector(selectState);
  const base = useSelector(selectBase);
  const rates = useSelector((state) => selectRatesForChart(state, params.id));

  const chartDates = rates.map((rate) => rate[0]);
  const chartRates = rates.map((rate) => rate[1]);

  useEffect(() => {
    dispatch(getRates());
  }, [dispatch, base]);

  return (
    <Container>
      <Header title="Ostatnie 30 dni" />
      <Wrapper >
        {rates !== undefined && rates.length > 0 && loadingState === "success" && (
          <Bar data={{
            labels: chartDates,
            datasets: [
              {
                label: params.id || "EUR",
                data: chartRates,
                backgroundColor: new Array(chartRates.length).fill('rgba(75,192,192,0.6'),
                borderWidth: 4,
              },
            ],
          }}
            options={{
              responsive: false,
              maintainAspectRatio: false,
            }}
            height={350}
            width={740}
          />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export { Chart };