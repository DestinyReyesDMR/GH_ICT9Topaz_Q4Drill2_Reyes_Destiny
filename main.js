function calculateHeatIndex() {

    const T = parseFloat(document.getElementById('tempInput').value);
    const R = parseFloat(document.getElementById('humidityInput').value);

    if (isNaN(T) || isNaN(R)) {
        window.alert("Please enter valid numbers for both fields.");
        return;
    }

    let heatIndex = T + (0.47 * (R - 50) * 0.1); 
    let status = "";

    if (heatIndex >= 41) {
        status = "DANGER: Heat stroke likely!";
    } else if (heatIndex >= 32) {
        status = "EXTREME CAUTION: Heat cramps possible.";
    } else {
        status = "NORMAL: Safe to be outdoors.";
    }

    window.alert("Results:\n" + 
                 "Calculated Index: " + heatIndex.toFixed(1) + "°C\n" + 
                 "Health Status: " + status);
}