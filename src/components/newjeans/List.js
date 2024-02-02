import React from "react";
import Item from "./Item";
import Navigation from "../common/Navigation";
import { useState } from "react";
import styles from "../../styles/common/Common.module.css";

function List(){
    const arr = new Array(60);

    console.log(arr.length);

    return(
        <div className={styles.box}>
            <div>
                <div>
                    <span>btn</span>
                </div>
                <div>
                    
                </div>
                <Navigation></Navigation>
            </div>
            {arr.map((item,index)=>{
                return <Item></Item>
            })}
        </div>
    )
}

export default List;