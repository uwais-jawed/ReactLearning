# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- mine -->
apna component jab banao src wagerah mein to  .jsx hi rkhna hai VITE mein and jo ander fir function banao import kro export kro usko first letter capital se krke krna hoga file ka bhi 

dusri baat ye ki app.jsx mein jab aap return krte ho kuch web page ko tb sirf ek hi element kr skte, <h1> Hello World </h1> ke sath dusra tag nahi de skte ,
isko solve krne k liye apne sarey code ko ek single element mein wrap krdo, ya to div ya fragment - <> empty tag wrapper </> ya fir jo function return krware ho other components se usmein jake likho. BAAT itni si hai ki bas ek single element return hoga ab multiple ko single mein wrap kro wo tumhra man


app.jsx jo ki ek function return krta hai main.jsx mein uski jgh main k ander hi ek khud ka function banake bhi rkhke usey chala skte ho
in addtion to this usko aap as a function() bhi run kr skte ho instead of the standard syntax - <function/> but due to optimizations and good practices aisa mt krna //this was untill 22:36 in vid#4

koi aap variable bana lo fir usey {variable} ke thru inject krdo app mein ya kahi function mein jo bhi rendeer kra rhe ho
ab in the end koi bhi function ho ya kuch bhi jo bhi aap render krre ho wo ek object ya tree ke form mein jata hai but aap khud se khud ka object banake nahi dal skte because .render function k kuch conditions hain and specifications hain jo wo accept krega isse pehle jo humne apna custom react banaya tha uske ander rendering ke liye bhi custom render function khud se design kia tha , but actual react mein kuch diff format mein expect krta hai jo h - {
    type,
    attributes,
    innertext
}
aur isko fir React.createElement() ke ander dalna hota hai ek variable ko reference dete huye, fir hum direct us variable ko render krwa skte hain.
ye sb react ki official library mein likha h git pe pdhlio 
//end of vid 4

