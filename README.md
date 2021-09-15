# Landing Page Project
- This is the *second* project in the Front-End Nanodegree from udacity
- This Project focuses on the manipulation of DOM using JavaScript
## LIVE PREVIEW [HERE](https://marinakhamis.github.io/FEND-02-Landing-Page/index.html)
## Starter code
I didn't build this project from scratch, I used Udacity's starter code from here https://github.com/udacity/fend/tree/refresh-2019

## Directory arcitecture 
    - css
        styles.css    
    - index.html
    - js
         app.js
    - README.md

## Landing Page Behavior
- **Header (Navigation):**
 Built dynamically using JavaScript(Didn't build it using HTML)
    - Note: There are 4 Methods to build it, they all work (Just Uncomment the one you wanna try and comment the others )
    1. *First Method*:
        -  A very boring method that depends on creating each li and each a solely then append < a> to the < li> element - No loops used
    2. *Second Method*:
        - Used an array to store the navigation items then looped over them
    3. *Third Method*: 
        - Used a for loop to create 4 navigation items dynamically but this one will only create items that has the same name for all items for example (Section1, Section2, Section3 ...etc)
    4. *Fourth Method*: 
        - Used a forEach loop that loops through the data-* for each section ( I really like this one, BTW: It's not mine, it was my student advocate's but I didn't find his repo )

 - **Section Active State** : Built using[ getBoundingClientRect()](https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp) Method 
        
 - **Scroll to Anchor**: Using the plane way of adding the id of a section to the href of an anchor 

## Background gradient
I generated it using [CSS gradient](https://cssgradient.io/) 

Built with love ♥ by: [Marina khamis](https://www.linkedin.com/in/marina-khamis-140941165/)
