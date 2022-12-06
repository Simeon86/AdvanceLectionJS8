var car = {
    model: 'Lada',
    country: 'Russia',
    fuel: 50,
    distance: 0,
    e_consump: 10,
    drive: function(distance) {
        // this.distance = this.distance + distance
       var result = this.calcFuel(distance);

       if(result) {
            this.distance += distance;
       } else {
        console.log(`Not enought fueld! Rest fuel is ${this.fuel}`)
       }

        
    },
    calcFuel: function(distance) {
        
        var consump =  distance / this.e_consump;

        if ((this.fuel - consump) >= 0 ) {
            this.fuel = this.fuel - consump;
            return true;
        }
        return false;
    },
    charge: function(l) {
            this.fuel += 50;

            if (this.fuel > 50) {
                this.fuel = 50;
            }

        if (this.fuel < 0) {
            this.fuel = 0;
        }
        
    }
}
