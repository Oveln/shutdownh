const { exec } = require('child_process')

window.exports = {
    "shutdownh": {
        mode: "none",
        args: {
            enter: (action) => {
                exec("shutdown -h")
            }
        }
    }
}