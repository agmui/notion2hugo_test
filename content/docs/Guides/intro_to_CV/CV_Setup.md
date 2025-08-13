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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTRFTXPC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDznX5n1nOpBZo8b76%2BGXAI7mbBkxlUue%2Bfy1pMeB%2FAkgIhAJdovuiAdvogHVrCENLQFhmTFnLRsc9bz%2FeHwzKNgwHdKv8DCCcQABoMNjM3NDIzMTgzODA1Igx2PJuL7Vhl%2Fw0eYakq3AOYqhGIAPFDTWtR2GGdgW7751xSeyIqS7HKRilf2IgJsvKcQYXeto0%2Btfg42k0Hr98jAHyk8KutA4L4pzT%2FgIlncxEYov65r7xOOD9JhRQOesnfa4P0pknJFRphHrKIh0nh32Sz0B2PBpnBXaTJg5JrYwRhwgYoNr4%2Bj3uTfQ1T3cnTkTEubDXUNk8CsX7OTdjwhIkWAzhuGzp2TRDzDoXppzAMAyOzvpEr6HlPalBzdrQsbD4LMz9dkJAIMCcMoG7xa1rLpinJgbU9Ruetw%2Br%2B4lyT4fA7eps2HmshYHD5qgcNxWK40D%2BSr80NZIai96kMzEsFSVx5mH6uTWSGxGsdNRwLMzz9Amsrw%2BtS99uf3JdXKqDQLHwJoROvK60TNqUkMYZfEvDrwx5HN7pozGWxgB3GeVYrPENhqQSZ4diq1xqSOTczT0%2FwXuQsjDUeskadpgKm00Sufqj7%2B%2BmxbFDeWmDRA66DveDtxDtxNMz%2BeGT6fO0YEJ%2BLiuDo6Hm9fTAx3D5U5FPfZ9l4vKXxSoLqxQrLXfbzFm0KyEwPbPypR7vaNScplv5jSWRDND8h23E0jbxEegyqf5mav8Fp5dO1Bjh8rr%2F95bHRw4g%2Ff15y%2FHlsvx%2FtueZpuU%2FAZDDh0PDEBjqkAbO%2Bp9PU4fOPXtqfHMARKy3L%2Fw6oyvV6PuCv6VawGyrolCrJYTYeUNS3BrgqnpL1nJPjqvfYDZUvVakGS%2FPXi8Y%2FK%2Bb%2BQlyiisgZ9op6Z%2F%2BlmpxXfENqVZzMG5f%2BOisRehqHPdTRonslxJCFB6IgGTK3877BmOYuAKrYIXAxC1btCJzkAHDsGKCZAYXRho9oAZKLtYmvTLdzLRBr6Gd5zHLbRpJR&X-Amz-Signature=265c6d6387de77ec2ce74062316ee122eebebf6fe5600a584db08d983bd4e26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCVE3IUR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD88MFByl7QCzER9uMmnOQNWyPy0ZcilXha5osxzT%2Bd5QIgUbDrRpvpWWT2ETg1NebvmAJKlh%2FAWl7%2B4tjRh9tjktsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCI3vQir7Tg6oWLL9SrcA99gNdtUUzPOmnlFhbbON1RIDhz%2BlWyS36BqldTULM67hr7eMZ0KSJI5JmvQ%2BOsmPgozU%2B3lFQ%2F0dun%2FdTU%2F9hQk%2FkirywSUOaRDtz6c7wuKfqJIc37poLKZ2I5LX8zA7gQqOror39D6Ave2tBTetXz1mU3E89Y7JYyTPQnbsAkyNdiwRjYhpsbgDx%2Fz%2Bv21jzuxswORa6lkQrmAuhw0yMY9mBeDaSkY2vKbHw7lxsHVpV6ntKyeUlbs6%2BeFST2mngsO0QeixE0vVEw3eApoaNfFhKfrejjjpzczIeECWunIyoc9Ht1l8XYEjKWCkfyI2TEsK4IpUDvTmAImIYpvv0zcDVBEycX%2FXtyZaSCBIeHGaIUasXBn%2FMzsBZJQEMNDZI18WnNGXrDoZeYYM04A8fXfWEne3rXvM%2F0FbHWi6scTHZu5jWcMVPGrWCmMfL1EDeV6D2mBRQU0KXfEPARiec8VhcElL311%2FBUBZDedw3gPklAOWSAfiCju8AUOGuJOhTQOv%2F3V2rE5AJYBnXUYix2WNyaq1ewUaEoIS67ST%2FtIhOfN7NrKmh9Ch1tU5khunz2zsS8F%2B7twB2crRlkEGCQIEVahiRmb2GFmxhco5T9uh19JzPPxHxsuWZnlMLTR8MQGOqUBtLvMmM2F78ZlW6ejr3FiC6eBE23cBDhi2OZLSatyoHrneur5sca3rXxvJ0bOlxPouHWmNVkBHomw2KxeqmwzCU3JITDidPhbwsOTlxODFNG2pbTfZV50wy9aef7nKwvfb%2B56ElvfPPK1cEBoNbp9Q5Qui3OFwQArUUPfHxL0jNcMpD0DpQw43RTn%2Bn3v8lN7QRZloef0B3b1kc4oYCgffxFUKHex&X-Amz-Signature=ef6a98bdc8648e84a64c2828ab3ceb32fc9b625ea0824b0f510f63f2b362a647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
