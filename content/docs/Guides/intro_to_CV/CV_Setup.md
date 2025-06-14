---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZDIIAH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD7yWJej4u7Sr5cGkvqmw8zcQRGMcmtyROjtDIHNgIFBwIgIwJTHjBUsoiXxSK50%2F8geK8DKRZxE%2F7mnFQeHzF5Je0q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGeV5JMXBu8PiZFCfCrcA89p%2FW%2BqACg%2F7v3Ech5xfBBXbeb73J5tx9uLtlCnUPzU3%2FgUE4zUG%2FP55oelJLW%2By%2FU4QIlBZvspnT5%2Bdj%2FsU7KoeY9AHCUqw64Eu9EQMJIAcPAxPj3xPyhAwuPhtkRcnBL64cFvfqP3gcAoI3Jy3o8MyBInhQ790iv1NMMPyW6OTL0IkgotUBFfgpmzxnXELrFyRuOVoJpaciezD1G%2BQQ47IvnMw%2Bl%2BPa5MpXq9lhYaSbl3A7uz%2BwCuvI433wgdTF51lVGOXJyQYCL6ZKoAgu6DpJRhTWPN4RNMnuY3%2FflCwwK7jJjVPWbW28R%2BWLc7YAb6qsGLDWsXFwgybH%2BHdGEyv6fqy%2Fy72QlIDHDHgbSuRQGroiX9rM4V2DQA2gIVa31svCrlkCBDvPYmBWlQyaLw0MW4wjYHty7cnwSIlSGBSNwX1P%2BP60xDuzQIi%2FEA1Ev9tWA4NluJ848kaYk1AotuVR%2FV7tk8MHmWTWkbn%2FxRnFIwHWjvboNLI1KHOXUAvf4mFrf49ldonFQaRhob6Ha%2BseKWtMHI2ZvMG1loVxB8kwSeSCPbmFILxW%2FIwRnt4bU8ueRzOucN375JCgFjRMZ5ynDDrMjvjxhKGff9nidCae3F6LSkZg6YBcA9MMrss8IGOqUBlaLLxtGfrCZUfSVxwvkyykvT%2FgYdwBdtWKOYfIGzaang5Hc52kHBZQYiGLUEj8HNi%2Fge5qxCk85BKPZLoOTxK5cT8HG6nlfd5GoTJhH4KKGtYwPs4QBBB1kUDt7CddiaDDl%2B%2FhbdSsZIu8qMZewlQoBOiwfQOlRL4MyIcyQPHd6fC8v1Fm9Rq3N26e5Rquft4Dkv%2FVqXo4dIXCnCfRNFbj71Eeoi&X-Amz-Signature=9e507ee3eea947090100f34646d4c9d081a94f2f5e0662b1b6a0defd1ee607ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EI2IUKK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGZuMTRE%2FSJ5RefyLGZtPF0vjkUR%2BFHEHXb%2FdG5vj8Y%2FAiAChfbO%2F5w6fcCEk8Eb3odEFozuJP%2F0kS3kVDH4dtkAXSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMllAUotI7K%2BZ8lAeRKtwDJT4P7d0y1QevM%2Feb8On8ZNPS%2BDpDbbTU%2BFOeS531BFiilwTykKuTVpHik0ndNejjjxBaq4bEuUdrp1ru2W0Oz%2Fu2g7ivLONBcPd3izAw3tTCQbrg5uXRE4wxgA7laz0RRzznoK5KiEQ3WzyGCdqMKjQuM0vjuBo56Q%2F4Vade43RG8YAqPydR5ppsvVCEUYQdhTruM%2Foe8PraWr%2Bxp54sX8SyvI4%2Bv1mzEtOIXpbQqf%2BB2361UNrewIDvlUPAbTT%2BmH%2F4tabNJFYXLsVf8RF%2BYt6428ED1lCRAyhLedJQcWYZvLHzO3hAczv3HMswYg9HV85UU7W3pw0m44H%2B4jkccduh0IFZGZZi2h8Rvx0s%2BZ6CJC825gtiHN5F1%2BgF7eQ5mzXpS0%2FJNbzG4NjRq6TKUhKvgbtZAC8BDBaklLmY6TYig4Pqyf3QsESeev80NjePMvPLMXWkz9Gy2hk5EKfFL7R5kRBpKFrtUV%2B9FZkfinYdwyE4mJZAmdQUUI%2B4bWqFs7llZIqDjPTLUgzq89fOY9oX%2BzauXTmv%2FjC0WoGrbz93wIlqLVA1i0VzmmbXWMp0Drng0faOQGw9JDXFsL28Mc%2F%2Baf65FIGP9L5j4RJfD6uajf7sBzaKLBTKD%2B8ws%2ByzwgY6pgEM55MpW6wbbCrQBwEfKSaBfNloeU9vxceI%2BU%2FJT90MgXdFowb%2B9ffMYeQjDS2UksiCPu%2FyQSTw03Xy82J%2FdJxryj1baNAznDSjYPZoL2gUa7Yz4Kn%2BmgDJZEcOCuXgxjWuPhjyYxpYMA%2Bsf7VMDcCVRP4Oi2Lv6tAHsPAo%2BbVW8biH8qNkfbXcZpEzTfgX%2BduO5i5dZeA7rfwFpa6rqeSpOKRlQwmr&X-Amz-Signature=e888d15fc96006b4e3fef2f0d4e87ca0c8c7491eefa78e83b6fb5fba0d732b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
