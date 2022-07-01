function MilesToKilometers(km)
{
    return km * 1.609344;
}

function KilometersToMiles(miles)
{
    return miles / 1.609344;
}

console.log(`The distance of 130 kms is equal to ${MilesToKilometers(130)} miles`)
console.log(`The distance of 209 miles is equal to ${KilometersToMiles(209)} kms`)
