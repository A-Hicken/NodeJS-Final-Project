const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "My Personal Library",
    description: "An API that shows book data",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/swagger.js"];

//run to
swaggerAutogen(outputfile, endpointFiles, doc);

//generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
  await import("../server");
});
