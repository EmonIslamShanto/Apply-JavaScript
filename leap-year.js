



let getData =prompt('Enter Year') // get data from user

const leapYear =(year)=>{

    if( year % 4 == 0){
        console.log(`${year} is leap year`)
    }else if(year % 400 == 0){
        console.log(`${year} is leap year`)
    }else if(year % 100 != 0){
        console.log(`${year} is not leap year`)
    }

}

leapYear(getData)
