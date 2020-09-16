var app = new Vue({
  el: "#app",
  data: {
    fetchedData: null,
    tableNames: ["time", "temperature"],
    // Example data
    weatherData: [
      { time: "11:00", temp: "32.2" },
      { time: "11:05", temp: "32.1" },
      { time: "11:10", temp: "31.5" },
      { time: "11:15", temp: "31.6" },
      { time: "11:20", temp: "31.2" },
      { time: "11:25", temp: "32.2" },
      { time: "11:30", temp: "31.7" },
    ],
  },
  methods: {
    fetchData() {
      const vm = this;
      //Set your url endpoint  
      const url = "http://worldtimeapi.org/api/timezone/Europe";
      axios
        .get(url)
        .then(function (response) {
          console.log(response.data);
          // set vue prop "fetchedData" to output   
          vm.fetchedData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
});
