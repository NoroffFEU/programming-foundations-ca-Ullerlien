const car = {
    brand: "Ford",
    type: "Hatchback",
    color: "Black",
    capacity: 5,
    features: ["Bluetooth", "GPS"],
    on: false,
    drive: function() {
      car.on = !car.on
    }
  };

  console.log(car);