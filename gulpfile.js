function defaultTask(cb) {
    let a = 1
    let b = 2
    let c = b - a
    console.log(c)
    cb();
}

exports.default = defaultTask