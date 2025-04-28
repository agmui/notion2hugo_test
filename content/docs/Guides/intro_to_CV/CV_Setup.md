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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3T5WAO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgcZzhpteMBCmyuYeGbr2%2B7E7%2FJm9IK7cNsKfmRco%2BBAiBYOcuTCh67hWJH1fktna48Vm8%2BSyaKSG243U0prP%2F%2BLyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMKG37w%2FV5Ve%2BeKsx3KtwDkl9KKLfAAClBLS6tophcPU8rIjEyFqs9hnir5%2FTmGgzgBgKMli0akQgyhwxc2bQblXgrHe%2FaimybwoocnSx55%2FbQKhASCsJOQ8Cnl6tha68neJsfHZrlR%2BUtfHTrPE6XRNzMpokMiqWAWOAW80m8HmZICmBARbWJhQ9bCy823uhPwpX44cMExCop0O%2FuRnBu0cxt5v96%2BH58xpdM60GTt7xyUr9O4PrNU6MXq4YYPeGhAwmdKmgpM9FxoXMDnYlirmBWx7KVGJYHI3vBk3I%2FMGOdi7rc5UBk4nR1UGDVi472wOt%2Ble%2BqFVbvQVnBcxQdZfDVUohwbbOtEsZQEde%2BHg62b7Exr0QHVA9zln6Qg07ZqMnYRP%2BaBGu6tmpuHnXluEdofqFgUJnXvKfcKnP5iClmWNDSggRmOQO8h6tp9QmAec3edySRVLw2y1ncQqHyYXhbEb%2BOq9sLoc8B6gJK5IU6c7r8tJtt8Djse%2FiBGvOhoIHMQHleYrbI1Bf%2BtRmgzeqDoNPcdjxGh%2Fq%2Fl8aPIrfXf8wIetEekszTTqEPwLhdzUheN7esxHNSBoo%2Be1Tu9l4l0NjCkh89mDFu%2B6PvGF4wYiTewf6Rd9mmaDTTuLoUjYcnLJD7wctP3nowjqO7wAY6pgF31atcxvIfVyNm%2Bmub7BAe3wWYCLTLXqH6wIIGJoDxNtPMLheZK6jxezCPUo3wfd8T99Sn4bHbQ80w7RAKP8THesgOmqaEc7ozdPBdoSv3vXbQG%2FA8yU4I%2BxghcF0L%2BqvBOZdWKtXCpIgiu01o0nJkAyvqiEuav8mIQjQoGDT5WXORUvZ%2BP6JmQ4wmRqSOqBS8NAhY9uhPIQtlNlyUVldaGLBkL1F%2B&X-Amz-Signature=a8031c976bca71694d1bdb81719d43c60307ca0035fda7e5a84b1fc825940bbd&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRVQZAPA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpPJrGLRFSXRXQr%2Ff%2FEc8ii8%2F3MW1fNburrDX85zAygwIgB%2FG%2BOS7RrHmYIVKH8GSnpEDexgXFKZxer%2BlUlY3VQ9oq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDJrQ2Bl1Hns0T6Ww3yrcA3TvJKmdUonlpWBKlCLYva3jIfir08JO2qJwbkIg%2BBDMm18SRngkeHkdl5w1uYFXFEpoUbCMsAoB%2BiIBrAYFPEUg0zR6kcdW%2BnVdNjBtNfqD64fZxvn%2F8V9TGLFcQMAToCzWP3Ew13kRzQoXiS8lrs7HyS9d0aDMmZ2YxEtEPKfl1tAM1znFQkPx6oO%2FCNNGO5Haue1sG26XLlp0QzH9k5P4DD7yetHMXcq%2FvXs3oVhDLxVGo21UGs3nmzI4wcVVtHXc7jfUHj3Y%2FnF1sYiwZMnhaiapkbB76HTOmq%2FE%2FL%2FrRKSwROwbBCkNTMUb%2FsWVv4aTgoiIO%2BUsuHWSQFnFKWa7muUin9k6IBCC4BQxgYNULN7MrzXFoZuFO8PT2ZCbDz00GF%2Fw7bd0WEp%2BTtUKNTn3MHtS3pPtFu0NMkmCzSQScYVDrwHC3LjAPKev4deNVPENaZT03f4UsIe2d9gD80DYhB5cnEQtNEiMaM%2Bh9M1gOYLCnGxE7HgmBM1Znz%2F%2BN1p4XEzLRya0ynVfsBOpZvz8AxIHMsb4JRr6bs4eBQHIUuDiGwP6swNrENC%2FLcu4rRlXEzAXic8HfGDuDFDfkVUrSEu1nRErsOZ1amAHqrG%2BumkVULaSprZPGrByMOmiu8AGOqUBCzgfJ2WlHILLK0GJOTBCtmTA75YsJu86pq9BN92VAFAmUg9NcCc4QxlWj%2FVgzh02iqTU2UkjP3kHqh7IRKdhmig4AkDsVtTbuVAG8KPV36Y1rqhOkzy9buZKu%2F%2F9vtwNsXBuf%2BD9hI6mOGzFWSZDq%2Bg3h%2FSTZGto5LKR5%2FzpBA6M0EaoICifk7wkBkINexPPAlwEWaOzMcnPfJ%2BDjRI%2Bco5RGbxq&X-Amz-Signature=15a023b78c8e46b58782610940c7a213f3d794a6b202d6081374cf686d521a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
