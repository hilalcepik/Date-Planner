const CronJob = require('cron').CronJob;

const calculateDates = (occurence,every,day_of_week) => {
  var dates = [];
  var str_dates = ''
  var str_params = '0 22 * */' + every + ' ' + day_of_week   //  '0 22 * */2 4'

  /*
    'second',
		'minute',
		'hour',
		'dayOfMonth',
		'month',
    'dayOfWeek'	
    XX year XX
  */
  
  const job = new CronJob(str_params, function() {
    str_dates = job.nextDates(occurence).toString()
    dates = str_dates.split(',') 
  });
  
  job.start();

  //TEST
  console.log(job.nextDates(occurence).toString().split(','))  
  
  return dates
}

calculateDates(10,2,4)




//Find Week of Month
/*var d = new Date("2020-03-15");

function getWeekOfMonth(date) {
  let adjustedDate = date.getDate()+date.getDay();
  let prefixes = ['0', '1', '2', '3', '4', '5'];
  return (parseInt(prefixes[0 | adjustedDate / 7])+1);
}

getWeekOfMonth(d)*/











  