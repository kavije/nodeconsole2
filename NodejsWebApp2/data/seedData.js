(function(seedData) {

    seedData.getcurrencies = [
        {
            currency: "IND",
            conversion: [{ name: "AUD", value: "47" }, { name: "USD", value: "61" }]
        },
        {
            currency: "USD",
            conversion: [{ name: "AUD", value: "0.61" }, { name: "IND", value: "0.01" }]
        },
        {
            currency: "AUD",
            conversion: [{ name: "USD", value: "0.61" }, { name: "IND", value: "0.01" }]
        }
    ];
})(module.exports);