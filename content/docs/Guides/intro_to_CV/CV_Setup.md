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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSDHC3E2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDR%2FqttnNpAPF84MmNM%2FgFJcq5Menoh1UkBjaoqNNTRPAIgL8KWBwL7bcROAfFSQBjV4nDITwxQJLQFwgtTiSAavlcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPal75AEI52NLAGAkircAxQKxxSsndqJv12PSWbPdQhB5bJtEXmJk37TUkaEHD5aTncqY%2F6f0aTArMvwVho%2FEhSWX3YCltmvEjFc51cv%2FQ2X%2FkJ5UpNFLuTFhje%2FGWcb223UuTAaBVCf%2BAxo6%2FtV32d3bpOMqfdLJupw3nBfqX%2Fuwhsk40yJUeHEcNow70jBvCSsgGbpNzHy2QHutR8DkKS%2F0qffpiymSD8uqnaqCe%2BzIeLuxkj7flHa66Ig%2FFx4RESSR3JXwei%2F78xdCvH%2F0Pz2oKre3K3xBTqloyFfp63bUoL6z37uxUwMm0Br8A77TS2lmDCitIjB4SHYTJPyBF%2FkvgF17B3Z0LVghZzleFzRCNbSYTjWhiJfsWwaw%2F84LSd29WpI4pV9OYupqWZfyaS31WiHWKwrsbYqJbKqegUYWvinm%2Bnf3d6sH%2FuaLvnK7Z17dklAGi3iBbWqG5iJdB5BfL%2FoIzx7FpctJQq%2FzcxFj1%2F1g16lOX3to0NdemUkJv%2B3asM9Sqb8DpqUCB1KilOpNOE%2FygpnP8entP5A8kbXS8rT7bi%2Fn7EXTfvJVZ0H%2Fdj74IRc%2BkSkdQxTLY4OsQSL96pKRuLdwTbEIN6medET01WB4ritPBKOBSrsJw1Gjh%2FZE5KboZ2he8CqMPzhnr8GOqUBr03SYoPD3b2zjZfCfklKE2nyOSkoY9j4DuAqu6Verr8bYMsa7c1b1hwV6JqVNy3VIwmFgD9HasIgNY9KWDmA9%2BZwbfLtWBppfKgxpk8u4f%2BOcD442tW7e0YsqamageVWR%2FA%2B19e6dCkc20JAULpISP4rolv75RuzUr3NFHea2PLna1PAFYc%2FBelbpaSpvv0NJGxkNr%2B%2FPk8yWXYbvO9QdOYf1ZPI&X-Amz-Signature=ac7e4acfacc4a3017521056cb4762188d3dbd8d5de420605b2c26f94acb00234&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOU6ZH7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD0qrT9kpX6EcUTmexI6vx5iJf3iws4nsjiQFDG6RoXggIhANfJE3%2BIbforzlUCVXBV4SazpCj3uyVwGe9f6NCnegNvKv8DCHIQABoMNjM3NDIzMTgzODA1IgzwtlM%2BirFkXLmnSWQq3APvuCkb9%2FQuM8rzBHkmW%2B2Kdan7oTyPW%2BjBSBcBRUsDtNLKfQbKBFv9ZaCu3gxzKKjUpyMYRQHAbX6zED7OGILx5iHP51x0mhjtlaNiabPqvKHOGbfUw6ajR5%2FhwVQz%2BlWj%2Fb9i323siGDxeQFFP5dgS%2FlfzpKpTta8vFT3SbMwm8pEqSTp%2BR6OFhvtV7beIhXw7NR9EZ49j%2BzB0tVHgjzDPsisyrL%2FK8LBbJ4bN7kLsf8acL6zl%2BqT7IM8RVWbg3RzzXDUJO7cwpaN%2FcyLaDsDiraipF6AbDFIu448eJkdvpNp0JeYKdM0Drm4AwNR2jMMNB6zkYuxAwrL0uG050BB9TJW8X3TFiVM%2BCtZYqvg9u7pNVgApknBdMO2pzfs6ynDjkQJvoBvNDGnw5G%2FgljCtnze%2FF0ignuvnlvUDaJron33bwIqv7Mc9ldaQhdMC45nZNQO10qbuzKg0kICk7jlpVfwLiaaOoS1RZLr%2Bz5EFCMpUpTQ926%2BSp3Ztcl0Gxs5nZJV7Z%2BQ3%2BfduLrqc3tlAo20o%2BKTkw5eeo0rS9BVTkFa06GbJJECe6AOU626cIGY5o%2BjYI1wpz9C9mnxv8E3lUH1SmXjNPUj3Ixm%2FUX6B%2BAdHM8FsDFu2iS95TCv4p6%2FBjqkAUeYL3jvGYkc0NiOBSyADSTfDt11NZlqTlv4zhHJmHBS2yHtUXVpqR6FKgIqfxkSpjknwH6wZ%2FOsXbhXknvrfmGE5ndNta8MXW8WEepp2er6DqqdUzGfnXUguhdWCNWhIzDYGimtPWspt1FKu%2BbG0XPwBvJbmknZGaprSvNS6dKDi%2BPfWY%2BtqCOmdJLINO2I3bu3beAdiG7kmcTnzWkBM4WX0P%2F%2B&X-Amz-Signature=94b94f301bd6e97414212b3c8488bbac778b1aa8a7274fb70acfa948ef4d6a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
