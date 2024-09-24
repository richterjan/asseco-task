const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./FormComponent":
      "./projects/mfe1/src/app/components/form/form.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
    "shared-library": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  },

  skip: ["rxjs/ajax", "rxjs/fetch", "rxjs/testing", "rxjs/webSocket"],
});
