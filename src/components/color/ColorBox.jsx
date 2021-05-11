import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from "./ColorBox.css";


const ColorBox = ({ color }) => {
    return (
        <div style={{
            backgroundColor:color
         }}
         className={ styles.box }>

         </div>
    )
}

ColorBox.propTypes = { 
    color: PropTypes.string.isRequired
}

export default ColorBox

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
