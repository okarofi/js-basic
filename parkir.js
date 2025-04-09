function calculateParkingFee(vehicleType, duration){

    let firstHourPrice = 0;
    let nextHourPrice = 0;
    let extraCharge = 0;
    const oneDay = 24;

    if (vehicleType === "car"){
        firstHourPrice = 5000;
        nextHourPrice = 3000;
        extraCharge = 50000;
    } else if (vehicleType === "bike"){
        firstHourPrice = 2000;
        nextHourPrice = 1000;
        extraCharge = 20000;
    } else {
        return "Kendaraan tidak valid"
    }
    
    let totalPrice = 0;
    
    if (duration <= 1) {
        totalPrice = firstHourPrice;
    } else {
        totalPrice = firstHourPrice + (duration - 1) * nextHourPrice;
    }
    
    if (duration > oneDay) {
        totalPrice += extraCharge;
    }
    
    console.log(totalPrice);
}

calculateParkingFee("car", 27);
