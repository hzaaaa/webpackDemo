let o = {
  getBeforMonth() {
    const nowdays = new Date();
    let year = nowdays.getFullYear();
    let month = nowdays.getMonth();
    if (month === 0) {
      month = 12;
      year = year - 1;
    }
    if (month < 10) {
      month = '0' + month;
    }

    const yDate = new Date(year, month, 0);
    const timeStr = {
      start: '',
      end: '',
    };

    timeStr.start = year + '-' + month + '-01 00:00:00'; // 上个月第一天
    timeStr.start19 = '2019' + '-' + month + '-01 00:00:00'; // 2019上个月第一天
    timeStr.end = year + '-' + month + '-' + yDate.getDate() + ' 23:59:59'; // 上个月最后一天
    timeStr.monthStr = year + '.' + month; // month str
    timeStr.monthStr19 = '2019' + '.' + month; // 2019 month str

    return timeStr;
  },
  getBeforDay() {
    var yesterday = new Date();
    yesterday.setTime(yesterday.getTime() - 24 * 60 * 60 * 1000);

    // var s1 = yesterday.getFullYear()+"-" + (yesterday.getMonth()+1) + "-" + yesterday.getDate();

    let year = yesterday.getFullYear();
    let month = yesterday.getMonth(); //0-11
    let day = yesterday.getDate();
    const yesterday19 = new Date(2019, month, day);
    let month19 = yesterday19.getMonth(); //0-11
    let day19 = yesterday19.getDate();

    month++; //1-12
    month19++;
    if (month < 10) {
      month = '0' + month;
      month19 = '0' + month19;
    }

    const timeStr = {};

    timeStr.start = year + '-' + month + '-' + day + ' 00:00:00'; // 昨天
    timeStr.start19 = '2019' + '-' + month19 + '-' + day19 + ' 00:00:00'; // 2019 昨天
    // timeStr.end = year + '-' + month + '-' + yDate.getDate() + ' 23:59:59'; // 上个月最后一天
    timeStr.dayStr = year + '.' + month + '.' + day; // day str
    timeStr.dayStr19 = '2019' + '.' + month19 + '.' + day19; // 2019 day str

    return timeStr;
  },
};
