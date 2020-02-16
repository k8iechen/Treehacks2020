# features: [startDate, gender, glucose, urea, sodium, cholesterol]
from datetime import datetime
import scipy.spatial.distance as distance
import numpy as np

def convertDate(s):
    d = datetime.strptime(s,"%Y-%m-%dT%H:%M:%S.%fZ")
    timestamp = (datetime.now() - d).total_seconds()
    return timestamp/500000000

def convertGender(b):
    return float(b)

def getDistance(v1, v2):
    return distance.euclidean(v1, v2)

def convertData(s):
    features = ["glucose", "urea", "sodium", "cholestrol"]
    tests = ["test1", "test2", "test3", "test4"]
    
    x = s["dataToSend"]
    f = []
    f.append(convertDate(x['startDate']))
    f.append(convertGender(x['gender']))
    for i in features:
        f.append(float(x[i])/5)
    t = []
    for i in tests:
        t.append(float(x[i]))
    
    return f, t

def getKNN(newPatient, oldPatients):
    curr_in, curr_out = convertData(newPatient)
    old_in, old_out = [], []
    distances = []
    for x in oldPatients.values():
        a, b = convertData(x)
        old_in.append(a)
        old_out.append(b)
    for i, x in enumerate(old_in):
        distances.append([i, getDistance(curr_in, x)])
    distances.sort(key=lambda x: x[1])
    distances = distances[:3]
    weights = [1.0/i[1] for i in distances]
    s = sum(weights)
    for i in range(3):
        weights[i] = weights[i]/s
    for i in range(len(curr_out)):
        for j in range(3):
            curr_out[i] += old_out[distances[j][0]][i]*weights[j]

    return curr_out