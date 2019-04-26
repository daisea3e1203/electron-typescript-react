"use strict";

const builder = require("electron-builder");
const Platform = builder.Platform;

// Promise is returned
builder
  .build({
    targets: Platform.LINUX.createTarget(),
    config: {
      appId: "orgmodeadvanced",
      // asar: false,
      linux: {
        target: ["AppImage"]
      },
      directories: {
        output: "electron-dist"
      },
      files: ["dist/**/*"]
    }
  })
  .then(() => {
    console.log("build finished!!!");
  })
  .catch(error => {
    console.log(error);
  });
