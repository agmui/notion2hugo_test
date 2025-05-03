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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOA72EBY%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAV2Y2YCsv0rDGdp4Muxv0dvfSqeK8ZbWB3ZhhRiyQuhAiEAvigIK0KAWI7lcYDshGNlRuuoNS1saRI%2BEw5qAXssjeIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1pN3GEWwKZt7k9VircA%2FDtO0Ie2NZ2LETbwchfthJyvSP9AiuYCv3cV7%2B%2BfE5d35xWxxKDWDLABLw89w%2B6%2FeTzoGH%2BOwxeOXKqxnC9j4blJIWJ04bms2MbWU8FlHkQjz1otno5RfpEKPRanHtl2HIn2%2FwnRhnVeaANrfk0tbhVHTbxQLq0lY55uvaCA37YHdxQagJ7dnTjiZFhk1rIvz2R7RbRlr%2FNCCmitTGMEdCp3N%2FRoPM%2F%2BqNpaLsFxH0iKSxxvXbA3lvE6VWkUhycLbBn4OMzAN1r29nRkKJb%2BujPyzdHUq2S5u21S1JIuDsbOVF0bwhVJdrAb7SaqgvT4olZQcZ8FUNApbCEvWUWMXbrUZP%2BVFIpZE9c7KxneHL4YOnSLAYqzdYSISwE1HKpPlbVqsh0YknCai%2FD5LkBAYP2D3%2BdX4Tjw7qZQIae1OAyQprHukvbJsI0JyX9LO96GvTXMuTpYXMRdnjro1P0muzGGNJZCuxDY%2FXKZj5XvTai5U1MpDIyBQ6UfLXzN7bZL1PFCGKiDBbawDEWg%2Brhotu4YEhoL1gGJT97ZWaZcnOoTzxQdjVWhB4LgdPM%2Bq0CFBPfqt%2FN3msp4DhXFAIb%2B0FfFPbEUuycwnlLH9%2FZq47kvJPwQyQIN6TomBSGMMWG1sAGOqUBPU0Vb2%2Fqj%2Fgw1KAMrqjlKakQ2V2PCi54oZBedRqo3tQ6HWxi4actertkT%2BRLpTrUrAQeGtUiZcqakYGJOyu1xJu9C7P%2FmrS2rENNJTq0oacgZQElbLNAYkPdhUt0%2FZkYmIkOnacZQFz7%2BL7rTHYldn5mZ%2BbsnueGiEToDup2ntc5POeA%2FhtlqNdQ%2F9ZX1RTHPkzDy08zlmmw8%2B6Ci%2BEzu0VMn0Di&X-Amz-Signature=d2890cf18dafcc98c7620b0e7d2eccefd3dfc5ece7ae60a787091130b112d4b1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLHVZ5ZI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIGV5F5prJfumW%2FWuvO2yOAvjyUy35Vo9fhTojowM9U4CAiB6ltuwOFEuo2kWmMm8mRRQVb1n%2B4GAVSpjdLEWoiCozSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw0NLCEz0zAuL8pcFKtwDP0klnOHX1zUYvdReT72Njm%2B04pVOfOkf0RXmIjqvCVDCkaLuNjMc6pzWNzFHwRb33ZBqLA0vwypav13OqngJS9lsWKa3b8bS%2FKmkFhmuochiXSf8ptthHuJOan12i%2F0l5%2FvHZp%2B3bxVhp7I1wXKXZtOrfm9NlsGzwrK9wL0dRY%2By35XDQ0RmP85WnKpHW1MSQ9dvoHibHs1mSRHyRte0fNtOHwRacgiKXc%2BMtJLNTiGyvXgwxWSFqjxm7lo9sPj5XI%2FfFy9qeClLB5N4vc5mY0DGIKQkljLlmya3vdOBe9%2BiPqMWritmuoraBonrLqcI0cSILbi9bqROTjGmEVBzYjUOMaQL0l8tFpEIsgJoY7Drthly6fegZTbQ3OxkQx%2FTmAVOcl%2BpQ36tYCu%2FCBFprysKHct%2BDUL0kqXY4OChACzRbsb0cweppy64hnE3oAr%2BhTSuOlUW82QKHUFuucY7V9wrS04D5xSnRgbFLOIIlN%2BrtXgv94MFgqB6YQ%2FuijWdhpWpR9QUJG8XuHKFx4%2BQ2DGhdL553qoVx9fnLz3kECKV42fsW0vcjjckerhM8q%2BgU%2FYVHP9cF345BSCvxrAvm%2Bmq5ddAtBtdpWbyV1XgVjhmwiSNTbuqa7KZ1hEw6YbWwAY6pgG9yDjcPjIBGzVY0LrNnEhcgEcnv0tOEeo5kT4K%2B4WkmKMPGEto0bVDi5hSE1vbSiZR3Nl%2B7T3aRj6HtBZo1%2BWo%2FEMc3MO8e4%2F50QHfj3VR2tnUYPNbrA8Cl%2FsZWt2slRbuYpwZtiIh3ltJmDFIOxOD9vmakyTZ%2FMHhONHQbiNJM8Q6KM8Y7qyKEuKIV0HiH4qlKs7uSu3e2smxaJ%2B2OLcIhaGF%2BqGb&X-Amz-Signature=81e5b92bb725c021dfc2462e1a1a4a9bff13cc22cb88ecc764cc92793ec5e26d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
