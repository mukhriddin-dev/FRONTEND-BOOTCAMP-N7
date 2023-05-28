### lesson-5

- Node.js 
- package.json
- npm (node package manager)
- .gitignore

### Tailwind CSS 
 - introduction
 - documentation
 - installation
 - useage 

0. Visit https://tailwindcss.com
0. create a new  src directory >> index.html , style.css
1. head > CDN script

2. npm install -D tailwindcss
   npx tailwindcss init

3. tailwin.config.js ->   
content: ["./src/**/*.{html,js}"],

4. src/style.css ->

@tailwind base;
@tailwind components;
@tailwind utilities;

5. npx tailwindcss -i ./src/style.css -o ./dist/output.css --watch



- colors
- units
- margin , padding , border , border-style , border-radius
- display , block , inline , inline-block , flex , grid , none
- transition
- position 




