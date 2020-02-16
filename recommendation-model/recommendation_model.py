import json
with open("test.json") as json_file:
    data = json.load(json_file)
    print data['a']
    print data['b']
    print data['c']['d']