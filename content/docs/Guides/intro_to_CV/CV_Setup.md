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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NVRKGJM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDmzPN1kX6C89LF7Ogv5PNcWOC0tOII1lpSnM5eLcrbZQIhAMb3qZiSF3bnxu%2FF3C%2FdcA8VgCNMj5a9XgeTXgnJ32WzKv8DCEoQABoMNjM3NDIzMTgzODA1Igwas8%2B%2FcSWZICqijxkq3AMW%2FlwwyF%2Fo14vtvj%2BWN3PuSGdp%2BkjLpctQhm%2FL9BCKWJpdVXDPuY7UASC2KPk0olvh%2FJ9Gz%2BbPalpVokVqn29kmdn5OUT1%2FVlm8c6Jp7aa77%2BEtMqYNScyEQKa35ei9kqh%2Bfu1esc%2BFqdQ5nhWaGvpSz9%2F31J8eFtG5Yf5cjEb5Qk0Dpz2ZdKcIGc96meITRjs7s599Fo4ghyovKdeSzraxICG9%2BJmxFl4W2hAi2l44ZXAP8lrsDhsUSaTzO5hJXeUhbZkFg5seWVwoK02NHKx7J%2FYoJayjQgszvrWsO6BM4vkToh4IiOoVe2FTHv%2BgElmEYg7erNnNAAWDv0pVML%2FXJ9PhiAhDRQReKwHGlPFJS%2B6TPIaXpRiKZdTB1Vxj2eMLrnosdchRBaxPagPdMnfJsP7AsKFyfXlXr3of%2FFlWnPtPMLhG6Zyon5UT3zJrkHu9ZT74xVR1vMClb85GLJgjAYz2TBHkW6bMyEmscT0uLPyyGaGcTrNIPWNiwLDs7QJOw9DpFIxaqRSaj8aB%2F1dfY%2FAzO7rdSG%2FdBwO0D0p9WFbwwh267FowJZuCCjcgIRNAdM4OAWQAM%2FTuXtiDky8RMKNg5R0F15TPHkG5sHD3BGY5WJ9LMrm%2F5Nw0jCJvI69BjqkARPoJtNVaiGX%2BnhTf%2FOx8xJjwf4R%2FFgIgy5sCiGB%2Ffd2LTwhU7iiuVby9m49ow%2FvWBT5c%2FRoNXFKLNNCrMnORCHcZuRcEZAXkT5NPfC4I3so5gZjNtAh9%2FKTNDLH7VtBP0scr06ZFDiObk8ey85IaYKW7ci2ihtGMk4Ev80yLJIIcswDKU6D3rMo1SJwNSWSJYjs%2B0JuCqB03dtrIEzsS2tiIegI&X-Amz-Signature=54b2368f05ec36102203fa543df8c1e576b16824ec8924f46ca4a23285041e33&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7PEC2Q%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHAT7L4sy1EF%2Ftc0nnoVH6tsXFW%2Bh1bVm41xrmBpBCyfAiAkDqhkZ172qyq7SrQrx7PgOQO8Hs6hUeC%2Bwe8n4%2FtbYyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM4ohWd97cyTCJc8%2F5KtwD%2BDAPuq4Zn5noPCW6jQcphEhQ40ptxoJZfTobqIQkwnguuX%2B%2F5mYNx5JLKv5V5JQobUw6Hk2wUgFMqc2R78ZS2%2Bw4UTas5eMLF0iPW4cgz6J2w5sRrAMKDZe37%2FgaP88ifFJ%2FujbJgPeS2cVP6rewwQE1Vsa8NNmqEseAPwkIv7dwMXqKYWq%2BRkw%2FvqjkMKVFJLIdnORoz2LIdqP%2BOv7cHJE2hN6%2FsOuoTYHR5JeGBd8jxde5te2meAn6KHIDemr5cQ9MfRGjyRwUSd8ADUYyjpA0iCsWu%2F7HqT23KMhAv3BlmxaTe%2ByuNChx%2B2hyN7PigEmD891eX4rs8zy5EmDa5kNsUS7l%2FXQlzyEXO7THEdXp8DxXyF4%2BOQyFPJ4FE%2BrE5nJkAOZ%2FLDDq9Kxh7K5Z9xw%2B8SEsVshacoYRpoUpZcNjanMcVMy70nqLx%2B0vSvmSJ9zhj9w5TkcMNS8Lxtm5IRo63e65CZLfsgoWRsrazvB2GEFm5ji6i%2FhabAkHOQb6P%2F8b9%2FhzztNcqG20eQe5JRpxbaZ4GBlvQ%2FqTf5h61zfbOgn3nHOE8LG3s1a3hsgZL6bt%2FAM0%2FrTWFEZeuGJAnNL%2FzQODEo8Q9vJKzmSOvR0uFtXyifmZgNLsGzEwqbyOvQY6pgFe0V2ytPXMudiCFaoclEBV%2Ff%2FT1YC4ho42aGw6MDSCB2b3L4DZeRrget3kNCqjbU2lkIUWX0slviMCYzTq1n7%2FStcVRJwntp6g44%2FR7leGUiy7pmLgS%2BnO337nCOyaSadHWmiKLYcBAxb3YFyalfl7yf%2Fx7RFhIegDF4d8kkX0J5Vr1FLcnhGHIQPAYoGPApHWNisVLnSP5CcVrLwUzt6MJFOu4OMx&X-Amz-Signature=6cbca0388b618eb87553b57187a34778444489a47adc9d1ceb3eb04a3fa02cee&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
