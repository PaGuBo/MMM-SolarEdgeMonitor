//helloworld.js:

Module.register("MMM-SolarEdgeMonitor",{
	// Default module config.
	defaults: {
		header: "solar edge monitor"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});