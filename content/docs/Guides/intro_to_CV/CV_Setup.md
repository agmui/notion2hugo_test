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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3EVJ7BL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC9%2FoqTOwAJRL%2BJsi5rkHR6UQ%2BO4BhSfFP0EfWFB6uhJwIgHTFHhIRmLhruyeDycFD1em%2FPqwozWesublJ1sbh8OKMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDER8cCiolkwpZfyBXyrcAyvc2s%2BaZ9jTcdBX6MUrWuFwQbGb3pxbL3F9mecN79rW2cDtbEatTuKUoYLsaR7IRj%2F6W0PIsd7T1571%2B33j01hZ1r9nl7oL1pSuF70M%2Fvfnil%2FVVmYCl65UVmNKQR9wKRgNUZgQcnDEluoR30Av7iYhLSM0npAvtWjsToClRSzpmnZWLIFtd9btTk5FjxQSwaRWgAt3OY8djlv90vEuY%2BX5xW8NiTl2qTxsNkCa24LnIF8E%2FGWTXBKrDm2g%2BWQecPFbJp84Wvo76CFLCkQRW7GByxWkqe1yGkKbqhhVD2DCdN7pkZ%2BkivLaT0vICiQzUX2d%2FVsfDFQ6Zx7akUqSTguYNH01wvgJ3ga2plGP1ZuI4pSibKEUuvTgm6ywqu7OREyuKN8nRTntX%2BBlwgV5hC8wpK%2F8Q8UqMT1JdMDx7Fb743DXBQum9RUA01X0QclbgfeVzxqvrhmrO5x8CBbf6uCg%2Bki8zcTrJo1QkyTmD1Y7O9L53M%2B0C8WzZRH%2B6bd3YayARenzTjevMMzdfjKsx%2FN4c8ESqcMzDjDkJ4QboicJMrPoNrL6Jd%2BArGBNBC98IkHXrZoqwQAbbOTTO5k%2F6QrceVTPmRwt%2BF0m0T9vpzhqvqIY5%2B4dOGIVZBc4MK7S%2FsAGOqUBgnPjKSSkmGIKN%2Fv94BZcXj4X4%2FBXdi%2BTo0EJWvoJTZcbOmRDcRE6pTlIW%2BC8y8UfxkwQA5%2Baku6XKhwHnIDRUdkchyBJnq0zMmKJu%2B%2BCqUB61qfFWzPamWtRCmaMfw4G4MNSPntLgqeJ5avydcB5hKxIyBFgQujyJvxvJJp82ublsnzgWsokx8bi%2FucD6zIT7JeWKRK2ywFNF%2BGEX2tb2d%2BkF5is&X-Amz-Signature=d2ded3110b5718ba8a63d71bfff9b5e802aacbf6d73df3abf10f9f4b4eb2e8c4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25OPBHA%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICP5oYV2dB7i1c5QeSq%2FRRKWQbxdieM61PSnxiwSKz0WAiEAjuRzrEen5zIA%2BHMXu6fDiG9GMG%2F2FLis3t5C2BF5u5oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMvqXfS0N9Uf7FxHSrcA11fE2kWyHm887Y9z8UshA0bI4LBkSapvD9iruWapcGun6WOIrmfg3E5j5HYTYdYsa2S3ywaNbh0ZUfkgFIbZ7r7Pk53S7KcboMgKPJCc88QeN4h%2BvFSvCECYzPnPRilbSoQxF4G%2BxMoNajikv9tSvO1LBd%2BciyBRBYIPeR1qqxQpZTnSSCcxibTzT4L5A2CvTzRgeg6LKjIqbeyEEnAUVgvkk0F02KVXNYE8v1ACF%2FgMExSBkSmLVJIVeZXyc2gy0dAGnmoO9vuOfhxDbgBtchBxy28BKXBdD2YaU%2B18XCaXds6LbgKEFPj3WFe8yM3iFGGbOUBbklo10YCdirL20uYVSMg6ZNz1Eg3LR9tnl8VpfD7j7trzlNJifIBqGpOhKBpNSYuQMa34md095G%2FcukLuN1uXSTaQBMp0QLPawJyh4ViurnCX42Az%2Fqrszgar9DLlRMH4PGRDackOUYuV%2B0A00DonRnMMTIDyjoCyJznZvQ%2B9ump99xdDabbwUevYtoiEJ%2FqkagRg9m1r9JPJEIwVUWvicKtAl1wQ%2Fk2dwxtueIVP336Dp3KNOxqK50PDEzarXdw5IKkubvG6zvOtKRo9YRPaFI%2FQBBrBFj%2BiMTZOZ1GpXGOVX8sBEoZMLnS%2FsAGOqUB%2BVTEucptxzNi542wD7g17WjwWXX%2FbNH2qaKdcINUOA9dgTH7G5SunwSIgJ5BfjOb9H4icDlcA4%2Bw9g2jM9vmbVgvzxb4yLCWYUFhg4qd7bgNp%2BibJOoY3l4O7TAZCl47rwokwaEFbnuCEENU9d8JLxcSsfWnE5BU0nbrDs%2BZtz%2FuGtzkkLzq9oNIcLjmQp3h%2Biou%2Fdyvu3ODB120F%2BayiWtog6kh&X-Amz-Signature=7d1f8d562c0e4058bf417d79aefaaf975889686f8cdfcb7f656220c172127b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
