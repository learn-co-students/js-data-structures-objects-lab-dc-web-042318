const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({[key]:value}, driver);
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  return delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];

}
