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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFQ7TCB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDgQjx5xBcVWDepqidr%2F0VyooeZUSnJLN7O6K9wVDvtqgIhALDtwEgCW4IL2%2Brm%2BnK%2FmdCThjIGMLp4EtSrOdYe4PfEKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjABP67zbB6f7ctQ8q3AMEkzAcSOIQM%2BC9WcEAtqoYN605vEgCHAAC5qA8jPMIcnDa2VpMZLVjnyxSi5SndhmjvAjUQLNZm7m1mHG8RfWqkuDvipGfFf%2FktoWFtYFwQWSIJPzUZfncfJ53YzgsOQUeJPbdvYZzhTOpB78zuhpZotLi9DfE6IWCHZSnoPuW%2F1ps7o3NYSZIHUtgF%2BDPRXQE64dOzbwJvy8YrxFazQm%2BysjEPlZU%2F18hmr5D2d88JJIJwgs4DspsXR20lS2BYhTTqYqsMFabJbh13hbPgm07pQM8fl4iijOcO0AhItL6V454VHcupJTedQLOdlfTgEge%2BghGlhKA%2B76ypGadZaCZEntrAy2vr1456YEN5yLv3KzuFuaC2AO0GQwzJ7Fid04H7goBObet59G5uvqJvBWHA7Y1mGHqEaYQrzEBuv%2FjY3FhCpqEVMYET46ZCl9%2B%2BWjZHxSbhqfGqqAO8R1GUDgPes2%2F%2B%2FT0o%2BbcZ1ndQ5w02P7%2BWT1ci%2FtU4yTGETgcC46qJIAdhLQ%2BrZhXME0pw9vLRo%2FK33DPVtyRoEjo1NkTM7bHOM4xcibDd2k2SSCqjbo6NKoF9jwlnpSQ4PF1Dq1fiyPm8Lvbv%2FAXZ9dJ64gcA0BOdjFPFtCwN0U4PDCCzf%2B%2BBjqkAeHjRc5GtdWy%2BCtdRPPu3LcsQW%2BmqezHiM79uOGn%2FR4Egzpy1y3Na%2FbXaOaONL8zVlJ7qqKgQDW0oHlE6%2FEbpaK%2B5XjfggiE0xP8Reg0ImP2%2FtpSNSBFpJvTTsDIVw24ZYWG1%2BbySCQBaiKePrGiXUDpbua0cRF1cgWbdgUUIN6k2ibAAds4QQZVeOvf3UtF94UThAwxhDqtzG3B1Gxvwba%2F%2BnoK&X-Amz-Signature=a155ca2b8d0f4153ecba2e50f5d4ab26ed5a2b3b9b5d0d9409e75cf9928944c5&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K3CN7UE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIADalarLkosbb6%2FRzBTUo7vj7h1LYw7VON8SBMicogV9AiAjH3JW4moIfjA4aitflWTlRziyvQc18fUaWDVTz3AjSiqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiM5dv%2FBo%2Bo7i8R2pKtwDPQbFcm5x6HttZi7sxYsK1QrCD%2F0NRMlKzrRHy7BZPjz%2BSGdfOvLAsenLwYINULgcy80Dx14KD47%2BRn3JivyOnrZFkU890NE0mWD37GrDHhfyeCp%2FLsEBVKAUPkCwW4hnmiYXgyXkyyGW1CUHhiiGXoKXXs%2BYGiP71mDr6%2Fza9xiSdzVUSQmdwbjZL6uq7ELRXVr5SFrMhlLbnMI2ndon%2FPNXvQME4h5BKqw1hgbMzYmGDjrtbAUM5deCAxm2DCeqQBBk9Mc86KsJM9CV0ccFdFjgZ80RZQ6RiZ3ewp4P1vneIPDvIo9ripairYbu1MewEAFf27g%2FxVlTEdQJbtgLfbeAOmQImFzbnlUJpn8LAbASvj5u9SAmpzvtrTTUICwf2FWb4wOrXJUv6ATmUM4CbM6VOHO8Zl0mIOt290CkaO6B4%2FlCak9QT7Yh022k80ab9XQtlQxfJt0fkMH0ymzKj%2BSWyZvkQMkQUiKGEQNgOGI5jFivSYZxI1lLIXSA6Mj4GEyEKyL%2Fa0TH%2B7Nl0Oa3Gwn3SYMXiJsaPrWGidH8ADkNb0%2FJ3BlWW7U1bNGmHN5peBDs%2Fl54%2FRnKiqx17KLFODWgZosJVCEDAbzkVA59t%2B%2F9uVpbJq9xqHcEi5Mwgsz%2FvgY6pgGFalRvuQqDrqZmfy%2BTpdps9jbO418r15N8B6yeLdSW8mvbCqZUW8%2By%2BFS79w6RmB2MkVPM8S%2Bentjq8BlJn5fK3uNkLsvMTBqQVmKBlYNcQBEePysLPKcozsEI97ecII8k1U%2FBPVDWSB6O5d%2FzQjrKDH%2FRuJD%2BioojvF8TO3WlWkraBr1blrqtsBFyyyIp2rZRweHQtOu9FHElsw25SzjwEttDz%2Fv2&X-Amz-Signature=830f729612af8574abfde4b21bdbc0f9298d5df4fc28fc7b753f4cf5284ad28c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
