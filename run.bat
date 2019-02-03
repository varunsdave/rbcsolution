SET profile=%2
SET installDir=%cd%

cd %installDir%

echo "install and start front end"
start cmd.exe /k "cd %installDir%\frontend & npm install & npm start"
echo "install and start backend"
start cmd.exe /k "cd %installDir%\backend & npm install & npm start"