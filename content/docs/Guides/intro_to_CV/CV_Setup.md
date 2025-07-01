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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PHJ4RD2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6vLcYNK2nxB9IYUWrTPb6diGBhWJS92dUoB6G%2FhR4CgIgQ3jG3%2Bzc38%2FQrXAmw8zHbrvXo4NtfQSEXEkgZG0S8g0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhXRDg0jWFrLOQ0WCrcA95cc3IHpobcSZEy79SJI50%2B08VNifXRvRo5mn5E3fBU0nxJf7LnnKry9VNoO7H9Phew06nWwhJlFTAzGNruILjhwzyhUeC1JN3A9TpLmWPBgM8XDHTGfjT%2FJKmI2Meqp54kG5Ed3VRSi2IBxGG9ZgVebjA6UHhFLhoyIHUUR1KvtOiP6e1GoAWBVXbMyeQpLw5zWLKi1NJcHPPOVBcGdWkomBgbGrceqHzDw2Sw0%2F9VQUnTzrAlI5Yi8j%2Fxe4mw25tzHKC4UseoyAaKKmOZZdSzoLeL%2Bpm3ZrIKxJb%2FJLP5ukzqCF1v7SRuXIhNFi8xibE7y5WgukSqPk1d0SaWaoCsgWuO5%2BTMzlQ1DhBdk3VHwrk9r8ul0rNTCBW76qrv1VzXXxIZQ5QL%2BEe%2FM1pvZYUrbN808D9wj5xFcoW3HMTd8lRLliS4vCiy17F3mflsoMJa9ftz%2FlDXOErkyIkjtKul19QNcby9VaPhboYc1Ag7KH4yWpaXp74slAotYyQxa5jVZvt9s1W3oBLaGehzyTAVCQOO%2BEXCl2SdiM%2F%2FgVlxast%2F0fnIQW3t5cxiJ5Tsygk%2BihtzyTn4F6QHbrDoK9y38L7gWwe0LRQSYZqjYaQ0pZQM65vhmRFvi%2FpfMJXEkMMGOqUBTZQm1DGq7yBJrrhGAm8B8%2Bi3V%2FIa52TIqvrNzgkgQBLPGCNsyrbEXvat035gGm5SLFZlxxGm8Tv5QD%2FIw6T8NpEvuemuDwId6NzkRsI0vkJBtmGLOf6qZd%2B38jhqs0cKSpB%2Fcjj5c1bw4En19QoovjuHlTMS8poWVaAKNB3kSN3P8vp7DqMmsiWHR7fU%2FbmJ7bWyCS6ktEdzxh%2F5YWoOsQ7JD2be&X-Amz-Signature=69859eea85fd548fcc34ee116f4c0266121f41d615fc8c7773f550a852813eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XZBMB5B%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd7gCqcu4VGfTN2timeqpiZr9aMigNwHc9UNW2uSUSmwIhAKFyT7B1UBiJiiKe56wG4ehgYGN%2BVQuEXLaxaOW2oqfYKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFS3kI%2BsyotVYRvOIq3APRhBo%2FTAxQXYvMRoGP%2Fxy7aKkk6mljpNV4OlFZ995AevLA%2Bwpv4r%2BQeqZTil9RbJL%2BDFcV0i9mvBqXwNnzFmzMakKBpjQOjnuziiTxXa1ZzfOsHuvSsx1gBQdtHFaJ8T9VCsWy0YKBexyOXuKVMt6xOCbdJWF6gPjqJX%2FmX82%2B3LHooZenLQcClsECTSAIjqhJIjyQwKpI2uOe7afqYF%2BgxB40vVwOxl8cDTIJlW0oNAbhJN9deppvEaPLZiIK8ImEXjRoBM0ATOwHsFIptjNefEItD7r5w2hpV154uDQX7LxDe5kO%2FGw7AlVRYPEZC0jwECGUzO8IEwXbmqmeobnvnjv%2Fwa%2FPNNQZEZmVeuo%2B92r8NXJ08mnAJQYuW1ecrmbOxapAup7R5%2FlIpj%2BhUR7Gl%2BJf%2Bb8w2Eb8gt01W%2F9Ugmnrpq8CJM%2B2%2Fx7htmP80ztDnmloa74vHDtKvBl0Csmi0FPvtRRnf18CwMReUnUpnbZEsPlcumXvFQ%2FngfJcOiCcT0G3%2FLWPZ9xZ7%2BnmEwq7oPcriaV1%2FwvWIU9kd0jGC%2FqYEOx8uPfbIlVCOL8pLjRF4c6KbhJk%2By08m%2BsdMi1XltakBM0Bn46088CnbeorOj2tLWkjmvbvUvdo3zCrxJDDBjqkAeYguS37WP2GhsDzP%2BtF0wuyzRQwW%2BRox%2FYMCbEGGyCq%2BK2fzh7298TBcsgQbK8h%2F4poUYVAneWo8TMUAD1XtkM3myHEtYf312x9TELvpnLz84bNq7zxwjHEjDtUvWzT6SLtcYj%2Fkych%2FYMKr2ffNss5tfsaxLLDHFjZMKwiEP72NtG2j6yQjSK%2BrnzT1mEbDw7rwfabdyyPFeXmjmwnGgx5f%2Fda&X-Amz-Signature=e4b6f32f8399efd42e1d84416b854b5e2a01a40328ca86e3740da967603039a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
