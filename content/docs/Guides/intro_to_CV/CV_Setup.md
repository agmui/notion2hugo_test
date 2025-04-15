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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPX7AXL%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCocsCSjomifCYwH8Mx5uReNP%2B%2FOTfNbLjr3vr4yay9jAIgbK%2Bx1gr6T7HvFs%2FK9u5yM57S58MKIkReWyhM%2Fvcsygwq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFrJ%2B27kNHFhnqFWLCrcA0MmNKIZCzxMgf3u1vF5eD6kXiXVA%2B6REYNSbR%2BuePwqm01MpD7%2BRiYlypLRN2BCXRZpr1FMC8EeGDKfQFA0HiSUmM%2BjZ3ppx7wNVLik7ZSHVBKRj37DydMLKACkTC3qzSvaiU7%2Fpsjy%2Fjq8vVibTNP6LOKwjqCqpgPdOtiWID7T%2BOVqEc3XHztMZXNu%2FeBB%2B9Bjy7SR0YB4fShgCHeAqYY7azzcJ3qFLMBHjdgl9tvfg5SJAa%2BiT2XGII6IBDfW17Vp%2BPS%2Bz2%2BC9iNF%2B5tYgQmt7us49Apkydt8E321OmbUtdQqhPsMZ6GiVMxO31B%2B%2Fgh8iX45qx8aD74hLR70v0L2sk46Wjs1w94DUbXM8hJe0B%2B1M%2BtPiEhAKBxp6yOhcOVGhcZdWU29HfElaSS008X2kWYz7%2BM3XIXVNIPIUZ9mV0hh9hMbwD%2FpA7BbqZnXRNzxFhzfhQwzwLCi%2BcyV5EZxmgNtz7HvB9E51GeKw%2F0Y2ujzIntmmc5uYKRhqYAydUO3oyFVUDSxh5ndX5udOfDzhsiHnTr%2BhpryzPqu5ytN02SJxO1Mvzh9gQaeFrv4gPmXgU6BgEiZLlP46jiIoKBugOewEmORU1boUBY0lCsumm2x%2F%2FTKYQ6Of5EaMJjR978GOqUBCDZ4DJnzGLElMVg2mhDJcuUq3IwgKEoNXRBt0jiQhln85iJen8dNYPjKLoafQcy5dW%2FECRhCkJGS0EhFvTJRswJJqyeT2zcmLSwmi5S%2BB2QGk5M%2BGm4JpL3Zju0qKWfVIczi9JcVC6V%2BxIUXmE2iCR14LXCQrFkza5fK3je1LqEvEGth1yNf%2FCpwbb4CAyzd%2BL3ko5X1JCD6weeLFrZBLrFY7hS6&X-Amz-Signature=69a697304b9dfd905b3ad6131f70ec015b81ef35e0ddc9edf22f85bada8f2184&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUX2OFN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqs3sPvNcAiwwPVkBZycKQ72L7CEp%2F8G4Zj%2FRuRAl9IAiEAxTRoBSXi9lyb87%2F76XRemWO1wcVHO8Cn1J4VMOPeAgEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGgAJryZ2I9%2FmCcXqyrcA6xW11dy%2BFLqxzFH5dWzD6p4iSsPYczfvdLRUKmbv4Oj4QwLh8XosAzJ9IIToyxnJXDDVW4wRGRFPnPv9%2BiawvOfj4CNq0paEzOyq8f3AWGiuoYOmmAlQL81v%2B3wZEDTjv1T2AZjrPneFV2YCk6%2F6V3G1Z5DWLlcTCPpNztFxYY3vi4uIBdMtfvcom0ZecG2d%2BVWWrD7r8F4zDb298ecYBqcJ1%2FwiWw9QgkXE9NtvTtMdoszrMwfQ7ja1yLgWpiPbw6S5C8xhxIvc0lfwPgRrIoS9iK2EvvuBstaIuxZCCsu3%2BFFjDN2G4y1a8i0Vs5P8OUtO5nm7Fx41xKWxgIixwt0jmBK4AukZdR8sstAcX13BexY3xjs%2FhMQmzn3Ckym%2FJi7zU3WXBSORvzabHhcDas7COzvHoC%2FVe0Dn2vUv5DgboVBxlugkd6yhx7A6GorLlxhBOo4%2FVZTTBpB3Bw3hvxfvcDlBUca8d5gCCqbjn9SNd7ni3ypnOlJEAuDb4ecq07%2FW8keFuCcCbeBAsvBq3tIcwCf3MGMW%2FZdgQQkEX9sI92QThbN27mwOMbXGjiE1ZUWoFWz%2Fxp7zqRYEotSRujVFtOpiiFauPus8ZVuuWT4IEvNKtwQBpNyjKXBMO7Q978GOqUBvnWVbI9rEmmCpdKUTTNPz0V2RSaU31AscyaomGgUTfPnn%2Fkigxk2cy%2FSbBY%2Fs9C%2FZSVwNRSN2XE5rnVLaeqdjunUL3Prhmq6HOrO%2B7FpkdbyrSQPVslk2F9yYd%2FyurxmgbZIwYkAorT0eM0P1gKrKiXC3JH6KZxpTqF%2BtfL17KvWiaab7hQp0289Mibuto179xg9eEFq92WYuJQWHrXfJWv2AEAQ&X-Amz-Signature=f84fcde6ef285618a568fb1665241010431c8151d967e1c0625e4a201cc94271&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
