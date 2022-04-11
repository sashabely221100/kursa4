import replace from "gulp-replace";
import plumber from "gulp-plumber"; //обработка ошибок
import notify from "gulp-notify"; //сообщения (подсказки)

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify
}