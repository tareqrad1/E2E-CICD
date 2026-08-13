const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3gxf7p',
  allowCypressEnv: false,
  video: true,
  videoUploadOnPasses: false, // ->>>>> معناها انه اذا كان التيست باس ما تعمل ريكورد وتصور فيديو 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    email: 'raditareq15@gmail.com' // and we can get this env in file by Cypress.env("email")
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
