# JavascriptGrapher


This app grabs data points with a React frontend, processes it, and interprets it with a Node Express backend. A linear regression and its corresponding equation are displayed to the user.

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





