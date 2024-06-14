# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- mine -->
apna component jab banao src wagerah mein to  .jsx hi rkhna hai VITE mein and jo ander fir function banao import kro export kro usko first letter capital se krke krna hoga file ka bhi 

dusri baat ye ki app.jsx mein jab aap return krte ho kuch web page ko tb sirf ek hi element kr skte, <h1> ajjaja </h1> ke sath dusra tag nahi de skte ,
isko solve krne k liye apne sarey code ko ek single element mein wrap krdo, ya to div ya fragment - <> empty tag wrapper </> ya fir jo function return krware ho other components se usmein jake likho. BAAT itni si hai ki bas ek single element return hoga ab multiple ko single mein wrap kro wo tumhra man