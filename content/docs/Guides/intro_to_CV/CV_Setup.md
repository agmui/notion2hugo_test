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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BYASFB%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCFyIGyrp4NeKpXNFYwbxwNRxTvV5gKs29BnFLH56vrkgIhAIsKtOUXl%2BqZxNnnV2MSb0uXLaOe0YzgjUeQGLmkhAlgKv8DCHEQABoMNjM3NDIzMTgzODA1IgxpM4uHRPuWuneXP0Eq3ANxhPSkzoMGsiDykY7tDcfoRODhuB%2B1hhVJbAXmnXffbso%2BWE4tifyJrssR0WYiKzdT1JSLhPqpAV4Ddgelawwj2KNGjVciMBkqBLFE4DWez2fiUkOWGhldpxNx5SaGhWIuwhalH77Ii%2FAIbKADj4UatX2lajLQ50fmk3wd2oyYNxizdE1HDoTqaeHK0IFRkEdZNCNpty9JfyJjBrbB3qAFNEsAiMaVKXGJgoWu57p4pJ%2Bv7vH%2FRkG3mLUKEkV1EoGCjZ5xEjm9pkPICOfDxjL9%2BNuXx%2FClnmvNaENCLxLIzPGucMyqQHqsJOUC3BeqgB2MTk%2BT%2Bukq3dHjRRAuWdY8qbripD98f1f%2FBfbakzQY6BY7V4kygti9zYSkeRO8csQC67%2BkBilQHY56Jffox0tuxUO5Ari%2BcoQLWnPO7%2F9nT37CNADrF0X5EEbYHFMii%2BUEecFOCVED10ExDpa7vGnpRS1mDiiL9eNdaJmOlygoPrUsJh5sOs%2BmQ9INLRJMNZt7%2F%2Bi2aQ%2BaidxmA%2FCRp4fneenCayVKzb%2BxL%2BMVlyLp%2BIucXBPTgamp5ao3toyXVLSkXsFK%2BrhBFXZpE1kAF4QXY9RskcxQkQhE1bFV855%2BK%2FX4%2FlaHHKhjwQP%2FQzDk%2Bpa9BjqkAde2wHun0OroTyEi%2BsdKCHSrzWTYG8LH%2F2LEZO68u9xNGhVsdkoJu9giO94dvQ6Xqha7HTe4yWCvxvbxzebCndJDzVxT5O5UqPJa43WhNWrPhyqzjVQT66k2wxlZiB2xI3soNMNdrHaXagje0CFQsuBQiBpd%2BNOALB16UvSQHPnl%2B2GEw1BPOdk%2Bv%2B6old932x5e5ZvN633UQRPBwASEiVRKTC5%2B&X-Amz-Signature=768fd25ef614f44a46af966654cd87faf3a01c326b9cca7f9ee87ac88e71a550&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UQ6ZNQJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHVXw%2FlsMcvLRnSAftYs4s56JgHiSZMBxtBihZWy93K2AiBc8JQNmJ0GmCIiF3uL0%2BCpV619vGjUHJdHrP9OvAfjQyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMiszcyBPrbmZqxyIEKtwDdyW%2BkdX8KAYp9VLQgcPkDb6ujynvt1onS57M%2BoHTb5Nn8bmypXbSbMFH6gclhvNxaTuaiZfCNCOZ1bvLGDosec2oor%2FNTcBg2iTtsV7CpliLxkuV3megHMh%2BrykLgPbjEYyJ0YuLNKpRhX0OK7tC5F3qmneke6X%2BsJo%2FWohfcYg2QEXnvJ%2FhU8Gp9K3Oncm%2BiCh%2BMl5aZXglBJFrE5B056srCoC65EmpqkQ6hz3QHzeUx%2BUj0knSvQMz7Qs2x1H2MfjX4BAa%2Fa9%2BtmIKVl%2F6LXOM1q0ePPGxIlLUR0eo1ztJreAqQFdN8hzeXpNxS2P2%2FFf2%2Ft%2B5zfbajbVjjrftXn5FJtYGsDKuX34nw1WHjUp2Z2dgr5rp%2BfMEITMWepT9fP6xVDOWKyY2K10aInCJzZleM%2F%2FOGkYkg7yHZcAHSf7EtSF1Jz2ytwYKE4G0k5JojHCTM7eudWLFfV%2Fl6Em8571nzqr6NHyM4kgSP7Zx4QUWlwuNbREmcyF6XMz4jF%2FQrGRDF%2BdmIZA81Eg%2FCGkkgD6x6YmnMPW2P9q%2F6XrlAKSSSZhL7Qaq9eWppTNi0sjWv4xFuMqCKoFAxlG5clB1hapX6CYWICFmSadD%2F1upoypgRAoV6y%2FpJwYT5Xww9PqWvQY6pgFeIsZLOU0HaJheXidJNXiGU65oWyiifyoQFgXJaoQXX6jGkRJxsm5FrgYyScWG0t3OOIrEnv4dBkEXlL41mSBRKEyyMosYZygAxzSo19s0olw5vPw%2B%2FFlhaYmaygSh5YyQ0iDdplR6ivozwY4M%2BUcri36XcdvVlA25HFV2gUpk1TAh0vAxI7uQI9LF9986nJAXAcQ%2FEn5KqS%2BN4NsD%2FFH8uEnghcfL&X-Amz-Signature=a8db64871aa24b01d125a8531d283e0b7498927ab14fbe9e748b51ba4c06d924&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
