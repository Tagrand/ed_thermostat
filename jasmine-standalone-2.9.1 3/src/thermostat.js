const DEFAULT_TEMP = 20;
const MIN_TEMP = 10;

function Thermostat () {
  this.temp = DEFAULT_TEMP;

};

Thermostat.prototype = {

    up: function() { this.temp++; },

    down: function() {
      if (this.temp <= this.MIN_TEMP){
        throw new Error("minimum tempreture reached")
      }
      else {
       this.temp--}
    }

};
