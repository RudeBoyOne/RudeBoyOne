#!/usr/bin/env node

const browserSync = require('browser-sync').create();

// Inicie o servidor BrowserSync
browserSync.init({
  server: './'
});

// Monitore os arquivos do projeto e recarregue o navegador quando eles forem modificados
browserSync.watch('./*.html').on('change', browserSync.reload);
browserSync.watch('./assets/css/*.css').on('change', browserSync.reload);
browserSync.watch('./assets/js/*.js').on('change', browserSync.reload);
