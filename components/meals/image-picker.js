"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();
  const pickImageHandler = () => {
    imageInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked</p>}
          {pickedImage && <Image src={pickedImage} alt="image" fill />}
        </div>
        <input
          type="file"
          id={name}
          accept="image/jpeg, image/png"
          name={name}
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler}
        >
          Pick an Image.
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
