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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EPKSTOM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICCLfq9v%2BGVcK0LrzaVKSzwNx2Qwfzx2eYl2g%2BMKdHH0AiBGGQ%2B3SP2qAO5m%2BDTx9KAhQFbtdtPPDhPqMTlaDITc%2BCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMIe31onah4%2F%2BFTL6nKtwDhwNcNj%2FLn%2Bp%2BdqSKR%2F7Nux1qvS%2FOAfgD2OAxQLwspPUrh%2FyY6VoAwRIWA2HBDd1rnkC7NoKvQWwfBIVW5mWDJf7YvwhhnEtOLK4larsOeRHrgbYDvHoDOnfc%2BMvIRBdmqO9Opsbn33smSvVe2HstFTnlvtVlAVt9ueOdxY8bNtsAs%2FeNIODIPdCifG0UGw4E3wDUd31iQjco6Ah0zXd7qN2se3VGUxDjgf9ya%2FvAcXjvWXn0zfOo2kfGp%2BZvAavs6%2BXZIoPQZiGQ2hm9K8g%2BnWNvJisQ%2BYMcP2KN9osWTxptV7W0sMt%2BdDizFhOqWNJ3zHq0Un5cTPbRT2A75nM7atG2V06KnRJqVkoweb%2FCf7LZJXid7YFmx6Q8ZGUuL4DjIf%2BG7DuQlzCyygIdukRM6%2BY1UfFNtaPrmP7z5DS7NEPcAqngr3uowgYoMsfOEon37KUusvZQ01LYI9KvwWtmuVUvoqe8rR27wCfgmks5tZeC9BATv31Wz2HV1AIt%2BxzAboPoU6nDlcWC2ure1rpyXk8eIADHWmlNb2rAWW32f%2B6eTnoDPeWNy5fcQkCpzMdCOwjs21uw6hMScosUDXj7vttToLYFmzvrC%2FB%2FOD8CNdBSTb1MBbZkJc9XZQMw55T%2FvQY6pgEmFF457g2vwzxdfDAKYXrm%2B4Bjb9QHVJQe1rNUu%2FAEQQM2rGig3mvYbPc1JOQHlKfML%2FrnQKOoQ4GogyvglfRhmiIALeWRQVqw%2B7bj8SUoItjIckZ3iZ5hApfCU%2Bo9%2B1fuG3gTUo9M6KoUQ8zXPd0nmTzd7Hcamv8zcVfuowU%2B%2B2Q50ombkpF00dI9CBW4bnqlkQABzfubqWKDlS%2FcnCq8dNHIK7lH&X-Amz-Signature=5f7c57af38a0b9ad1cea5ed56bfba4ff9fb85cd7f2cc88bb89f46281a8e0424c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPXZDQ4R%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDEDswGcxZLpOqBn08Z%2FLtsKH%2FKIgCVFZFvo%2Bs9miFmpAiBoL4bA8qxEULYpC6RCJTHfkqY3ZgQpBpsSRNFhKiTU1yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM9sEH1kuKuw5IoCILKtwDJyVVx3%2BrEXsjijS5mIMR217HOX3VZUdO7VF1BfPbU1MUH%2BNGCtnbyMUpw2VYTL2kiYBSKa2K5VzyqXonkPa%2FjIqYAxmHJPDZvJxiyiUZmByWOexOOIH7o6HAcAwq79CcQNTUS8ppGbHwfleEkD7MnhKC1J4ZltMnprXKZ%2BaN%2F6nnqUhJn0u7HXhHVqLnLdKgOoQTHo2uWMk2JjDl6uRnqfsv9V4IwpwEDMkSt1oq3wbePp0j4N05gptr2pSuMlWye8YdCjGaUgTZgvexCG2sMxqpucmzcuCKE2TVaer7Y%2FpluWd85azInBrNt%2BZNvQoFJztdPJJU43sgpibSlpEpHMcTNiB5d2xBoYPOqLh0bjdYklleq1sCWn9WWcvf0hyuEnmufR1pdvdIdLIw5XN%2FVdSUvhB%2BTtihsPUgLOvhV%2B0V1xWqbLX1ghwijkF03UyGLlOWIarE6%2BMVLETvL3%2FZPzBOWzPqWJVvczJuKRbs79ttaHdFKJ9EGGTwOQI9yJC4%2FHzPBhRLw0DkHv4PlVmZUwueCDLUPz%2FKOwUpu1moao8Dux0QqrO8MJ3snsrIfX5lLSQtMg0%2Bgv%2BOIatyFhmnDuxAWsSdoQHIlmeF0J7A8QxeruIzH5OHmzrbQeMwspT%2FvQY6pgFBbvioYvyWosqkc6W5W%2Bpv2mxfDLSbM9vU6qC8XqDUd1FFWvyMBMfcgTLVWNHPuWyrNkjgo7mqUiOXCSCN7A29jTPFlwHVxbaKHazujbkdqiwYjVobSy2kdlykUG0mY9CVsNORy5u6uuurfNBmAJlfNagJAJUVI4FkoD9MmrIvAXoYklIDGmAIbcOnNhDFyCpbpEZn3pRzURcFUfMuaZ7tVG0yL7oC&X-Amz-Signature=2ae48a4589449c773bd7d9844c3766b7dfc6fd68dc942d617150858078e09b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
