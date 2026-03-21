---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EVOWLVS%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC9bw%2BSuNoWlvOWCVb7HqtxsPxsCI%2FtoCD9aNd4uqMW9wIhALvSor1AILJamuXWVp9ADLBgnrXuPqM%2BJMerVghKGuEZKv8DCD8QABoMNjM3NDIzMTgzODA1IgzQebgPpIcLeDMXiJIq3AMxG21Rkxz6miNCKT4cg0y%2Fzr9g1Vd4OynN8YUlxKTugatN%2BTmAZ57PeJYsezesmIK2xGUk4oWSVB51LR4gZ1xuM4udT1APrar%2FPJ41o5cBapiqckx1i0We32vVeUdaxdAiVi3OKCFgaRO3BwCzt2T7LJ954YeeXZJ6S6i00GpCAE2LPkAcREuyvLQocHCq%2FmLszbaTsXbgsia7n1DSHimp71H2iPUnTvivaXsMai3%2Br2cLx%2FJpGCx1%2BCFqGpSnSnv8FeQGQMxgLWJx8blT1VOd1lks5nwvJULOFIMRFZQQYaFhZh9YvyhddIBH8nMc%2Bt2qiKSAmiRXt1GHGie%2B%2BriO0PC7TSyBiUsnr%2BvBIwtgL1io99OeeqXp2TZLp0vLPGv4%2BpzIXdyF7%2FIvzHxa7twPfqCRaz%2FoPd%2FnYzGAuUb32zOEOMEz9KiN2ux65DjMHVjdBwyxPdTNdwPbAYadtFDq4HQcQObCO7Cnf0vXQEWe4SbDahyA%2BmJRVaTa7Xf9dHxFuQg4s%2BPtzoBbUZMmHj%2ForGtsNMwS%2B4ntUOMcFnp8%2BW22QamCf%2FRdaQAexXT5on9qt%2FIsp7CAh8tHZzE0ZaRBVQCWvxPOCoeusFoPJathdpyryVhiGnqIIb4%2BXzC9j%2FfNBjqkAXobzMBeWrZ3g4e6qmpGIQMKvXvSeBwcJTeiOGMHQQ8m7lvJzIgjoGe7rHclGX3l%2FPEaUqT%2FP92NWynMKAcbUlAQEwM5vk4%2BE7mm3Sp9ZNYFEC%2BrFWyPofhvUenIOQennmGfcJfBkS32KQ%2FADKponFOM44wkCWbrih8uB%2BL%2BWAsDXor91%2BOFglouaKSjvvaSgP%2FdfaOjyP8ZmR3Mthw9IGh%2Fs2G4&X-Amz-Signature=1328b8d67c014718e1661ef2509474867dc4b8fb5c57b29639077cfd8cb33f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAI2FG5L%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDh6bHhp%2BK1E7zxMGyH6GA3AcIMSMr8TJpEC60DahNVQAIgb88Bp1TG%2F0TZVcsOB3C0uboLFy0IEnpMOKbO6Jni%2FN4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDBdyehqemXnLOsHJ7SrcA6V82j9JIpikVoptqrOYd%2BgAri4JhMRaDp64O0PHMibLpvEu8N7okXUTAVKHn6eS0TRdrvjsrR2kIjO9UoX0h7QBnM%2BPTXhWmsPIFFnDs6TZLHmfEoNmQ%2B1aFWFkNybXjK7OZ4idlAL7sDToOC1GGs6HmXauw4fwMEVHsV4Ensxns7P4GQ73zEZiM5rreTVAYR3LO57JzaXsifheNf%2B49OupIHt%2F6cp%2BP%2FWhTCvDh7ZZX%2BLuMoOXDHpIK522Ne4VkcyFfRcNK0F3oOYuyn1xNmBY6p4jCWKwI%2BNAtr1DGSXfzSU%2F%2FnyiGegUSajvYJEkZfQ9ja3BwQ1anQAYPYryoSHJDysIDKz0%2FuRYT9cXbkr9ToWey%2Bvcky%2Br0YzmUxVP1iKen6ZEv111BySZY6hIlVNOd8OrJyxsenDaWto7soyAZpZZZ%2BlUYrtBGfJWsgS8iuu2TBf07bs6jOkiBxYZ9c%2F45lajbqSwf04iFzn2RviP7hY1soaahOPKb%2FnnXYOvjGQbnpw%2FCFQ8aekJIv6GdecZCPXhfan9cqYMU%2Bd1Zdb4P1WKnMSLuO4DQh%2B4H%2FtaSknvyjsYVJ23l0MxOak%2FM5D4eHhW7FpfyLe5q4Zw6LKolyuQDDvfw1qEzy1dMKTd9s0GOqUBOjIRI5%2B6VCNtL2GmERGhKm7m%2F1AN7x0gCnfUGbCgHhWO0l0eD24rvpStjEVK%2Bhq1v89HI1LY%2B9pWC7ttfN2em1k8DtAkopK8qo8GbtUxBb3Xx2AIOpBPkWf5Dp9J44w%2BlXjo46hfP2rFGRIhAW2QGYo9StfmJlndxBDU%2ByY%2BTsalpUJlQCs%2B1Ccs8DKpnJSMdbGASp4nWa0nRTY3r9ZWlP0n3dRY&X-Amz-Signature=6a2151dfcfb7ef8e0935abca158141dd51ff8439ed2e62fcbe778ce2c674037d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
