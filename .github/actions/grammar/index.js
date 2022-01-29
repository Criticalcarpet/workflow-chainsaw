const yaml = require('js-yaml');
const fs = require('fs');
try {
    const config = yaml.load(fs.readFileSync('test.yml', 'utf8'));
    const values = Object.values(config)
    const unique = values.map((x) => {
        return x.slice(0, 1)
    })
    const flat = [].concat(...unique);
    console.log(flat)
    for (let i = 0; i < flat.length; i++) {
       fs.writeFileSync(`dist/${flat[i]}`, '', 'utf8');
       console.log(`done : ${flat[i]}`)
    }
} catch (e) {
    console.log(e);
}


