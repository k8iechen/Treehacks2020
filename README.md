# Treehacks2020

## Inspiration

An Annals of Internal Medicine study* showed that of 430 physician office hours observed, only 27% was spent directly with patients whereas 49% of their time was spent on Electric Health Records (EHR). This is not including the additional 1-2 hours spent outside of office hours each day, dedicated primarily to EHR tasks. 

We built a comprehensive app that uses ML to reduce the time spent on EHR tasks so that physicians may have more time for seeing patients.

## What it does & How we built it

### Task 1: Ordering Tests

Physicians have to order tests for patients based on their medical records. Some are regular (e.g. annual) tests, while others are specific to certain symptoms. It takes a physician a long time to meticulously read through the entire patient medical record and even then, some less common tests are occasionally forgotten.

Our solution consists of a **Machine Learning (ML)** algorithm that uses both Natural Language Processing (ANN) and classification (kNN) to scan through patient medical records for doctor notes (text) and test results (numerical). NLP extracts the key words from the physician's notes and uses a pre-trained model to identify which conditions need to be tested for. Likewise, classification uses the medical profiles (previous test results) of other patients to rank the need for certain tests.

### Task 2: Adding notes

Physicians often make jot notes on paper, then later sit down by a desktop to type up paragraphs to add to the digital patient record file. This meant that more time was spent on re-familiarizing with the case, not to mention paper notes can be more easily displaced.

We implemented an iOS feature that can automatically translate **speech to text**, so that physicians can take elaborate notes on the go, and only light revision is necessary later on.

## Ethical Considerations
_How much should we rely on ML/AI_? The technology has advanced very quickly and predictions are not more accurate than ever, but where medicine is concerned, can we ever leave human lives in the hands of AI? Throughout the process of building this app, we've been very clear on the fact that this is meant to be a helper, not a replacement for physicians. While we hope to maximize the efficiency of the hospital workflow so more people can be helped, we believe that it would be unethical to leave the health of people in the hands of only AI. Thus we conclude that while AI has proven helpful in its ability to reduce repetitive work, it would be unwise to eliminate the human factor completely.

These considerations are reflected in our app design, as physicians must approve of suggestive tests for them to be ordered. We have designed it such that the physician must click on each prompt to order the suggested test, thus reinforcing review of AI's suggestions.

## Challenges I ran into

- compatibility issues between Python scripts and the JavaScript backend
- finding publicized medical record datasets

## Accomplishments that I'm proud of

- being able to evaluate using both paragraphs and numerical test results
- learning react on the go!

## What I learned

- how NLP-ANN works
- how to connect between different languages & platforms

## What's next for health.ai

- develop ML to be more robust, maintaining accuracy for a greater variety of medical conditions.

## Sources
*Published: Ann Intern Med. 2016;165(11):753-760, DOI: 10.7326/M16-0961, Published at www.annals.org on 6 September 2016, © 2016 American College of Physicians
