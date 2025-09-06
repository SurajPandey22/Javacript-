const obj= fetch("http://api.weatherapi.com/v1/current.json?key=5bdba58702294f0e829203723250409&q=London&aqi=yes");

const pro=obj.then((data)=> {
       return data.json()
       
});

pro.then((dt)=> {
          console.log(dt.current.temp_c);
       })