import React from "react";
import * as style from "./style.scss";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import { Icon, Tooltip } from "antd";




export default function Compent(props: any) {
  return <div className={style.box} id={props.id + "one"}>
    <a className={style.picture}>
      <div className={style.noHidden}>
        <div className={style.img}><img src={img2} id="img" width="190px" height="120px" /></div>
        <div className={style.title}>
          <Tooltip placement="topLeft" title="Prompt Text">
            <Icon type="play-circle" />
          </Tooltip>
        </div>
      </div>
      <div className={style.hidden}>
      <div className={style.img}><img src={img1} width="190px" height="120px" /></div>
        <div className={style.icon1}><Icon type="team" />999</div>
        <div className={style.icon2}><Icon type="like" />999</div>
      </div>
    </a>
    <a>
      <div className={style.txt}>
        <span className={style.dir}>一些有用的介绍</span><br />
        <span className={style.tip}>UP·学习</span>
      </div>
    </a>
  </div>

}