

import sys
from subprocess import Popen, PIPE
datas = [] 
data = Popen(['node', 'AppData.js'], stdout=PIPE)
while True:
    out = data.stdout.read(1)
