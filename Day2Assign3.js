let browserName = "Chrome"
if (browserName){ console.log ("Browser is Chrome")}
else {console.log("Browser not found")}
let runTests="smoke"
switch(runTests) {
    case "smoke": console.log ("Smoke Test is executed")
    break
    case "sanity" : console.log ("Sanity Test is completed")
    break
    case "regression": console.log ("Regression Test is completed")
    break
    default: console.log("default is smoke tests")
    break
}