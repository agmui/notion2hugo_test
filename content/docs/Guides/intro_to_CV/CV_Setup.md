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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4VCCNT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKMgmNu2p7QIKDjL1rBHdyRf8IDSjs7weLMIamlh%2BBRAiADZw2X6UjZlUQyocykt5wMAAL3ANhjNfF9T7noUpFipiqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2zP7ZdmXrIXs%2FP%2BJKtwDH7nWe2eIf3j3TI2571jvzAeZ7rCrgYv0Jz5tvOxVRHnSdVCivxJJjPjuMoD9s6P1NCGGK5BkOE6wCt2WshqiY62SnvdtIcladf6eFI6Xi1qPwd%2F7m%2Fd1WuD1OsP5HkfOEJo13oiMAciEHc6QpF%2FCh6QFYKqF0IhxFeAK4Tvv6MjPfiyhHJcTDIAQVx9l3jLnAl7rafrgY0SDDkztoY9djMcs5c3KLKomNAmrsX5vFwmW0lPRujNjkSJ9szbl3t3bFvl2ZvaFJ%2F76x6qQgfakp%2FSR4CFDPTjAI6VPUUq6Q171f5W7JmDoBqUX0DU4HEyMHRJe1HuAoGMg96iomsG6pFBFtcAkLaH3RReDEPY58oy87xRwCHY3H1WGtbq3E%2F5t9FvOnrxxDwegIs2VippT1mB3ReypBoVkT84JBgc%2BCJ8oLGwePSew8NtsgLcwQueWvGcSNi2j9BdQNOp5HFGIjptkVImfL8e355ZZqZgEVK%2BLwC6SM89%2BaGENOc0bidpOtDGttOXym72gHScLteogCu7U0GFG9mDuxIeoqQbTUZ5iDm5goTxGVpRlkB8Uz4yjEHx6pqFWDqn%2Bf86rZZPalxkN8Gxpj4kjkxHYZ1Jc%2BEPXr0QmfHdIRh2C61Aw7bzTwgY6pgG6rnSxtl1%2BG7eqtBAm6V2cbvpcYQdwxRAtroIi2XLoYdmRhMmaKQX6Zh%2BGrEzd%2BENlcXtUhilr%2Fkdk2BnCQaQe8zuD%2B1ud9utm895lE9WrATilFkAhlcoa63hzWzAabYvLd0yZmhtXnzFU2o4pHhMymHxtUMNhwhJiCY8GodJCIZqmbRRDxVcfEW11zqMh8GyaterRTec8xOg6kRUN2DDgqYb6aybm&X-Amz-Signature=54549b8ce697a41ff1a61631549d21bab270164e5f398e28ec1c5b28709eb682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUHUE2T7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFVb4hrtXmqpOCtFAU8MyW%2FJ%2BMpz923Jaj1homKlQw3AiEAj1mLCinZez9UYyE%2BpMCXdVpWeLyz3%2B8fTvPX4Ypn65EqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB91C7rjW2fGxZ2vLircA8YqrCnZvb784H%2BEf5iPPUhHdZQf5uvz1deP10eb0Oyhf%2B59HMMVchm4DtiCguTAfxehVj5CUdixPNh3H%2FGsQBs56HwNpSx94g%2F%2F09WkpAaJPJU4xpKG%2BgZMNzjACWVlaZ%2BjTrA3pTlHHtA9RFx4vbZVqaKRI2tEQrI3aHkNhvVRKQ%2BWsStH6561O62l8%2FhiShwvyOEd0gj7M628wVafI8QW3obCZ7FEWNfinMyrblFLEN7nkJPP9Mu%2BnbQ3kZM80PItc9DcGBTl4JLurK56sOkIhC85IAaahBmydLi1wRKD0SPpBli4rDnedaeiJgUmJlwl4lm1l5tLG7xFxZdzrREoXWVwenXrzfVeiBFpyRFIEPbHDeVYx2i1TpuBwucgMf1Vszbqk7bZXitEtObIDJv2uON2OEAdwpy013NN3DptHRvzUYJ9XqIvGF9Ig9WHrMpf5U3ECSMaHBq56JYHqigAAsfTFyMNulI7R7FCRVP%2BeHXT9kDL87OhdTc7v%2BE%2BMat9LWpGAhucSlc33T5LsQUfIXikiWm20apXKozDQ7Ke1SXiqPrjhVho0SDCMiBUjo3btx%2FfbeCjZKw8QwdfhTH%2FNrNoRp2xWF%2FBrbsfW2w3iCHF6bM655F7IRFTMJW908IGOqUBd5XbVjP7Rit%2BaLMXnqO5Bd1dALnCjMMgSrfChyVoYvvYwOteWIB4uIiT8Yh%2FfheKSYvDE%2BdGW4J9XWxSKzVsvrjbUo8sByoprWPErxYNJ7DeOrrSNeLdPwwCGF6aRhvLYoWxtTqZe6LGdt6PkYQy5pxzTcFkheXtbjfU2sBgAHlgortWT3DRpj3a%2B%2FZMwzyfoImiYrFifkywm%2FBO%2BmjKn%2Fn9jQS6&X-Amz-Signature=894f19495e9026a2f90d9814137afaed434b14e5cad7891ff778e315d8c522a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
