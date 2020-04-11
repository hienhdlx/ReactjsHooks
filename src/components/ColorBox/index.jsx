import React, { useState } from 'react';
import './ColorBox.scss';

function getColorRamdom() {
    var list_color = ["deeppink", "green", "yellow", "black", "blue"];
    var ramdomcolor = Math.trunc(Math.random() * 5);
    return list_color[ramdomcolor];
}


function ColorBox() {
    const [color, setColor] = useState(() => {
        var initial = localStorage.getItem('color_box') || "green";
        return initial;
    });

    function onClickHandle() {
        var getColor = getColorRamdom();
        setColor(getColor);
        localStorage.setItem("color_box", getColor);
    }

    return (
        <div>
            <div className="retagel1" onClick={onClickHandle}></div>
            <div className="retagel2" style={{ backgroundColor: color }}></div>
        </div>
    );
}

export default ColorBox;