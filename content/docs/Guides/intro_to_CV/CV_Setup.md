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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25U3KXR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC0NRMK0dNkpQpPHq4EfFoCI%2Bg02pdbTZWE%2B7hI53l34AIhAONgeA8aItSeVexopImBOEtjhNniC%2BYr%2FOU1HxV%2B2qqMKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqItcmGua5qocH1yIq3ANLH2YFBtNPW0e4tLyeAXxxko%2Brj5t%2FYOqsOVH4Itun%2BF%2FoNqjpeT7mUhdqfJtFKBiK7xlWx08kh26Va5Slku5wiu2t1tG2JDM9UhFJLtH%2FAEgZGW%2BoJlqTOmhRsG0yuthotMawdtZ52Q7jlScJrSi3BH7zqJgH%2FHmOfVDnQMGML3%2F2136yzqZ9CE71Z6NFrGHdq3SDngXnHi46lxm6i6GWDD0G04ce8DuPKX%2BIKZW3K4s%2BXqIH9zXINYsKflKXYL%2Fi8Qy6vJtGnQsTqvJZQvqL5CiKDTkOO0OvhUkhbsynnJUnFFUxTieThOs5VO72xn0YbbO4rVINOta4k3S9mDXib41bU5f25%2FPKNrXOMC4JEumeGyYML6zw7aTB4t1TAgtqmFKN5Ku5IQ8b%2BTJXVWEYEiMMDkXqle65eEGyNZoF4EPt4HgeJZafB5T8nrxwhBewszW8oA9r9apVaEGlG3U2KoG2a%2F97ja3BGf0Qq6lWgcFbZvb1gGDp4l3sQVDSQfsmWpLgqVaYbdopcDquqLrYAtmu6hJgFriUqvJHrmO3r9wpxP%2B1K2jeDpqMigy5rByStvKvHjrUQs0%2FoVdXyxDKTB1EIUryBhRokPLhoVzHdVDO%2FbK7jTbXxX9uBTCDuY6%2BBjqkAcTuGmVz6BHLdPnLhHyvcrNCBdbSZpUMYPcAf80qFRxgTXfUlo7j8P4BVV0UwnjVHy0nEwJsEL%2FIGyP9pr5S3KvkqeohEJ4xTZj4%2FPuFDeVZx6wj542Ya4pRjFAL5cXg84lEt4F8cz8Hw5NYblo4Q%2FG%2FKZKHx%2FZ25jlgX4rWcIoKhNB5H%2B0bZs74aM%2BJ3NEAeFhBH%2Byc%2Bm5M6kmbp2mxPmjXv%2FXt&X-Amz-Signature=4583a306a85564c53e0f6dcc8574dcf8551f87a50430dbe4ee6c33ede735e25b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPSNU4QZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T004007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCICkc3A4mO7MjvJfmAKfG2WyxjESwHBVz%2FleqWTS6DvEoAiA%2FZk0zQ%2Fasa1KdyPncPfBo4FIocczfKCBHDxVXJISN2yqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuo8FYBGVmUi3oPWgKtwD4poHzcIzP5VdXHHRowe%2BRw3LwWMVKfOGre9a6Gp77dkeedZ3%2FIOXoz9j75qnVAof50x8qikRfe3%2BEK16ulDGSE1zLZs0zFQf%2BZZuaTR3aDLR0JSONN4O6ZHfK3ioKOLCQFZu74pGu8%2FfYbe3ASElxcmmUpyyViNu247mqy6IksdSz0QAHoxxu%2FhqHrTYSRz5bB6AwCOf%2BdmuW%2FKdlEzc00%2BWfukhmzt7Gh4ThliBN20946lIlaG%2BNQov%2BDpiG2ttZoAvPZDBdLVp4%2FGE5E%2F44QcGwBPbAknrn8IMTpYE3yTWkGrqtkdTKIZ7J9E%2BKxl6YRf1p5RWAT6le3qvRfo3fRMBqc43Yq6KvJbW9YpypEx2wbsHAqtPVKKhRXhuzSiVy%2BzcXYL7jjw7lPlvx%2BRx8phX1QXdZ99aTPRLeLu3zV%2BpUIwogjdKlTxuswmneoZsbVK94M2Z%2FrSpBHl6pUPIbHR3XR%2BZ6efnqsprN7ZPkpoJ5wxNkJLxyS4QUFnja%2BRqBajTHsA%2FeZpcX8nq2Nh6rsMsZd2JQPkhUJerW%2FuPiBn6Sa4zWsq3JBRbVcYFFXIWQpsoNxYxwT0qDnFyXambJJn%2BC0iPtgI5vLpGFvKoj2dzHkldlx92rwMuAk0wk8GOvgY6pgH2mL%2FuXfpvQtNgBBOtzaguyzsAwbEQzQslh5FQM6L9OaZxeonGx2N85zKMP0EeCzv5UxAOBKJ1Hm3AdL62Q%2FYJKYoV%2FO1ZYcYpctm7FrbQUD5BgPo2%2BlceBtrRjnml60JwYhyUGUQxSkdhYgV2P4HGh%2B%2BhEQYSdwLJ1%2FZjQg9C1rBCNNn7kQ96X2vo9avTk8IDm%2F1r2mlGtyaABD9210rspvbbj%2FnA&X-Amz-Signature=d8b6a2321260c005b0b3d87dc3861969fc15c146401c8c4b5ad0abd1d54df0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
