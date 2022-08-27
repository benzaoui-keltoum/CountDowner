/*

here i add the function for display the rest time to reach the next year ok */

//get the today date
var today = new Date();

var year =today.getFullYear();//THIS YEAR//2022
var month=today.getMonth()+1;//THIS MONTH//08
var date=today.getDate();//NUMERICAL DAY OF THE MONTH//27

//Calcul rested month
var resMonth=12-month;

//Calcul rested days in the curent month
let getRestDay=(month,date)=>
{
switch(month){
     case 1 : case 3 : case 5: case 7: case 8 : case 10 : case 12:
       RestDay=31-date;  
       break;        

   case 2: case 4: case 6: case 9 : case 11 :
  RestDay=30-date;  
  break ;

}
return RestDay
}



//Calcul  the restDay in the Year 
var daysRest=(getRestDay(month,date)+(resMonth*30));

//Calcul  the restHour in the Year 
var GetHours=daysRest*24;

//Calcul  the restMinutes in the Year 
var GetMinutes=GetHours*60;

//Calcul  the restSeconds in the Year 
var GetSeconds=GetMinutes*60;




