import Vue from "vue";

const state = {
  colors:[],					//转盘奖品区块对应背景颜色
  outsideRadius:192,			//转盘外圆的半径
  textRadius:155,				//转盘奖品位置距离圆心的距离
  insideRadius:68,			//转盘内圆的半径
  startAngle:0,				//开始角度
  bRotate:false,				//false:停止;ture:旋转
  rewardNames:[
    "50M流量包","10Q币", "谢谢参与","5Q币",
    "10M流量包","20M流量包", "10M流量包",
    "20M流量包", "20Q币 ","30M流量包",
    "100M流量包","2Q币"
  ],
  colors:[
    "#FFF4D7","#FFFFFF", "#F0F4D8","#FFFFFF",
    "#FFF4D0","#FFFFFF", "#FFF4D0","#FFFFFF",
    "#FFF4D6","#FFFFFF", "#FFF4D6","#FFFFFF"
  ]
}
const mutations = {

}
const actions = {


}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
