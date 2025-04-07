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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTLW5JVX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu20rZbNWfvYbcFhve85Il%2By9toD7hu7XMaVL4cB8IBwIgJIN5UGEhHnSVTwvfiumJWIpXQt6pfrJIxtACvZMIwtMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHyRqMl8hN%2Bw0CdBayrcA4euZtkYz98Av2ZkbD9nMgEARWjbObDYS6GTlnnyctvWs7Yt6ansDLQY3tRikIpgGvEddHYiCJsaW295Y%2BK0o2wV6U9qLpqPWrn%2F7%2BWMFx7Fm%2BV%2BjgEkhPw5jHk72P1CVgIByI2qKAe%2BuDspKdW83vmia%2FcCvliO%2Bk93Y%2BLTa6f%2BjxFGXb9IP1PzvXH0qIUTgAMdhCLt7CpAxlwudUASphgngl%2BFds1C2f27et%2BBprie%2BqVvvah1R1zqiofKaxxK%2BZZ2ECrvIRqKGqUQTU5SkEOD7G7XDWNDhk%2FKChPUOQr6twBNAEfVVKCXTwKoC1GCn8UmWX%2FIlZuQp%2FKfhYoVmHNMhhlQD8bXLd1uhrHhpZ9Q3obTXj3QBgzguCr2N9awJsooWUhXDngiacanbcCA5QZwHYYtHQd0WLoMahLncoE0uTpDXh31ghybswQTmKDNR7g0GTjn0XXJygEpo%2BIpjMS0mf8zJCSv8U79xiV0CJ%2ByRbsyt%2F41mPmpb1fTrPTlR075aCWQtiZRIrCJG56aCcz26S3g0Ehbfn0j7mS3glU74ARgZjLtR%2Bru3pn6Z61xczNMImL3saGobvFayhSLGTQWI0osEKUBXmt4eho1zolnSmyg4UnQ1o9nq5ECMNO6zr8GOqUB9c4sq7iJGNhaWW07YYb2t7ean8GvtIIJNKAbSYF3pZ1n%2B178PMrNxPi5IadkzoP5Ttit9zm8wIFCRVPP3CV4279vjYz51AywGE7p22aRPgmtBcMXfDOgKUqNu25%2FKmFV7qCntUU1F5lcBRNCVT3%2BIIaBEpB%2FbzPy4NTT%2ByH2MXFcKQ9iEAxLXxlRozrjvPa89KsdaSLnfJ%2BpmegHhje20MJydWNp&X-Amz-Signature=6033781596f34423a5bee7696e099a083855c4dc0f24ef85326d92f55de18e72&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICBGADJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3b7KdNhoHFvpKlOSz4%2Fn0tJc%2BE%2B1qKeBZrYjA08GgxgIgQj8e%2FTfsU7tOAsC6fCwzYwIicpt9eetdVufNUc7w4aAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDB4ir9muvpqOSPGkxircA4IPO8w%2B8w92uZBkU0twAdZ7Fr%2BligTM%2FjEXUrvGCjkMwol4JRA2C5bAeNSjc8KeRfw6KF9MPKLtq65KUFBGamuRTINWxQ6712DSOdrS5xUEJM4cA0f0JC%2FMkkBPj5ghr3kiTNhL4ev3NZOcLMgUq8t9rz3yglOuGjtrX%2FiTkee9OyTKCKDdt3Zs89RK1nSoPmbM2AUyNzmSGNrj5b0bntFM8QZmmKEtITlla6F5eNwf71%2FiTABMjm7k2BUzVtxMiqEZ8toFmo3HdgmgLd%2B%2F5mizVk4vrZgkAsySGjKFmk3SQBG58tLbh6u4hllXTlK1B3orKtSUOGBfZvM0%2Bw6ECJ%2FryPvPrfB5sSkhyPWk6r7Gm79Xgf4Py8pABdwjXXpyMRDhWp4V3f0%2FzBJNNUVecPwapLuMTtk8kK3T5NT1mCLXdyabFlJrbATeXz%2BFrUFhD%2FnB61BmX3pOesb7nE9TJoByMQO2Nm%2FSCb5oFG%2F3iWOySSxCrv%2BaFUa1Og0M5bYH08EIhwOScQq5ElAo2o0RS0LBMhaYz16%2FasIhp%2FVtPMoMHaA4aMJk6xWDkPqALvSevv0Om%2F%2FaxZJJpT3JvtSnKJ6XrFLmZxh28SNiyZdqsmQCQqhb1BG3u0yXPYI7MKC6zr8GOqUBsUJEVpqIZkb5OHpvKcHzu5Zzt8mQD6bExJfj0efiZ5ZAsyE%2FPP0%2BGCDttg%2FvMtKfPK2du0txrOML06fjGXogS2y%2B7W8Th1S8lmFVMi1wLLg979LhLu38%2FCm9HNTlxOeppvP6uAdIdcOyq6eq4AJudmu1FPPZXrgVZMtnEfvICsU0ybCNxlKk2TbI7l96tcbtBC08LPdOoNUpRqM0QC6bdO%2FlmqVv&X-Amz-Signature=9aafc1be5d12b07076229f1d30e1a5afd940f2a69ee663d060b5bb95ddc89bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
