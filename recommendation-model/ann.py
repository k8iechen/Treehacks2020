import json
import numpy as np
# use natural language toolkit
import nltk
nltk.download('punkt')
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()

# probability threshold
ERROR_THRESHOLD = 0.2

# compute sigmoid nonlinearity
def sigmoid(x):
    output = 1/(1+np.exp(-x))
    return output

def clean_up_sentence(sentence):
    # tokenize the pattern
    sentence_words = nltk.word_tokenize(sentence)
    # stem each word
    sentence_words = [stemmer.stem(word.lower()) for word in sentence_words]
    return sentence_words

# return bag of words array: 0 or 1 for each word in the bag that exists in the sentence
def bow(sentence, words, show_details=False):
    # tokenize the pattern
    sentence_words = clean_up_sentence(sentence)
    # bag of words
    bag = [0]*len(words)  
    for s in sentence_words:
        for i,w in enumerate(words):
            if w == s: 
                bag[i] = 1
                if show_details:
                    print ("found in bag: %s" % w)

    return(np.array(bag))

def getSynapse():
    # load our calculated synapse values
    synapse_file = 'ANN/synapses.json' 
    with open(synapse_file) as data_file: 
        synapse = json.load(data_file) 
        synapse_0 = np.asarray(synapse['synapse0']) 
        synapse_1 = np.asarray(synapse['synapse1'])
        words = synapse['words']
        classes = synapse['classes']
    return synapse_0, synapse_1, words, classes

def think(sentence, synapse_0, synapse_1, words, show_details=False):
    x = bow(sentence.lower(), words, show_details)
    # input layer is our bag of words
    l0 = x
    # matrix multiplication of input and hidden layer
    l1 = sigmoid(np.dot(l0, synapse_0))
    # output layer
    l2 = sigmoid(np.dot(l1, synapse_1))
    return l2

def classify(sentence, show_details=False):
    synapse_0, synapse_1, words, classes = getSynapse()
    results = think(sentence, synapse_0, synapse_1, words, show_details)
    results = [[i,r] for i,r in enumerate(results) if r>ERROR_THRESHOLD ] 
    results.sort(key=lambda x: x[1], reverse=True) 
    return_results = [[classes[r[0]],r[1]] for r in results]
    return return_results

def getNLP(txt):
    ans_temp = classify(txt)
    ans = [0]*4
    for x in ans_temp:
        ans[int(x[0])-1] = x[1]
    return ans
