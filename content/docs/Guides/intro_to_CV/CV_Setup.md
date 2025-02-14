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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6JOOSB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGNvGtlkClBWuhOwcrAqr0UMz%2FjBRdv5PqxmAlAzR9MIAiBHGc62arBPyxTfKHg2Q5xl5BaOo8mKfEYhTvvK5GiqUyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM%2BFu%2FzDbaBi8%2Bl2EUKtwDrYZ%2B6hqHKPB1MMFMLJ9baW9U2VC3nCvQVO7UIrSqRSpQpx8HX%2BW05E8l1tKfUrsag1xrf1wA80%2BOLC3s34vwy9NAlxI4KcSBHO376qmtnXi7Bl4SjExRh%2Bqgbw0VArkUxTLMix7SEo1pwMFTQVNkSqi%2Bby5DfR%2BwEN5wae50zCMcFqTmnPHkVko8QbU2G301AM7rYncosb4Romw3%2FyaDy3QcP6pdSgXGxi3eIuQpqVHjBt09%2FaKoQH5psLqL26nJNcaeroz0rq8XnSFdC2Tu26TKyoBQAvEU4qhyU3TsKx0PBYx3p91o8xcGcXDgViMmOYvbhwSQyT4duCfdZHO6nT0W6glA0ZsNkIRJhCkTW%2F6A2dyy1yg7Fq31PBYxexf38MDIQckiNtp%2FaPcjuorO%2BTQAEFSdOC%2BbUGz1x9tkb86DUWIWie8z9cXzzdmlDsG8nokHD0vK2KmnzlzDp6Y3lviVaCNiMB5dNsf6setDaJ5HBquFgbzF9J%2FNPQ1i2Zx8Xh%2B%2FJqSDKhj2bfrVs6nam07QEvwK2OOjjTjjNJLg%2BZJdGSIApi1Ikn8qSUKHC6oWOOY3lVTzsI5jxncxugzHTeqk4D1TEdFqWWmcMxDVNN09nXp9OIghME8lsgUwrLW%2BvQY6pgEjevbEqzl58qO4BA0UHnQd6wG1HzdirV7C1UTrkzzamsKcwNKpvuiDiSheB2wPWDe3BmB301oqN%2Bq%2B7L740JfFkp%2BeA1sHbgVp0yMGp0csM55rAdaQQKF88q4sZIt1em65wELDltroxroNH06zLApXboDrVkjg0Viviu3aAoyAGwIeju5ORIQpmVYtS%2FhK9KiWNOh3CGGBR%2FRZ%2BPWFmxZk%2BXjsbIfI&X-Amz-Signature=15831b3b8fcbcd06b69dc8da0a2c18b35e3f3bfa0058920dee7a0b46da92abcf&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXCRBIE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEUnHGdLQcRH9aD%2FdrVA75aNXz6X6hPbSj13f9Q6jAxXAiEAzScrHnmFZYgk3Wjv5mLT3x1jhXWCw4T4EpKT8oSzhfsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJkHIJjuVQ05SwFwJSrcA5uhZvpjNDdkx84KMaDHvSNUO3aJl9y29R343737inaAHI73olRAdtJUGj3K7zYLWk4X0dzASG09i0%2FqlYVo84u88r%2BIKYazyuUsUgKiz3vf11S8VSNiBvng2qvVVFrp0GJqnXRxuqBdgfM2jbcpab3OMyPDb4pN0Pjmqf3pQBYWGMEBKjWcm8u927KSL3GM2CPYRTnteRsewyQD%2BqQPvlBFAtNVFAgcDrUHdf6mN5v4PJd0UkMyEFJrscTRSEdDSGA82uYb4cofI%2Fci0YM5UNhLk56%2Fp4Oq37ARG9S4vhuEiXVG6KzdfcpfbaqZNOeBnK3xE%2F3JDnESrQgn7tY42ZzdK%2BVMFa8vj7jRo3BannIAKvBcb%2BFg1LE72CsjobXUCOmS0rrloCfjqkc4pweqtwT2RF1%2BXIkTFE306Boafw4Mu9fl5%2FDsW5rYb1j%2FU%2Fkn6KA7BqmPtsavYkLbM1k70JAgBLRBtSQB4n%2BF1qWLsIRw0Fs4srwWrrBaPOizYqjcActRMb7lhhhMTXwVPQR8ZROaTionRtYDVZiXAXMSOs%2BbBVgH2pwOt46Onpir0Yaaw%2Bskzz%2F%2FFPFcpA270eKNmohMnngj49u48%2FhoOH0XEKS3%2FktJ4Az%2FcsL%2B7KURMMK1vr0GOqUB9TbrcSRyoz3UgQ3bXJr4q%2F04xhi81EVEEpBtOiIFEGfNjSbVXDUHzJ9LIAEKLYuwGhaju7YZhZCUAQi3ti8537ZTzUnfC3MlRNiAr3sUFnZb7DfDXdjGzpauMzFb%2BvBPuoE7E0DXMRB1hYdp0emY11T%2FDDsW6JNafQe9Tbvz61JHCs%2FrSE3%2Be2xDkajxan%2Bz6qFE%2B0IOZ%2BKfKakvObUPvtE2ae7T&X-Amz-Signature=e7c6f9e9e71320a6112711f9d68292154324afd1ac87c8a096b87962cb7033d8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
