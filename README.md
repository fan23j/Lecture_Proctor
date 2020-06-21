# Lecture Proctor
Lecture proctor is a idea demonstration created for MLH devHacks. This hack received contributions from John Kirollos, Jack Fan, and Mihir Patwardhan.

# Inspiration and Product
Given the state of the pandemic and it's effect on individual conduct, we wanted to introduce a concept that may provide some quality of life improvements for the student population. With the mass transition to online courses, the precendence of mass open online courses(MOOC) serves to highlight the potential drawbacks of online learning, if not apparent already. Even through conventions of common sense, there exists undeniable correlation between attentativeness and learning efficiency. In particular, the downfall of MOOC is the lack of accountability, resulting in lower attention retentions, a constrasting reality when compared to that of a traditional classroom setting. Our product proposes the use of eye-tracking and face detection to determine the presence or absence of user attention during online learning. The demo framework was built with Reactjs and the face detection was achieved through the WebGazer.js library.

# Installation
Install Node.js from the web
```bash
git clone [link]
npm install
npm i -g react-scripts
npm install axios
npm install react-player --save
npm install react-select
```
# How It Works
This program utilizes the open source eye-tracking technology WebGazer.js created by a team of students at Brown University to translate facial movements into commands for an uploaded video. Minor alterations in the webgazer.js file, specifically in the area detailing how data is stored (lines ~ 45,000-45,300), allow the program to recognize the presence of an embedded video and automatically pause/play the video if the viewer's eyes drift outside of the boundaries of the screen. Additionally, any movement out of the frame of the camera will also result in an automatic pausing of the video. These alterations leave room for more improvements that were considered but ultimately scrapped for lack of time, including a rating system based on the number of times the video was forced to pause and the variation in eye movements.

# End Goal
Ideally, the end state of this product will operate in a framework like Canvas. Teachers have their personalized accounts with lecture content and assignments. Students will be able to access this content and be psuedo-supervised to hopefully optimize learning efficiency. Further from just lecture proctoring, this concept extends to exam proctoring and even live-stream tracking.
