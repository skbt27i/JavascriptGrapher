

import sys, numpy as np
from subprocess import Popen, PIPE

from sklearn.linear_model import LinearRegression

datas = [] 
data = Popen(['node', 'AppData.js'], stdout=PIPE)

#xDataPoint1 = 
#xDataPoint2 = 
#xDataPoint3 = 
#xDataPoint4 = 
#xDataPoint5 = 

#yDataPoint1 = 
#yDataPoint2 = 
#yDataPoint3 = 
#yDataPoint4 = 
#yDataPoint5 = 

x = np.array([xDataPoint1, xDataPoint2, xDataPoint3, xDataPoint4, xDataPoint5]).reshape((-1, 1))
y = np.array([yDataPoint1, yDataPoint2, yDataPoint3, yDataPoint4, yDataPoint5)
graph = LinearRegression()
graph.fit(x, y)
m = graph.coef_
b = graph.intercept_

rsquare = graph.score(x, y)

while True:
    out = data.stdout.read(1)
