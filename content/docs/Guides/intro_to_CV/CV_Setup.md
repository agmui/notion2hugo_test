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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHRL3O6E%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIB5sjcCgz5LQxWWno6OADa%2FuTubhLQH8OEC4mbOs5bsnAiEA0XZKQfcukdn1a06kPWCrr8Hk1jg5vTgFPIb6kDLe4Agq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNSce5PrI83BmsTR6yrcA%2Bh%2BntcgU4N%2BGFtbO2VnIHynQa1W37DFUFKrv5ytSceKUPuJVk68zDAsTPV2EvdNhzsFxK8XDrqNYxOtUerKQD4a0ESHIM2lMgNgVal%2Fbvgj58ajbHJ4qa9TakaEMYHRNuJgc6Z19eVSuQfAiYPOQMDfeFePCqfiBHneHtyqj3EHF0Tll1vqluWoG8hitr0rAM7cQAzOoVNaP9sHYdN19%2F9z%2Bgi35%2F%2BVh6vtVFo30fv1sZlbZeqK2WoVCmqVicay%2Fjm6I1gqfii000vJTaOM3B61j9IVzXRa%2FuJEsbX3oOlH7Hnp9hZE%2B1xaauNDe%2F%2FlnIPooF4OPAyOagdKZAASg3mcc3fTP%2FOoSP0rTOzL84NzAqYWIcvsr563E8f9vljJ0uKmeGu2zOd7b842Ok719VwmABl9n6K87NXwZaYdqvBy1N97q1Q4FK5q49nj8xe63WzxgDy7zstlL9N6PY1nuvKBJSs%2Bt%2BuYbKXHTSsVqVSDaZWhJMg6r%2BrEttV5FAky4nxpt6C1eI7anElHoj2WdZpF4FHqm%2FzbBadssgofZCxF913X%2FnXauM6622izwcKMGoY7CuY9%2FreK9tkIfDHRGZAwcp46larGcNKwsQZZxl%2BOyWdpdUn6U38N4RKmMI3mxL0GOqUBAKUFcFH1fgI7aqr3C1GymwP4uM5XO4Plm6WejoxlrJhmfvt75Qs%2B5Fi1wKHsEyhSEvdziAi5EyHjqpT3Xv%2BlBc7O9qEl1W7vW7IDqLC4ja5AY2Rim4oSNatwaNipOnX47yr7YZa91Km4YLpKzV220gHdgtUIFVEdHtqezQkp2MSADSNWp2gBnChM%2Fpbt2od1cVEja8msXmgGr62fM0LT9Z%2BTCrG2&X-Amz-Signature=0b65ed2d1c7cd7c6adf4366f34846ee9205e3583c4d1983fa8aff3508ad261e0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDY2QBVB%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD5UnKG6hrJ9ctNDH22agigiwAXf17emLVvgAAXhtKzqAIhAOK2bjACyDiX8k2HB%2BIQZ3FPXkd5xEbRZyTc9Dgs2TzhKv8DCFIQABoMNjM3NDIzMTgzODA1IgyOz%2FeRT2KFv4jlnMYq3AOcCwn2vwqd4Sn9Q5JY08lGYSpVNcXovTnn9aOo0v736k%2FEMh58ZnAeAbsuS4guSTOUAVKGLmFurM3pC4W2N7oKPzSUp4589duanL%2BKsYwIuthkDzWe1gkvfYWYQWkowewYjgovKz8KY418mbRHA%2Bs7ZRPJXc3eSVbAf7FmNa%2FYeZS4CpIdv2TjTr76X4tkUr7b7NOn%2FO9omIMb%2FIGD3ZfvO%2FkL9R5m9arCzpy74qxy5ZdMvY%2Fe6cxON%2B%2F0wc6zMCdlYb3E5mk6pcGcGPNIVhx5P19E5yWMSCRus9X5SgZFzsx4WxKdSD3Csy1hKnE1%2FbzavRv38qDxxOooQN1a%2FmxauQ3vI1x8aIUR3pqdVz0jyMu%2BZGIUlgfsr%2BE8ngxdvcYthceMXiKmGA8HOJz5%2BgkPw7UgkDenWHNlGo%2BdJ05ZCoWjWNie7e87zDmsTvcs2Qb9p%2Bbw1fjLahf1eu8VB3qeshZ22v25vXm8NPau4ZVVs5%2BVxnHIsDjJiC%2B%2FyNzSzciEJARYs0U9okVsH2NZDxrkKLkosr%2F4i9dbLivVtSxa6o32XpSspoEVd97grWPNX2fbv3r%2BpktiSWl%2Fi46yxJYprVaqBpFTVUVmczsm08JM7IuqZpnLLgLkhO2sljCv5sS9BjqkAfC3cRJQUYlgYPM7ZFLZC%2BoMu%2FfawnoYCbYVNK0%2FK74Gaq%2BbiHiF62EtErfXklnvwzLaYm7n%2FJu%2BFC8P7cGlMjlZvk1igRD0IDZDI7h35OemCGBhJ9hhGl8Dx1XiPr9yvCB3hrTOVQfhPzWYIrZfuo64t9BoFvWO0l5CKkCxOhkrZLIbYEvEIwL43JrThR2ikCwjpknCI2NU4HRHKZByQZcbCMqc&X-Amz-Signature=9a03ce3c9da935a77a0a4539d0fc277d89c87c4913b4a60a9289bc6a22254d71&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
