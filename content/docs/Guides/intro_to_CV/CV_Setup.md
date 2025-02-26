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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FBEOSZX%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCIQeKoJ3wq4GUHqyOttQHJEGkpZfS0P8wcvY8hz4gEOwIgVXhWS6bkotfsHZnXkywnh03vG5gctqwcaympa2O2ftoq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDMqca9WTjRBkrhWRISrcA7KeCndrHWKbshMqN9XM3M4eNvTO4SdlbfE6R4CaoqLHZCA%2BHBd%2FUfuX73%2BIj9VQDxQ%2FTL89yzKL8i%2FMNXkIbvE1g%2Fwsodd6fYDEuzvuol0d3H5HdCKzAa4TY2w5Ee424TTNivPlTrbo8L06o2npX78XSxdddVjCCdkgMCS6f1A0Mp5Y4jT1O7S6s9u1CX5jwZrDTEVD%2BYii4kFgFCzvzvNi18jZcng3IEOVYqfGuAH4emGMx9pj29U0TJtzIYlJYmjL3fw76hc%2F%2BunRcyrp089SrgAeqfgDMD1TfV%2BbrzHGRcVZuyd5sG8sKAoGEw659DfHo64HOvm8aCP4UAy3ZqRxnUM4LQVtois%2BpsPwliAMuuQiRLqEG%2F5nXSBeEpB4DThrsDYcuuXNnzj4Qcif46yKzioDYYNJ9Y4pudThK6u2hnIUshaeJVzlDXpKyHtoumfaOt092Pi2Qg8iYsFvo1gsSdaBtMvm6MWBna6F6ZAA3OCBBei2HEZalameud5y6OyfI%2FHqWmM%2BkbzM6xvk4l0N5KVLAax83HZs%2BNYgwjwrHFm%2BlYEUeBn56rE1BnZituCeBePN2LSjsJikI9tj3OezSvfFEhjc7Y%2F9ZA4v7n1BDLJdB541QZ6rk%2Fo5MIeI%2FL0GOqUBTFazlcDLPDrgbb%2BdHuZcCYv1NWdiLRHO69npuyTjEmlPiU%2BP8z%2BLbzjlTMdD0BPRjQ6otfWQdqpr6Li59igg67Mr9rM2sYSO2LM2DXqWlR6DZW74XGwENw2ZOZpCGJI%2FZrG%2Fl9JoW7yk4eFA4OO6Ewpgjy9h5Ay4dMkc5VoGsVFXaJAXxjMqXgTeLvmH%2BKxcVp%2FdW42CcTRllBKIYJ3sXlllI7mX&X-Amz-Signature=04e871c865e26cf295d54ddd0603016e2478c3611547af1e63323d401e6b878a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JOH7RM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIEikzlWVPvkPp13nY8t60kvNAdMFs5W205gHuS1Dj8VxAiBEPE3rqR6bkXToPzPQyQO4riojd0xeiEz8JGFVxngxnyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMy%2FhpaDRrH2fIeRCJKtwD1B%2B%2BicyNsHnAY01hQsLQEFMK%2F4Au%2FBSenVfvmekkzR%2B9ZDeo87UN5Pd9StN5MY9gzWos3p1k5MBJ6LMFxUxS31H0slv3EUL07mtVPV4Flk7SkZctWRoe2Esju7xWSsxURkMU%2BN8JIw8JSXV%2BGDbfD7kJu0QKW11GHBAXjMYukg%2FXoNRi12Jw5a4FIwGLpU4r0guLn8Zrz7XeK4ZitOGVc4ChF8lHZf6Gv%2BCqb6qiKfT%2FG92MpXyVxa9NdJ%2FAqWRr2R5tlHA5lFWy%2BPxWXTnZMJhGxAttYLR0iTz6Lp11fUacXRjs31TuccUj0on%2BVD9eNxpQL%2FXSkwv%2B9nlEZEzn%2BG7qTkAi7zpFr2lCMD0ZI3aEgAXG8mgIo9OYgiEL%2B39q%2FUpexlj%2BEZTFpFlQwrEZuKsv7faBZDySvQLK0WaiaVQZIbF4yCBJsQq2L%2BCvrelA8f9CHNJEg2o7x%2FiHyJfFwhohKtxbYuWDyi7Xmc9UnVRRGx3hug4xgGI585YasFZFfv2elEA2bXu4PfNTVmjzQ7tZI7hxmqVkACMW%2Beqw6KRrj1dC4%2F36hU9pDhVXGRQdTLtCpCsKFRy7LFxjZMEkEERwTsvZo6fxowjq56J0abnfkLTT4nI8Yjq0SvkwjYn8vQY6pgHdK8pdDV5bfI6EMQVneTJB%2Bl8OAeNrVkXbqiglB1APUqMD41a5zDL5vWMCxYuAt9Lx4yDJYFg5LleNJk9cwhlzuN8%2FvssSbc7DSKLAHSnrVPkgjYvhwC6qbeJVTIGEc5MoxZvjeJfcUA1srAbQ1AQpFMgMMCAkzIgeAnqRorW%2Futzflr46vw4A5IudKBEZDWdRgwGy%2FI5IwdzLFYPslekyr2ftuCVf&X-Amz-Signature=ca48aa2c9c634d57a8d50d467029ed158a21c113100a89fcbe08a36909189468&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
