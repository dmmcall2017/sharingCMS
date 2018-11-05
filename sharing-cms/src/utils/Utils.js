export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+this.setDoubleNum(date.getMonth()+1)+'-'+this.setDoubleNum(date.getDate())+' '+this.setDoubleNum(date.getHours())+':'+this.setDoubleNum(date.getMinutes())+':'+this.setDoubleNum(date.getSeconds());
    },

    setDoubleNum(num){
        return num<10?'0'+num:num;
    }
}