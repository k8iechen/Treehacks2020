import sys
import json
import ann
import knn

newPatient = json.loads(sys.argv[1])
oldPatients = json.loads(sys.argv[2])

result1 = ann.getNLP(newPatient['dataToSend']['notes'])
result2 = knn.getKNN(newPatient, oldPatients)
for i in range(4):
    print(0.6*result1[i]+0.4*result2[i])
