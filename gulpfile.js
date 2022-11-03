const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber')

function css( done ) {
    
    src('src/scss/**/*.scss') // Identificar el archivo .scss a compilar
        .pipe( plumber())
        .pipe( sass() ) // Compilarlo
        .pipe( dest('build/css') ) // Almacenarla en el disco duro
    done();
}

function dev( done ) { // Debemos activar el watch.

    watch('src/scss/**/*.scss', css) // recibe 2 parametros, 1 es a que archivo voy a estar escuchando. Luego la funcion que va a llamar 

    done();
}

exports.css = css;
exports.dev = dev;