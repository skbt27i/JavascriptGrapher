

import json
import sys, numpy as np
from sklearn.linear_model import LinearRegression

def read_in():
 lines = sys.stdin.readlines()
 return json.loads(lines[0])




def main();
  lines = read_in()
 
 datas = np.array(lines)


 xDataPoint1 = datas[0]
 xDataPoint2 = datas[1]
 xDataPoint3 = datas[2]
 xDataPoint4 = datas[3]
 xDataPoint5 = datas[4]

 yDataPoint1 = datas[5]
 yDataPoint2 = datas[6]
 yDataPoint3 = datas[7]
 yDataPoint4 = datas[8]
 yDataPoint5 = datas[9]
 
 x = np.array([xDataPoint1, xDataPoint2, xDataPoint3, xDataPoint4, xDataPoint5]).reshape((-1, 1))
 y = np.array([yDataPoint1, yDataPoint2, yDataPoint3, yDataPoint4, yDataPoint5)
 graph = LinearRegression()
 graph.fit(x, y)
 m = graph.coef_
 b = graph.intercept_

 rsquare = graph.score(x, y)

 while True:
     out = data.stdout.read(1)
               
if __name__ == '__main__':
               main()
