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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZG34BLT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCPOKZ5B7BJKdg6Ls8LvnpzqFQ8geEvcy0bHVx7PhoeigIgIQDqTjoYo9sjtf%2BzpY9PuuFXRA79PKa5N9Q%2Ba9IsYfEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFXvakJ4mseZK4PA3SrcA6LUNAdQgPHPiZRqJE5hXT06tCxZpSgrIb1U0sCBTKCelte8MdN4gvibn%2BNh0UVI5Jv5T0lJi89AZFsVb5gX5mxtIOLY9j%2Bv34tmiMcxer6WIe489SegeJNpVPV7GDy93oCW0nQoz9M2hM3YTAQA3ZtQJczD1jVOQWwdm6cGILL7%2FCNU4Yk4HEQpbh7GEawhcv2%2FnJZnMirS1br814hP3KDyRTzBDg1nrMRS7hQN9fI7e%2FUpCTbO6%2BANaP8J3IWxqF1UUtOkSfSwoOariN6M1a2cyUJatsWHHGY3k%2BuUI1NY0tjJkTi%2BfTxP4i%2BD17OkJrqC7QHQRolVFdzEaGw7S5njeQQMfiu8%2BY7Bs16TA%2B0sC7BRTteDd%2B5jxVXq%2FGyg26OMkYI4JW7UF8hgrpEMYnfmKkZWylwV2%2F%2FArdlbP6cWWtCWh2h3IFDHqbGxfvdYnRFiR997fNxMpPdTQVSbUIautyeNIduL5RqU7YpT5rTxP1qoeaSdnjYuYO6Mdqr6dyn6fhK7Na5tcM4NaALBO%2BE7Ok1BZoqlT%2FdpS6jFtcoggKuBb9rlHKSo53yBnPR%2BHi5vL16y3W67QYtc56%2Bvu1%2FCtJu5aYPFtwR2HdpUoTPEAbPh9P21hoX0mULdMNaI%2F8EGOqUB1EO1P2msczuz0JaoLHA%2Bo6S9lwX9XYDh6RAKgELX72%2BEfFmHFJ%2Ffo1GdXP3fLvRI3eYL%2BycYfCLbHe6P1S%2FRwHzA86M9MB7NRCKLtL02xcuiM374x0yKWzeSnBIzLwcPtyVdivWGMjmnlQHBGTlYmcrLpxjLL5aaINP8HU2AY5dHrO74cHzHrech8AI1wJF07hAg1NbLtBON9Pc2TesTIKt9cwBC&X-Amz-Signature=5653d3c5170ac76677cebf10e735e19651505be9f94b3f549fcfa6a866ccb1d0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BPA4VJQ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD9AQrJjH727Mp2V7IDC3s5SMQRo1oOOFBhBTZVh5QJzAIhAKeM9CcnIf6AzUwQyeLC5K4j%2B6VeN93biwdeEx4V%2B42sKv8DCCUQABoMNjM3NDIzMTgzODA1IgyKE4HUd22zz2zwNQUq3AOXAOyXAWQlzxmxHQhkt5b9fCSVGZAs5CfuFnQk%2Bo00QJjrtjMb%2BxVbO8LyNn5jRQGNdsrGFTTgSCuJc83OSubs30j1i1D1IIfbziuyUxFR8OGxIIfPj7WVlbT4iwFLh8ToBY9GXzWKCn81L5c3ZrBOKaeZjDD2YP9Q4q1n1J%2FKg9EaDuHnIKiCRtDvhBF43n9u6D98fdyd2FPtQpATURE%2BIudFF%2FyIwVzGH5%2BuHKFPqmHJOYmOkPWyRvQeT%2FLLErZNMQL1pL2DVFdIiAg3L7cda02oBKImxrKLnB%2FMgLXFkYec39Cpm9DqNvEDgDeFLUY5KIq8KzqwqmxcTa%2FpEQxwVxc8IO7N%2B8KmY8wjOfhfNYPsIjQGID7R5b6Ixf%2FQ%2BxRV7UAiNGrGNwNQ0gfqO2DoQxmg66AVFh9PQAPdwxBVqhTYU8%2B2XznN9gP2Ehym1Hd%2FiDXX2eDesoOTf%2Bjb%2FUVTwBierAoK%2FwflXp0NUidxyRFXvUZRNHpxXj29NqSahDujqL2UwooCV0a7MhO0xtwu%2Bv9t7p2lO0r28mEmDVR8tamztnpcYapVvbDUUfE4yVsx2rQ%2Fybec%2BPai3mEOWDykheYAL171MRyYU81BlP2Ef68TAJrokm%2Fv7kSKRjC4iP%2FBBjqkAUIEVkrA5hGXA1vS8R7PbCu6S1Zsq63bZ0d9qerOyON4J42Shq3Z5BpZ3QJ0S%2Fb6h8pS1OneEVbCiX6BDdiYeSg6See1h29jbrn3RTLnNX8q5R6npO4enO%2B4syohxsIY73huAChNPM6JgfSG2RgKDyXSileAxpSKxejM0Epihxqd24Q%2Bu%2B28pRfCJM0HTjCe2Q0IqMkllmB1GeoVch1uez7my38I&X-Amz-Signature=a8e3757b6137a81b75f9bff3c8f1bc017e066b189a0036fe844fb3e6308ba691&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
