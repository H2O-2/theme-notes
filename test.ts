import * as ejs from 'ejs';
import * as yaml from 'js-yaml';
import * as fs from 'fs-extra';

let themeConfig: string, siteConfig: string;

// Implement function to read css lib from node_modules.
// function libLoader()

fs.readFile('./theme-config.yaml', 'utf8')
.then((themeContent: string) => themeConfig = yaml.safeLoad(themeContent))
.then(() => fs.readFile('./site-config.yaml', 'utf8'))
.then((siteContent: string) => siteConfig = yaml.safeLoad(siteContent))
.then(() => {
    ejs.renderFile('layout.ejs', { theme: themeConfig, site: siteConfig }, (err: Error, data: string) => {
        if (err) throw err;

        console.log(data);
    })
})
.catch((e: Error) => console.error(e.message));

// ejs.renderFile('layout.ejs', (err: Error, data: string) => {
//     if (err) throw err.message;

//     console.log(data);
// });