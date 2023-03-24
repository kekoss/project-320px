import replace from "gulp-replace"
import gulpPlumber from "gulp-plumber"
import notify from "gulp-notify"
import browsersync from "browser-sync"
import newer from "gulp-newer"
import ifPlugin from "gulp-if"

export const plugins = {
    replace: replace,
    gulpPlumber: gulpPlumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
}