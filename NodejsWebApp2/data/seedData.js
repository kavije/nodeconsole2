(function(seedData) {

    seedData.getcurrencies = [
        {
            currency: "NZD",
            conversion: [{ name: "AUD", value: "0.93" },
                 { name: "USD", value: "0.75" }, 
                 { name: "EURO", value: "0.66" }, 
                 { name: "POUND", value: "0.48" }, 
                 { name: "NZD", value: "1" }]
        },
        {
            currency: "USD",
            conversion: [{ name: "AUD", value: "1.24" },
                 { name: "NZD", value: "1.34" }, 
                 { name: "EURO", value: "0.88" },
                  { name: "POUND", value: "0.64" },
                   { name: "USD", value: "1" }]
        },
        {
            currency: "AUD",
            conversion: [{ name: "USD", value: "0.80" },
                 { name: "NZD", value: "1.08" }, 
                 { name: "EURO", value: "0.71" },
                  { name: "POUND", value: "0.51" },
                   { name: "AUD", value: "1" }]
        },
        {
            currency: "EURO",
            conversion: [{ name: "USD", value: "1.14" },
                 { name: "NZD", value: "1.52" }, 
                 { name: "EURO", value: "1" },
                  { name: "POUND", value: "0.72" },
                   { name: "AUD", value: "1.42" }]
        },
        {
            currency: "POUND",
            conversion: [{ name: "USD", value: "1.57" },
                 { name: "NZD", value: "2.10" }, 
                 { name: "EURO", value: "1.38" }, 
                 { name: "POUND", value: "1" },
                  { name: "AUD", value: "1.96" }]
        }
    ];
})(module.exports);