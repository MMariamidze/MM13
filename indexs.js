var fruit=["ვაშლი", "მსხალი", "ატამი"];
var fruit2=[];
fruit.forEach(
    function(element){
        fruit2.unshift(element)
    }
);
document.write(fruit2 + "<br>");

var month1 = ["იანვარი", "თებერვალი", "მარტი", "აპრილი","მაისი","ივნისი", "ვილისი","აგვისტო","სექტემბერი", "ოქტომბერი","ნომებერი", "დეკემბერი"];
var day1 = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
var time = new Date();
var month = time.getMonth();
var day = time.getDay();
var welcome;
var welcome2;

if (month <=3){
    welcome = "ცივა";
}
else if (month <=8){
    welcome = "ცხელა";
}
else{
    welcome = "ცივა";
}
document.write(welcome + "<br>");


if (month <=3 && day==0 ||day==6) {
    welcome2 = "წავედით სათხილამუროდ";
}
else if (month <=3 && day>0 && day<6) {
    welcome2 ="ცივა მაგრამ, ვერ წავედით ვერსად"
}
else if (month <=8 && day==0 ||day==6){
    welcome2= "წავედით ზღვაზე";
}
else if (month <=8 && day>0 && day<6) {
    welcome2="ცხელა მაგრამ, ვხედვართ სახლში"
}
else{
    welcome2 = "წავედით სათხილამუროდ";
}

var message = "დღეს არის" + " " + day1[time.getDay()] + ", " + welcome2
document.write(message + "<br>");

