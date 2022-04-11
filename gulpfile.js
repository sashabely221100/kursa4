import gulp from 'gulp';

//paths import
import { path } from './gulp/config/path.js';
//plugins import
import { plugins } from './gulp/config/plugins.js';


global.app = {

    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js"
//func for checking file changes in src
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);


}


const mainTasks = gulp.parallel(copy, html, scss);


// 
const dev = gulp.series(reset, mainTasks, watcher);


// default method execution
gulp.task('default', dev);