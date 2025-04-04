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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RS3VWCT%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ23FfcWvq05Vu601pdW6ZTOffCfWe%2BqI%2BedDXNGxhDQIgDSJAe0CdnGrEMDm0JjRWhOo8vcqRM7OmuhKRC0BSFd8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDHqH5zFA3V8ZxyH%2FjyrcA0lC%2BX1%2FO0NeNmQTkIH9nx7xd2CDp4OKSy6vF8LLTMcBgA9%2Fh%2BIsIV4lCuqJn3iqvVW8ntB3lvjhMN7fFqV6VHCGiryrXi2XFFpIoE9W9dcY%2FGNlZtTxtlZr%2FyMcThX5DvWLNR9jesOJgKIBExna9HrcCvphnbX%2FW9mzodSvGZCcm3%2BOqqefK%2FV%2F7mkm09O9nM%2BFFsDXjKM%2Fyx66uCUdSDgC1n8eYuDV8weDQkla%2Bbb25T40hqEtuban0ul4csilM6V41bSB%2B9nvdhfQu92T7aarbWb7TA4Ow7FlEl33WbLSVdGYJL1wG1QGXjng8ODhSTAbMhhfcMoO8grX%2BdJ68Kte%2FnjCbh8Uf9eLlYFcbtQngHOZ%2BbmKHG%2BZfmBn3maC5znZ%2Bm6GeI4e5ObBPuG8SuemOb7i%2Bb%2BhfKld5Zl3M5ADiLlAp9k8fpxDHOJSY8SlNENqdsoez2eg5l28Sxz42L7doddKaJmcb%2BdJoWeFBsdfa7uFJu2SgS0OmaLNjlpaBNX2X%2FGzTfGL3nyaGAJyxmKrh3fqABe0cm%2BfbzGZJXPa51Jn9mBt45cyydgQ3H6kzXPFzAjRkRWDT1WfthifESSwjG%2FWrQXJXi2nTS3BTcgbIT0SLb%2Bi%2F2Viv3ydMJ6CwL8GOqUBlC8emgcVUbWX7I7x%2Ba895K4DX7t1b9SgIeAbDMH%2BTJRB6Pda2MT7jj8wjVajZ14QvollzQCiC8kLwhVvBTU7IdO78yiFgHtrnF%2BowUYPfuKzq9fZEjn6hK0jlsMDg4wJgQYroLqvsvIH4TPPsqU56%2Brgfydw4kLSky69nHIVG7JAicnTMj1g4yGuQEP82fUVeDSyFx%2Bd%2BPqFOwgEAqhEegpa9%2F60&X-Amz-Signature=b2aaa83849c761c89da5331c868acd96a118c7412577a6076a3e563f6a75f532&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA4QUMRS%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxDTL3mA1Dvb19Z4OnB%2FiV1eibPUsJ85pyAXIvrtGueAiEA1YuRt5HRnowNqGj%2FV3a%2FE1MsbjauNYgZ0kNwX2yDf5Mq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDCtY6KL%2B94ulOENyMircA711X4n3hcvthinCOeScY5Th1uDW7a%2F6jH1WHloyJhn3hUNU44UfQMer99VzGf5DJ%2Bm%2FnyMkPhtF58R8jCi9bMULPgyBtwv5ZaUirBZJnVbFFtLJ9%2Ft3CvoJIihyv5fTlKwdnJhffkQ5pK07D%2FeO72%2F5I5B%2BroxMmmMzXHAyC4THpc4PCOLUuv4aCw1pmgu73fIXelGrZXmz%2B5OHRkNScRuz0XPiTVgIKT1bKMf00iNMMqFz8FRsrwoclteVffgWp7TL3adfPfe4934kvIm7%2F3W3uJ%2FVd6vGixP%2BSkghQAmbtPVf%2Fht4ra17Rkwzm79iKo3BFQed44KnDONCfKYoNcG2ja5xYuM8Rl5snJW%2BHkVMTqP%2FwOKjsdD0Uc1I%2BQ86Q%2BmsLIsFk3zFC%2FPsvdsmqTYjqw3BU3r0p169UJNzxLMRoE95zw2et5XIvn3zpHMnoEbaWZXzA4S7hEexfzoL7zNo%2BbqnN8IbTI4yhEzx002qMqZMv4A3F8tLkPVfyfExeHIS1ysRzQj1BceZJ56O7ftU1cEgvim0nD6vwGeRRBBv%2BrFF%2Fjbmkg1iDB8RJVliDldf6BBV7Iy6Hzj2KbDJDA4yawKbpdxOnL6WXZBthSFlfsqkeEedIOjnvxm%2BMLOCwL8GOqUBzYR5qBSy8BieRU8m16LBEHQmSAS21dqZO8a8HYF7DLhmkthLHBhI0olwAR56Af5uFvPg2f3QXOZgTvh%2BcmFb%2FXi%2B6D4isaHKxLDTH15CLIiyxh0FYEv%2FOnNEWIPgNgme0xfneeG4Oce%2BDoD9UClaF2Hu7b7c%2BcTX1oHhG9TNkVWyRJ90h2RUMjrKsiGI4C6cA%2F4vbOIe525HUb%2FIDdx1tgllZSZe&X-Amz-Signature=9dd0b7f5d83ff6256e28212505200f804447effb055d0f80a5dc751caf0c7f51&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
