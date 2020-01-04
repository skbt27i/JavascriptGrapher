# JavascriptGrapher

Proposal:
The idea is to grab data with some sort of front end, process it using Javascript, and interpret it into a linear regression, which is then displayed to a user.

Project Status:
- Frontend and backend now working, rough display of LinReg equation/trendline on page, no coeff of determination yet
- Need to properly format LinReg equation and line, add r/r^2, add axis labels, integrate runtime in one command


Before running, get python, pip and node!

To run working frontend (scatter plotter)...
```
Cd frontend
npm install
npm start
Go to localhost:3000
```
To run working backend (sends LinReg data to frontend app)...
```
pip install numpy
Cd backend
npm install
npm start
```


 To run everything (eventually):
 Go to the backend, then... 
```
npm install
npm run-script
Go to localhost:3000
```





