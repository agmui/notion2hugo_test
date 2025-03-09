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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ESDX7QV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIERhHvHrQsygK2BU3Yy%2Fk7OY%2BE1D4l3xWhNvIS4dDACQAiAx8dP8eYQShrREXeWSCWOdu47PAXXw5n6%2FLtCcDIkreCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMv9YSpsIlM1wcRVJAKtwDhuLRyZeC15QJomE09zueDPJezDi5TSATGasqNpTokvNtaersj%2BAHWJPn0uOUt3amVZUWoO4oJwGJ6lFgSLPMiLNXshtftrCAZoh0%2BMJFLdWiH%2FGHjoacApEGy5tslT3nBkdSDEmkK5duRLURVWHFltO0qBCW5f2eVTnl3K64yMkxDrKW26BjY6YgVTpjM7rimRh%2B27ZA36X6dPdiW3%2BJRdzVUMQOrPu1h6WQ2gfHWqGBpZccVasp7nZEEQZVRXVmext5EBj3Dmh3a6qUIg9u7lB3rkXy4ppTnlzfu%2FjkrCMQNSzRTIc4lzBOxZItWRli4f9iEEzY7MHU44yzthnx35zisurxeSzLPpE841MV15D9RQZsfGSUY4Ohr2Iuo6zRz6mBfp91QXKX6FIpriH3VOlvHZaBvz8vZbnPUz%2B0vJXsSQZQMcSUeEyWJX11EGrxNfPJw2xMV%2FUSNkaZcv4YTmpvtKunVziqUhXTMszSTRdGsJ16bX4Stl00teuJ5yXFXmGZuXfIIeHdSUXPuUUzy1Rqvf83GrK172NwPAkIvYrCOD5MCJd2VVlqngOFiGV5uG0OlbvZwEexXZGBjbh6%2BRNOpr5vQF40m4erPcBsoLSRb1l%2FydO6XlFlaxMwt6q2vgY6pgH6jlSNp8igaB%2BWO8DSC0pjczttEKGCMOJEQf3MfFZa7COQ5fxV9VGABv40gcx8dK4s9Uw%2BLI2%2FsBZGQS431A1zaBUpbO11c6qK1%2BlCBHRviNSHLal8JrAvHzdMXamYDs3AEzx%2BKxiuA9ucjjPs%2BnsCF8jq3of%2F1WbgDETZt7aFW1S1j%2FGuIYCT1FSPUroGrwP7MrXuRmVaHy6vCVsd9VIRvPyTUEYo&X-Amz-Signature=bbde821f24fe1d5cde5f3c7e2391064192c4d32acdcbe7671a6368d315a0c06f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PZM7HNF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD%2BvaPOYT9FEKQH06Dj1xlulJsCCqaZbL9sTY8EwTRUIgIhAKtA5mophN1eCqhu%2FSH2PpCmhIh80clbqHJ2AKvQBlL%2BKv8DCHUQABoMNjM3NDIzMTgzODA1Igyvn%2B0i3uZik5AaS2cq3AN%2FP2OtgoKaCVxLubIsWjVd5pYKag3wWmFmHaEPWyYCLgILGuSuFlYbvvlHzFD%2FWMnlYmsxMHl8rBP%2BHjKSi6NVyspc6lg%2B8LbnreyNuNQVL1SIjS4tEJkpKvLi57Rw5HuZFWOgKyQX%2BiRSqUWRyJD9A3aCIengwfDN9VH71wWv3lZl7VIIylU2PUBdHHGB6xUKwqmI8lhxHsgI7SNi8jepbFqtwtY%2BTWw5oDP7N9ieu4QNC0aGKrDrEwSn3z%2BaIwTNp89WoBnAiM4UMs74oALQsiPxJ9C3rOqPajpGUsaWa3fL3jqtW511nMDtUFVVm8q0HQg06y3%2BNrBpuF4gKVQ1GFKQDUQ%2B18jFIIVEZKtDA%2FB9fHFO%2FN0uSumrHcdMM%2FvBT2Q5XgDj5bripct6SJt%2Fvk%2Bv1yztjASxT8znvMfI7E%2BgGIB4VAm5%2BN%2BqP%2B5bzQD9LV6dM%2Bu5aNILNoUx9LT1cRCgdXRxqxDceQt5jtNylnxsHvqkKJE3OdZBB7a9Qi42ylkFPfyyIMta6TwA%2BR4rBe8Q%2F7n7wE7YEiIkklyywG28dWOt4tccb0ap%2F9KIOYrdb6baR7Hg9NKEq8WGtVjd3%2B7gOZ0t2Hs%2FLhHdOBFbWcJR00amOptBtm1FwTDijra%2BBjqkAV8jMhHtJQWLLMnsXsf5NdkkGfuNhc1XvKGXGazjwjwc7FdjNVy5JXoiMtsEhIvua%2FK1yFlUYC5YHLIMlozXWVXKn24Tmz%2By9iZZYEEQ2hUf7igwEs%2FGDW6kS%2FH9V%2Fp%2BEH8egOohN7ZpwhRdxH%2BLHz%2BDDmYA6tZxheA0%2FmUnGwBgjTBfubXH4I1xrM1JlUqBzTF9vi%2BvlZpGaFziRFSKbt1eTgx%2B&X-Amz-Signature=d483486f7790fced642408c6a406066c2ddfff1cd9911635ac0258e914b9f950&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
