function CelsiusToFahrenheit(celsius)
{
    let temperature = celsius * 1.8 + 32;
    return temperature;
}

function FahrenheitToCelsius(fahrenheit)
{
    let temperature = (fahrenheit - 32) * 0.5556;
    return temperature;
}