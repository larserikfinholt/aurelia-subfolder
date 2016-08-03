import environment from './environment';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .feature('feature-app1')
    .feature('feature-app2');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  let featureName = $(aurelia.host).data('feature');
  console.log("Setting aurelia root", featureName)
  aurelia.start().then(() => aurelia.setRoot(featureName));
  //aurelia.start().then(() => aurelia.setRoot('app1'));
  //aurelia.start().then(() => aurelia.setRoot('feature-app1/app'));
}
