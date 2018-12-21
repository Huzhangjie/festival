// TOGETHER_TIME 2017年9月22日 23:43:00
const TOGETHER_TIME = 1506094980000
const DAY_TIME = 24 * 60 * 60
const HUOR_TIME = 60 * 60

// 计算从TOGETHER_TIME 到当前时间的时间长度 再转换
function getTotalTimeText () {
  const time = parseInt((Date.now() - TOGETHER_TIME) / 1000)
  let day = parseInt( time / DAY_TIME )
  let hour = parseInt((time %  DAY_TIME) / HUOR_TIME)
  let minute = parseInt( (time %  DAY_TIME) %  HUOR_TIME / 60)
  let second = parseInt( ((time %  DAY_TIME) %  HUOR_TIME) % 60 )
  return `${day}日${hour < 10 ? '0' + hour : hour}时${minute < 10 ? '0' + minute : minute}分${second < 10 ? '0' + second : second}秒`
}