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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWI4QS6O%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2F3LicGVdbmSVTwLIMq421crvfgK6X%2F2h%2Fg4JkCMQoiQIgSIU%2F%2BYTvQCAY%2BZb2cMUJyZkWBg%2ByEmag2QlYsewD%2B3Yq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMozW9QEliSZ7uN1yrcA969w9umkWMQKkEIlnagDS3SduWrowEjGxN4axJ5z8hvaIBwtQpecug0IcXEknOhkTLSfBtm6P%2FNC5D9KSWXV8JTtgi9IzKLr3BdFXyANkPbnHIu64SESJSIFBsRJikwBBowr8LYt%2B7JOBOxVFywRSRu%2F8iLWPJDRk5%2FCIz%2B72s1mmbhJG61QqvZep8pn2BGjXp7aK9zvJ6KXGwZdK5chuTvp7LLvQXGnunu9zgOALQSI8K5lXKG%2FbjcMPEZrFXpOA5Fc7pYQUFZFAGkvD1X1yMAhxmLGDpOmQXJqUekQKFhve4MRbygHIMcsqtiBOo80dDW55tl1YRJsyuGZK18BDwE10hCc3kXy1oxQ10XuWciA8f%2FRVbROze3xGiQ6inPAvTcYiYG0o3g5iykYGlBRib%2FfNVfwHWCaryXulfAVJTB8dZkOORrrlA8pubHc9E0KcxLW8D7oGLReWqG6B8YeoJzvYUbz8rTcbpPlW8ZhgYTTpxAS9uxIwtAyiDbr7U2PhAo7uKyABH5XCRBNlmweuG4edCmB1ClIlqgFmHrgqGw1S5bvN21JPRiK1Rvyph9zwYulrbhfxNojxVuCsaYB%2FxsG951EQMpgSgxDw5f3oMld%2FhweR4PZzvbBqUKMOaV5bwGOqUBWc6jtdyuZjR1axlUyngWb1JrbJ%2BPIxMxbxveF5yJn7khEkoe1ngxLYDLMdnhtjrSsIX6vqqWxFqpXYH8gcuz6ZJ3A1oUvhZgf0R4H%2BputLXWDyIBWNQtYZccXIbMnK9pUOEUgLSJoADuTe5IqxV%2Fu66PbRVnlQ%2FbK6gddC8gTbPIq6MawWyARUpamzxxTMQMJmnggRhidtUw58rRzm9bci4xfoVq&X-Amz-Signature=2ef7426c355d3d36dcc6a9ba2da1ea53ef39be2418ca2de5ff06dd205c4e6a11&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GAU5QYL%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDLIa%2FvfvVGTtkjeDGZZm17Lc3szbtCUKQJo2uIhl1YUgIhAKgsjj0EMTroN97UJptHh3K%2FVbfKVVCJ5lrPKG%2BB23CkKv8DCH8QABoMNjM3NDIzMTgzODA1IgyRhgoAPxdNzyv4ydcq3AOT4LPpKChJkUUSTYAp5T430G%2F6ZqXH7WeGOMRkQf79bRIu5HH0miIyCwh4WznSGB7%2BI%2FXsE6NKlSjgKLceavqZ3eHpYMT2LYQc0MFxbRwgWbG1GgmzKfLUDWH8PVVQIvAxgwZ38q7pqM4fpKJOx4vda%2F2OP56KrsWO%2FDW8kHh2LGO0k0KY%2FgsGQ00SZztmA05%2BN3d86h9UoX0UKDJTDNRbmFqvwAPtOdrWAneYkQ7HF0xLy8Fqv6Tjsg%2Fo8eD3cP3BvF%2BeJUPtMck1MdsZ2szx9vnTbE6TAS%2B2ayOt6CT%2FOUnwFtbnuu5z0ZKucTWGb4zDzQ8%2FdKdMPmkks%2BNvqfofYaGOwfsnpWflWHkRSx419G1uNRn%2Fl0xzNALyGWec9Aeaw9X%2BLMw0reWBvm7ThuK7tHTAcQ%2FoDqP1C1gdQ2oLh6cNCpypy0xPV3YwU4ic%2BcovLDMYPJ4oMbzcQ%2FF9NHQi55RnuU6PLwp%2FtNetYwaeTJ9dr855isE2nMjmwU1CWWPStCQoAi%2Bh9vhupfBqDBAbJfU4HDygQ8cf7Z1xwWRQR9ZWv6sroOZ9RySQ%2FOvjESNrow1yX4CUdIPClgl3lar7HCn7ERRSDpHBLL8fXIiEuQnV8OF73oVmyCuckjDrluW8BjqkAbPqOqGk8UGhDisKKJencdf0UQob8CAe9JQwbtG92wOPt8fDUWurzOExU9ogdN1cszkVZHiT%2BFQlPIkJva7etF0NxNQ7u7AChf9%2B4s4jt%2Fn5OdOT0WxlkgbD%2B%2BWlsvvKgpwQ3VOSx6%2Bsf0uufPVV1Z5%2BW63FHKgmBddosfu1w7riZkb6GT1f2fYrz9YpNmWWDEb2JiOoNiuB049Lz32Ogp2zBEND&X-Amz-Signature=85011c4aa3dda6364f768dc8e114856e6a2f952e495ca56e1ece8b9f88fafbd1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
