
import sys, json, numpy as np

def estimate_coef(x, y): 
   
    n = np.size(x) 
  
    
    m_x, m_y = np.mean(x), np.mean(y) 
  
   
    SS_xy = np.sum(y*x) - n*m_y*m_x 
    SS_xx = np.sum(x*x) - n*m_x*m_x 
  
    
    b_1 = SS_xy / SS_xx 
    b_0 = m_y - b_1*m_x 
  
    return(b_0, b_1) 


def read_in():
    lines = sys.stdin.readlines()
    
    return json.loads(lines[0])

def main():
    lines = read_in()

    
    datas = np.array(lines)
    
    xDataPoint1 = datas[0]
    yDataPoint1 = datas[1]

    xDataPoint2 = datas[2]
    yDataPoint2 = datas[3]

    xDataPoint3 = datas[4]
    yDataPoint3 = datas[5]

    xDataPoint4 = datas[6]
    yDataPoint4 = datas[7]

    xDataPoint5 = datas[8]
    yDataPoint5 = datas[9]

    x = np.array([xDataPoint1, xDataPoint2, xDataPoint3, xDataPoint4, xDataPoint5])
    y = np.array([yDataPoint1, yDataPoint2, yDataPoint3, yDataPoint4, yDataPoint5])
    
    
    ar = estimate_coef(x, y) 
    b = ar[0]
    m = ar[1]

    
    print(b," ", m)
    


if __name__ == '__main__':
    main()