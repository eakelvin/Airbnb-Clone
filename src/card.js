import React from "react";
import data from "./data";

export default function Card(props) {
    let textBadge;
    if (props.openSpots === 0) {
        textBadge = "SOLD OUT"
    } else if (props.location === "Online") {
        textBadge = "ONLINE"
    }
    
    return (
        <section>
            <div className="container">
                {textBadge && <div className="badge">{textBadge}</div>}
                <img src= {`./images/${props.coverImg}`} className="card--image" />
                <div className="mini-container">
                    <img src="./images/star.png" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p className="card-title">{props.title}</p>
                <p>From ${props.price} / person</p>
            </div>
        </section>
    )
}