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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS2WFGCC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIBjntJbQ%2Fz3uOL5DNjlAJ42IDnPsLwiiFux1Iq7Wmn0AAiEAoLin8LDnNvIm%2FnH26ULEnyV2GZOClcp%2FCQYmVANWWmIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOvV3XHiEBlIrsnY1yrcA9hz0L%2F6eR5fo7VNvFFlIaJHjw65PFjTxk0nbRj59EDcu73AYJXVLs9cGDemZbd0RRci6JCP1JFPVAM0Y0C2PC6A3alBNFAKVKQeiCaoX6BQsGK8yntqQHSYZZHC4PPA6p1sp%2B6h1CvMuo7Hs7SQGdZh91QJBKzNI5vvagi6C%2FEfORT2lhZr4XwxpF8qvyp5qmTI9Jxd%2Bq721qOTKFxxrn0lD8CnnafChThrOSdKFMYFMJAIhIQcAhgqYYu5FIt1QNm74tcPZ3PpEp%2FBQhrUDTOQY2zt%2BEzTeuLcK%2Bn84Toe8vBCb4mTFrP%2B42Gu17DSnLT1sMACrss4lESOvGu%2B2frCQ4ChnatFDOfIIwf3h94di0%2F9EvcUBP6BY4JZcAMN81vqJGac9dMQed1poDn7smmUuq3eiQn0i5nohQ4a%2BOGzv4AnW3ivVR5%2FsY38dYIIoHM8pb0pA1hIdTqdhP%2FEakaPJiwtte8I7Xpbpt0i35BJZTDmj3Gs69xJXHRH6Z%2B8a%2FwbMWecfK%2BCBZOlt%2FvT5gjVHpexJth5X3rePtCONIhtvaup6QkxRRDCiAA%2F4jqTtZipvelCxXVmg9IkOH8Q4G3O2pjD5Qa%2BIO4tOjGgs4VmEcp4vOMRAI4jFdbRMNaz58IGOqUBwJ527cRam%2BAqHxRDF88bGAm5AB%2BWD%2BGdDsHhhKl05Iipw0rV16YBiQkp0IXSqEeN5%2FVtIkIX1nGrPL%2FSe%2BkuQ4jFd0NxBrfLo92VL%2FOKW2wKOslwH4kHCX3Bq9PWMjeyQzMzsFRmXqK8obVlPmMGI4KMrcqqe%2F3lOFRBuBiFZKk%2BgyyuPbn75fhk0sS%2BuJdd0muCaAGgts0POoKOEauKs1pcJBnO&X-Amz-Signature=1c849ddfbcadf82e74c505e679ebebfc6bc63cd70313b4b060a291ab029b4eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FVLNXOR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCkHuxYZ%2BBowLyy0UjAhUJtl26NbbFY4mQNG%2F1vDv%2F4KQIhAN7T3HFhw6Y6RbAJnZFfs51QzPHvxnLpa8xKb8Sda8i2Kv8DCCAQABoMNjM3NDIzMTgzODA1Igy3gS6K4DPqsgGDAjQq3AOk%2BaBhTFY9eKHRrzOqm5ME9T5RISgN4Oxhql6%2Bx31XsWR9ENMZr1cpn%2FaTHnqv2C7LiLugkOuW4%2F8fh7Y4Dbr9VR8Is3KaG%2ByvDrVRA6zh5hvW7gEsD1f3hZo1hbxv2Ta7cnT2ys0sE19FCbZht%2By9DwST7ETKCDXnSVJ8soYTuFCcSo%2Fy49XR3C2NmnfJsyWDRcastAYoHEP4mvEL0FkZUhUejuSiKri3cDYwRweyuqG%2BOb0ppPR2BNSTPMRgjpRm0jUb%2BVW9%2Bq%2FQufbvEj56V0NyGEavwJkmVOI3dYQ0IUsrmlgpyQT%2BnM6EfHo2cNzKeM%2FmzRdWDAxfaal9Yvb6DbrwswXrXfX7v1iXl5hVNgRXlWCA0sHMj78xAr%2F4F2phZpWs6QdHdGpJJi%2Fbo4dwukg9W2jIZbrpkHfZOkxAfM0cOk6gq5GFHTKttIhkvhzVQuNO1hK6oxpDA131t6vBKkfmmoh5l2nMa5xEa5XHaN%2BISL7%2BZw%2BWy18ckfihFEqpjOSVTw7R2%2BwqzKFbHhUvOXu2VUYhLH1XEl9jqaNPSUttSP1aE2BMQ%2F4%2BrPJmgbOr9GVks%2BdvcZVaKsAZtnyWxrJ%2FBFSPbcMMdv5WTgTs%2BhsJzOb3GUEtA6LpLzDFs%2BfCBjqkAUWaZFRW%2BMrD%2FW4IB6OOSzwoJwmD9BWTbk0Jn6QpcMDtZRvO2s52INWT%2F8IXmCe0vkuxxZNwz0ipzvrjiZY1%2BWZ0AY7oXxzRM4lnHM2jk2BZ7fCAJzjsLra%2FKOgFsXEJHaS8XrxVITEJPCjck8cWE0KzrlqMWKd%2BRuy0kgHf4UqNcaGb9ZbuC%2BQF7gK6I67JOLmFT4TVMjkx1%2Frolzu7e%2Brd2WD7&X-Amz-Signature=ce7d3d721e3b694980474a3521027058a5d52b763da38d40cb2f3a9b572e144b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
