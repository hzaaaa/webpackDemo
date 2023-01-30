let o = {
  calendarshow (val) {
    this.showDate = val; //显示隐藏月历

    this.$nextTick(_=>{
      let obj = document.querySelectorAll(".isSelect")[0]
      obj&&obj.scrollIntoView({behaviour: 'instant'})
      let obj1 = document.querySelectorAll(".isSelect")[1]
      obj1&&obj1.scrollIntoView({behaviour: 'instant'})
      // console.log(obj)
    })
  },
}