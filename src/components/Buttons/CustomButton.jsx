import React from "react";
import "./button.css";

export default function CustomButton({value}) {
    return (
      <div className="container">
          <p className="text">{value}</p>
      </div>
    );
}
