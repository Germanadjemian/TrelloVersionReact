@echo off
cd back
start cmd /k "npm start"
cd ..

cd front
start cmd /k "npm run dev"
cd ..

exit
