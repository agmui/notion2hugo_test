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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJ6SDHC%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDBLgoFIYkIPCqAIDXVbdU%2Fdw0PuXAIzZCW8kLsNKt%2FmQIgFDAazlA0zO5BEjuGTy%2B%2FZRbt6dksnkBfjIgp5HZVHTgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGf5HAO7X3DZkILMircA4eciORX8pf4ojO7qUtq6e%2FHsbw1kNBUB8cTh94y3P%2FL4IopjtJNlpJqMmP9VPLa%2FX2lDzbKTROJMjRsx71v0KcevJV%2FdC%2BlN6hyybVozucj%2FaGNG%2F88CBa2CY38esrYCpwEWVSTwDDxnWTDbkpkLRvrCDjdrqm8R25keLosJqnfmN4zdmXZ2xJXJyulmyNNIhKWMa%2Bwt032A0xh0YG%2B1afWd3gfdNvR9%2FwPngZkaLXfmESD6DWEcK%2F%2BTniR8%2FQy1VUHuTqhVG156nQfhcahTwRSbB0ljVJAAtVHm5B0efvck21lsFjWiKBELhA3eZR2kLFqQ66i%2BtFR6GDXVO55SUNjuniTP5sSzveJ4vVyblFH%2BHFE0R8FWk6vd850qtEM6aHjpzcPqpYsawTIEyBl%2F8h4MP5T3zcTfDuodjVISqJ9Kvw4xJp9YsCNTS%2FbT1c1uSYG4jLpF%2FLVF6%2BOCmss6ohPj7%2BkfRiJ%2BkApQDo4b%2Bj7XFvg2wMYCmMVOaL7WGbTzOJTtv6Kce73HOZkPgJEEqxhcm3pQ4BijRrqq1AkvSpduc6yFeV4YsulyrD8nJqWKlKHmrpHdaO1hvywt8Lbt4caTkFhFNZ4QiNiNHJXVH5PzufnELJ2RICq0fBBMLry0sAGOqUBhe%2Fd1665KbbptsSlB%2BI1Wlw7LymitJXf6k4XqWGaYA87LsLn0jgIPNUguebocpv9HZ2Wva84mN7s75u7gsXaNpAWem4qATzWjK2DriszFgKgVtyk%2FOJaFRSVmkwkRc0AU%2BWJpT4TBTE1kUfLzXQns3mNK1193lTjcdmmlSMyw45oUJ4HwT9LEwsWYsNGbEjAYRpRsII1tJTRuYQj%2BoZVfvzul3q5&X-Amz-Signature=4012c21ed3673001a1c3891678a728a320fb722cb71b5d9eb960c27901b24b4f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T73DOJQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFGk18yO7iytUOw59yTX6QuhPqnzLXTutvY5JcZXZGG4AiEAhEf6jkcfdcMyPDayTf6N4uCm4GqptwSl4KUjeihJyPwqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnAA0BcodZog1xiVircA7H1SXtb7mnSygPy4TikMnpeFGmNk%2FTzJGae9DCu9WamraMi8efz82C2W77JUMlVLkHAYFLx5lYws7HZoighK6%2FeitIzKTuoWwqhD6Kpsfd5pUKzUp%2BI4SvHtEP8cWToldYsvYv3OYmy6EX0%2FgqPkiVwGKKZnz8u6zueKsTs1IuD%2FVvsN7dEVGNNRQicRUifC1mSuaPT7omK7WCEYKa4E10Egd7Fbn%2BBCjyXCe4Q%2F9K42qqpJ8PECdb5OhgBLujcVDjvbdDW%2B0Wanlencq2LNdrblPsT1ZNet9L0qXWaiX3nuJCPf%2FC4FpIOtcvI8QMoD5bMnjsty%2B7%2FGSItk50q5TeqWJrckwRBTqjYVcPrPQP4jbtuy9%2FLakbAF9CHkSyt7ISNO3jzA7LEuur5%2FNwsncSsQffXInlCDG69RacJUX%2FDMe0HdLgoSWipGzwU816KEwxDh%2FWOtUrrRXdXPe3X%2FhsJCg5Cl00mR7mpMWEjSqrQ6yCiR4OYfYSIpO4T7hSqIvnDq6%2FDsDKkau5IhAlm4BtLskAo3B1co2J%2Fk%2BTYe5eq8DV1Qy8VyJKBq6uAX97hnx76f06mTPTFsHfqqWgbqmt3pz%2Bx9wZ3EI5EyVFFM683kcwKk00lq7CXswh4MJby0sAGOqUBY%2BKZjlf1tYLsMi8rvBMieXNHilIPHiQess37RABLBpJXBsgTyzQPlBJ1pZSJ2MKYZJ40Nz9BqCMtQNdAcg0gjonGIIRRNg1ZQTg3WgZ1n3IE1Wjf%2B3WowoW0tjNS0lIvfBz1koQNV402XnZ6MLIOMlozrWvB%2BgiJNsasXYl%2FnWuAESgvYfgL8kgL2USiEo44%2BUaatbAa7WNs8nmiPPPD%2BvSc6ohS&X-Amz-Signature=c628d4822b802a142fb31969618f0ed489972cd7a51f8dff32d85505ba7a0963&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
