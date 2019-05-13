import React from 'react';
import './dotsContainer.css';

const DotsContainer = (props) => {

    return (
        <div className={'dots-container'} dots-index={props.num}>
           <div dot-index="0" className={'dot'}/>
           <div dot-index="1" className={'dot'}/>
           <div dot-index="2" className={'dot'}/>
           <div dot-index="3" className={'dot'}/>
           <div dot-index="4" className={'dot'}/>
           <div dot-index="5" className={'dot'}/>
           <div dot-index="6" className={'dot'}/>
           <div dot-index="7" className={'dot'}/>
           <div dot-index="8" className={'dot'}/>
        </div>
    );
};

export default DotsContainer;
