import React from "react";
import { useNavigate } from "react-router-dom";

// My components
import Card from "../../components/Card";

// My css
import "./styles.css";

// todo: boostrap cdn update

import { monthNames } from "../../utilities/constants";
import {
  getCurrDay,
  getCurrDate,
  getCurrMonthName,
  getCurrMonthNumber,
  getCurrYear,
} from "../../utilities/helper_functions";

const SelectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="select-pg-outer-div">
      <div className="row">
        <div className="col-lg-8 col-md-8 col-12 select-pg-card-outer-div">
          <Card
            className="select-pg-card-outer-div"
            text={
              getCurrDate() +
              " " +
              getCurrMonthName() +
              " " +
              getCurrYear() +
              ", " +
              getCurrDay()
            }
            // number={0}
            onClick={() => {
              navigate(
                `/monthly-calendar/${getCurrMonthName()}/${getCurrMonthNumber()}`
              );
            }}
          ></Card>
        </div>

        {monthNames.map((monthName, index) => {
          const monthNumber = index + 1;
          return (
            <div
              key={monthNumber}
              className="col-lg-4 col-md-4 col-6 select-pg-card-outer-div"
            >
              <Card
                text={monthName}
                // number={monthNumber}
                onClick={() => {
                  navigate(`/monthly-calendar/${monthName}/${monthNumber}`);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectionPage;

/*  <div
              key={index}
              className={`${
                index === 0 ? "col-lg-8" : "col-lg-4"
              } col-md-6 col-12 select-pg-card-outer-div`}
            >
              <Card text={index === 0 ? getToday() : monthNames[index]} />
            </div> */
