import sys
import json
import ann
import knn

print("hello")

newPatient = json.loads(sys.argv[1])
print("hello1")
oldPatients = json.loads(sys.argv[2])

print("hello2")
result1 = ann.getNLP(newPatient['dataToSend']['notes'])
print("hello3")
result2 = knn.getKNN(newPatient, oldPatients)
print("hello4")
for i in range(4):
    print(0.6*result1[i]+0.4*result2[i])
