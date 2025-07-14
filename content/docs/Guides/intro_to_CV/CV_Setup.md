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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FVZZSV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDQgGYF%2Brv9O0cjQNInsvUlPLlTaSQZBvlfIpdMDB9BvQIhAIIVi23qWtha48xE0p4YKFIch4DSJ9Z4uSpmAskE93HSKv8DCDQQABoMNjM3NDIzMTgzODA1IgxTPksYDAYePQZ60HIq3AOJwCur5gE2RIUpYJKg2L%2FHqjaRC8Lmc9KT4kkDjW%2Fzemcgt5ZBo92UgvqNSKgd12pP3W1eD%2FPyNiig4J6q5Y2PWQfU5wYCaG7YAUGbaGcDQT%2F%2FfyaYhcIkW0hTLDGzjcdnpp%2FVW4r7E9ckkLo%2Fnx945MKCtsqTgSViMDrFAxn8VBEw5b5LZSsq0f4VTVBx0RFAE071m2H10kKRwg1PhUYSVZzx8x%2FMJvIKLqN%2F1hbYYXYJc1xwfAt0q0cYfWrnBpNgRuNiCETyKX3InEjHg3y50vNhPCIHSFu1N1jvy9lPr5oqqd0w0RjqOOje96pL%2F4O33bftcdwL5ASVhIITRu1jvLtf6IX%2BuWVRI7nWc46N6vtYOu6vVKcfDFUEX1hUg4DKWWeVMhtWRdJERReXx1VI%2BP0b5yfydT8LtSB8N75fSf06BEY9dCysnem%2BxFLNFaAUDAl6njAUNQf0%2BCDnGJqW%2BaIutkl4uHbMAHkk0V7Gm6yMpt1n4mwhvphCQhE%2BxMyJSyFq1apcKYxAWYAyjjCEh4Z8vqs7mgT2SR4%2FnTu%2F3ALXzbKboPZc0VdLgSckomNTu8ukySs8%2BBFl2uPSVfGaItYGGW6O7KbB3mJuWkATHtZRBHgmFCxJnWRyLTCBpNXDBjqkAa%2BpZhoIJh2BBxOkC3vmeablKXjvzJZ%2F5AD2BOdwbmvOCLjURyPuW7%2FcwkrqHDeN%2Fka1CfKZkj1rNq4EYRJzVmc%2FSdotsgZkeCWjxpB46Fx%2BEz9oLvV5N%2Bihq2P2kJZcab9lTNQZ3yvTbKb1qIyxU%2Fuml7lcOHpwBKXs9J9WyVUuonkGsU0zfQFA%2B6uXK5Gz65b%2BcltzbaVQleIlqTKNojkkSR66&X-Amz-Signature=81aa18527136d465cd86f8b9a2f50e33e170e07fc7445d1dc6b9ea5e698b2460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3T4JEJ2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICfj04uh4n7lW4xU4m85How0347sHp%2BDgZJT7r5%2F36OaAiEAwhjzbwY2JHq6uFVfFeGjtTw1NMAojQGTg%2FWbVCfv25sq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAkA8q2fk8fVF0wOWircA35GgHSEQJMfSVS8Wg0K7RHlt9nXhrKgRbpWRudb7SO4kPKMY2NRboTJ%2FjqaIyF7ppxE58G6ljFfRlnHk2o3iSMhvkZc1KzJSW3Uz6jzOhogQQ8GRD3RUJL74gkKhe8WRjZBdR%2FWNP8PhUPTujmREpFJmfFAlWWa6DrltNKY8rhPjK56b%2FcvvkYB%2Fa%2FbpMkzlDbEozkncGkKHNl5y1Vt1JFU0%2BHEGlbaGqlT36bmUO19pmuqoiHZ27IdcbAnCblUwJDGAsgeOdrT6B0%2Fxhlsu9HHcatjyu7XK1y%2FMRO8cfLnIfjp4ntYES4Q0FH9FXQz61mNgFjaCOLa9TSVTzUCz4rqHZjuKA16TTALxUtDEVVSK5HxXS3DcGII7IGmuSYXfu2ZHM2UN%2BXq1S1r2nsY8VSedQ7G2jycrQNHe3DQlS36ACbZRHiI10Je5Rn%2FiLALOPA9WPqgi%2B94hA3BqSpcuQw7VLp93Z7R2vcSWUGM3snnv3qjGqTD5bMMVinUcMZ2yFqKmZUcQCAWN67yXb3QkZlBM5yvg0GF9pG5GN0FgSTc3Eq0TkpdXGbI%2FVG4Thf9MqwcscswzjqAv8jn98180gSpOtAlUyULtfJFGd3JE0bTTXQiwA4gJ9vE5g%2FuMPGk1cMGOqUBYvQQUk4GDvE3mKBDym3O9CC7nuNK2r4cGQYZamCMQSfwxC%2FKMwcpE560gGjqiZU%2Bpcos%2FWw7POiwMEeHs56zm6dJBqDcOOBDKiOQpk6WUX5858pnQeqR4DmuTg1MTZMOYgwO2JrDo7VrFQR6OWu67cr7%2BAK1GolA3bQTMNZQoKzdSN%2BSBvOU1LjymLX7A8YuNFXxuh5jOJIMbV%2FZ8H5M7qrcIasB&X-Amz-Signature=477c7490f12b9ac99f7606bb64a596e8f0e7f8d35f233442428b7bece80084b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
