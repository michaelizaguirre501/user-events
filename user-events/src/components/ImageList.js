import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

function ImageList(props) {
  console.log(props.images);
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="imageList">{images}</div>;
}

export default ImageList;
