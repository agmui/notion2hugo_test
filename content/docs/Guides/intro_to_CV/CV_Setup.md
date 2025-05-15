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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6IROGX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICQB33YEAeEe3MEfWX5cAYEfbs2pRZyMVADSJWVAsipFAiBkA6u%2BJcxE6Oukj2iGbGdG%2Fj08yCmJA6npQ76KzWc3aSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMxNkUIhhGI%2BBeDlGIKtwDAC6hr2Qvx2QYobfpTOH6U9jFZMMc7jbg06opoKx%2F269s%2FDF0cCxDo%2FoI9PQ5%2BB2o8uqH0AxCpDR4E7V64EEr01vVYsjKm5SWoVC%2BF22wqxfwx2Wxa9Bl9VpIeS0urIPV1RqsLIhsx%2FBvfJY5i1Y5weOu%2BRPvnRZPuFHEX9g0LJrxYmLNeY9YSAQzMd2jecBc0EIBowwDqYAqPiQR2kiKiJyggvjjmXy6KQE%2B2fb2QS8DkWRJN9SNaNnNqM%2FGzxZqV4Hal2NUUfpa5xFOpPTwQnf4Bf8Ng%2BZXbaoP9LvtOTeIQXz%2B7x2g2FIFWD7yPY0U7FOrEsGtvVgN%2BMc4LhwmoCAVpfB5nnBMYelD7U%2FOCM%2B9PRX5kRnT0wL%2BBrpAUBLTsYteEJEr1fT92vidPlIIC97FVJchM6oKVzHOt2hmOEck6efDCjWXld0yuuqSCUspi%2BNcjVX5J3HfVRATSHCTUKWN628r0OZlxFGpt4rfNPrhaTmMl%2BdpVoB6mgdR0M%2FM9S2MXemKVKqnpvU7F6bbG%2BGNHUqp7cr8As2jMTOwm7VO6zhIMZsFyn6dKxYx1joDJf7yXo246XS7UqNDzmqySU6ci72qGkynCpQUw2mbWP3XQP8nM777Fwd7UcUwmuOZwQY6pgEBrRjvTt3JMiycj11Ic%2FkUJEyseb5Nno8pO%2Ff01Z1tWfV35zSRD9QcNeHNnHg4eBLv62keeQNS4Tp8Tg1ldWm4qKYQwcF%2Bcg2bsia12W19FFowZ6HvlqNc32JmQXpQNElUmVDBiWF7LkVs9hWuz9Z5RntzNOFz5GLzAArrOt9lV8yaN%2BOzX95YYiisX22bvXW%2FmCtTH4dQ%2BDGRxy%2FK0OsoXI0e4kpG&X-Amz-Signature=884ce5e666d8b9f4487dd4abdce0c73799fce7d18312864236b2aa055e7ce30b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNUA7KZK%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIAlc9VtGYmV4MhbyRflIPbXJG2pHJh47LpOsuSCqwQ%2FrAiEAq%2Fa1%2FgHSyw3TxxZHMHPaX3yRykEnKIxDkZk5nrdj3ysq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDIOvEnPS5k%2BeJUkhmircA4Bi%2F0HqOLzYSBooRk%2FEXLw8P%2BUyzG1S7vxw8xxwSRR9hY0ZAA6k6XAdO9s%2F5H8ifSp1P3kOOMOPM7z0FJweV3Mba4fkCjJsapwbxfPwatCJdg8VnFjACsGbC%2Bq6oIRpOJernDc9p054%2FsHecWvvmPwPBTO1ysL%2BIHAXQkhX8wujdBWzLvPyhYRyGOov67TFZtpPiQmfBIBKg8bUJqAdrawRWihiERQZD90Fxk0doOlQPg7KJ4YloI0V2hnD2RFCEnAU9O7IwOqjgFJhqqatUEoIiMSDkiMIVhLM69jK7pwwxIoGBXdsmHIXmTH5d89b7nprc4DtxV296du2JR7uY3UHMYSHRE%2Fx9jjlf3OJyDb0bA7Jt8p%2FAEuwxewxp9A68%2BlnLNZhMl8quZKERA3Ie4cam4i5jA74a7rfDdsAd8qi%2BxejeVwKqhzgr%2FWiHe3%2FasBNtWgG77adwTP7s8cM4Ps85M4is76%2Buf%2BYCRgJj3ILU8J5Wid3WyVxxV%2FZ2kYQN8ULud8Ek1sopISV8ZbtzeE3xxI1PU%2Bvn%2FkBwuFh5fyy7wW25GlrBW3G%2Bw24TGEqZetZgMtVJYHyfm9NTgkl7n57jJGeGOVMipmN9qPmGhoAzulUz3WBuyI3p8ZDMO3imcEGOqUB0Jineyfdq1g4VCK2hTuFWYhCth2JJzXhlxSqzNWXMNz%2BM%2BbmIbmVvdOUUambnnWMBK6HuT5vOY12vy3tydp6lD6y3xb20bv5yz3VUw%2Bnhb03Ue6I363y3UN81SZR90la8%2Bn41HPp%2F0mxBTkzts68elHE6ITpDgXYJlgQDRSs6K9ZIQzHL7Zu5NP0JlpXpjfsSvT3EhF8WHdT7AMtT9tuUvsI28Yp&X-Amz-Signature=d8e78948e37808a260cc87c3a0c58cfe5ea3f26900a45199fde3588e66714454&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
