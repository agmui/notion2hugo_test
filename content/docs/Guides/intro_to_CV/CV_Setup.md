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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIYE3NDC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCXgfmrLuSkAB%2BmD%2BoJSMI6vbBWNXuiquSsC%2F5xxEERyQIhAPmo%2FDgpZLWPNnaSVLh5dMl5ZgFwKZ41F4ae1cFFgHvSKv8DCFwQABoMNjM3NDIzMTgzODA1Igws7URfhOgqx2dbYYMq3AP1lyvDmgVQCnEFYWTvg%2FrUiIEHw9ZzndNuH8Mhbg26p6cOCVC9ttTOBA9YyXwtO3bh7%2BDw%2BlWS9M6PTh1XYYV0EAfm1xP0No4%2Fasu7ZDbeAiZR51%2F%2FwfmoaiW9foyIraJaryXuVmP9Ow2mj9mbg1iAKIDPWFHqPMMCgteq%2FGjz3C3DV39Ph2joNsplqpSrcDXujpYXvtiEbGfdsz1H6kDOKKnuBf0PuEfGr%2BA1KFZ8Yx6Dd50oaTThUcfhe77iy28O1YTfivuDjPvVuIUo5t9OP7mKYrVnuPUnGsiFEGvnF32b6qptJXl4U1KPiQwnJc9jd28S9zhfYMaxGKPbbGYk5UDeBS%2Fafzl9vjpz4NSWAyfn2RmQ3pKBx9pdHwI5YMvxCVqvEMhNNEsQMc%2B1uur9tQIxzhzLz2QH5VW3UobjG%2BWzMUp27vVF4e1Xh9WtrUmZiYfMOnqQuK7BZjMRR73eA3t87OMXihOoHz%2FiD480hSar842y74VX2H6BKb8ykIL7yyhx6HwY7rgXbhfbfqRFHz9jPLgW7jekxXTf1xzwb8HusxSzg1dr%2FZj1XnsKhVfqk7dvX6paaDnj9XJUAsfa%2BFZwyb8lppRjn1Zf%2Bg7a%2FzcIUFDzlSgWORQPRzD4leW%2BBjqkAbO8QwDP23HkKwM12yd4W%2FHtwm7bsFM2wRcOWxQemUT7XYc1ayoUr9zzTpzh52%2Fi3dgkhsfe8Iig6SRjKwa5D7JtaNf7TVw3rQwhB9OcFjl1YX7Q7V%2F9E3pZK0jJcp%2BlnG9h91X1gZxdWj%2Fi%2F%2BhaSOdl9Ih4w4e6trz832yW8%2FKzRJAY6dKszPzuwskYqB3QDjpMcNKIU8N%2B5t2EnhVIcBGrFueh&X-Amz-Signature=aa03c82a84254dc8a0531e85b0c8bb1671967a10ee67b1d29f6ba44fcab7ca2b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ETE5ZBS%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCOd4Hk3TNZi7mlAHRrETwFPrcokAVsf7N21wUgkkkpwQIhAITZOl4lz5IuwWITi%2FHnhN5Z4lW49%2BlrYiTADO8z1pMaKv8DCFwQABoMNjM3NDIzMTgzODA1Igxic2B%2B%2F%2B9Kcj4Zo%2FYq3AMcsZx9qgImRuuc0pSW6d%2B%2BEKFkqMAiHtEYpFLUys8W2TE1ddRhCk6TlhgRMYWf0XsrqLkFqKgB9xVSUE8mcoZpx5zAuM0rMZBT%2FezdAswpR%2FVJUHg3mF%2BuSQ9AuB8qoCaTNHk%2FIfcbJ5PfzYXlLXWrmY9uDgtVggCk0NzhqL6mQxSO3Qibc3mRsCRfcQchhXuwWPQrGlMF4kxHLrp5R6vzs1YScdgaUjJoTR%2Bt2eeEbBzBwTMC3xeeO9nUkpHI2TgZ6Uo4Soid5E9oPuFTAGG3hdNKWIAD16CJMoR34GqYPoId%2B8yb%2BiY3tjfAZCppZW%2FwbsaF9l4mvVqamm1qmxOPVGuQc1y8FlrponaS0FU22dBekyBPCB%2BzeiaLT1jitCRsWPIRdvcltTx8fbSsR1TE3ggc5fLJAKOZSh%2BVAN%2FU985UTUSebo4w0QNgy71T9SL%2BiCIDDwgTygzCXkUZBa3J%2Bbao2a%2BZMokq4WRP9TG6zliEGKpD4Dxz91aRbRlPOHmPsbljtrqxMZeLZ623KVRhvzHhNeJTEnvQDz0XsVBxOHX2JR0cN2eWGTdIeqtFI1nKo%2FE8Mst6qt0I8CtfTqBepGF9qPLSIOrcLLjZkvjWPsv6uSEuZ0P0CcL5YDCDluW%2BBjqkAVQ3jE2o4xcXZjHcN%2Fgx%2BdFl0zCqT%2BqOT76Zy0jE%2FQC8sW3kBgBnnqiISYDH19rwYID%2FgjhVDgggiLEhdUBqNOOyAyfSbmJ3yQsItd0q3Zs2BkSFNNBv%2F0z7G%2BbgQd9BDq69NBMTCuzqdSbe8ZU6xNYAalookvZGtYzXVW3kF7BvjgUKz3V%2B4U2RDtINPPcw1RBZO%2F0xx0WpW%2FzWHO%2BJN2wpnnsr&X-Amz-Signature=a8e5ec9395ceefa55fc7659a5c3643c8f0043784f5e41f5b75e28292562a3859&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
