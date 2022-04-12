

import sass from "sass";
import gulpSass from "gulp-sass";
// import rename from "gulp-rename";

const Sass = gulpSass(sass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })

        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(Sass({ outputStyle: 'expanded' }))
        .pipe(app.gulp.dest(app.path.build.css))
}