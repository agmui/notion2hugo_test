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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWIJ254%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGXRMIqc%2BVEkDYfTs%2BavIOdsh72QZl8uyF9y4Z%2BpwJMIAiEA4t5guVJ04EKEz%2BxxZQpZ1MhmFHoxjBG2q0o670jIsg0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCvMSkPC8Q0sqHtKzSrcA7JMtNukhlWjbLVhMX1BWs4fQLy5TTRvPmDweZr%2F4jbBFhio9ROOXahhH5npVnd6b0gwKTRLfKWJ9136sDBZY3lAwM4N2eVZz0pW7vnOEsi32vmsnUyieAdshP00ZfRTX8O9sPM5cK67NFEO%2FzycOqomtpGbapfeQ2QcmhzmH8e1eBZg4m28kX0viOHFftt5osHZCXdLlgF%2FD%2FjX41QrjzqYn8AHdDrrHJQuJTBw9sR9sKk2UAXYX5W2nQy%2BpQjB2Q5Ah7nz6feuwkaLbMl193yT5P0c1UHshEpwLLY8GRTdgODlAMTfqITrj8wM2%2FjMFDM79%2FL11v8pJwXu%2BtAF9v5oTjNyuxcf%2FtXcu3TS85WdgPT7lcjg%2FAHoKBnUBtPcgr8%2BcA9D5dZjrSvAP36OZb1EQ%2F82Somn5OanHbwAt4wybk9D66WorEqYVV75CJCRWW%2FMJb45O%2FnVFzoqYhXpH3Tv460y5Vdnwpd9b51NPH6qBuRhDKl5LvqTtAo%2FuPxxVMJrIrCMamgyOKFmdmuzjZXfvV2e1oR2BIg388dXBAfF4pGyVtDurGpBPey32mJU1Ez88mp3%2Bt37%2Ffmw4tJcrBxJcujM5r%2FYxGgegJ4WiexdetRa3H9%2F8NxMJEqXMOnSscIGOqUBMgGxumWGU1tmlvxPDxTmPi9DXu0PmEWwrGkmXBQLQJqFbjhnK%2B0I2P%2Fsz%2FsgLCqE%2FbIoe3mdc38td%2BVH1Qer9uqw7qG9cTRMR5CS073jOIl7KM0FIk%2FLgKwo63JO0yHbbR4N8cpc5y2jLbXcmswBiVzYvkMGDvxUX8xlHZBHrZcNDZHAggLOCeNu2NWSaLYyVB40Vf9kKbYhSftBQlt2m2xNOgQp&X-Amz-Signature=0bdcbb7a36acd8169b6249b60566e6354ccb2e14a646e74f9ad3251ba7ad3ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS337FR%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCp%2FDpe9dFVBQZninJ26x3tpiz6Dz6QpTfzAWY%2BztST5gIgY6XmJKm9mYFxmwbmwMBCUPKS4IeEQgWA%2FnVy0hACUJIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDDYIzYZkKPq%2FVgsrtyrcAy7oxUFvSsFGEAt6hrJJnemSw4sSJcVudGQzvK2Vw72mnbd3SQYK4gwamD362O%2BZmtxSKuZ1T%2FmEx4XtKNZmlh08zLepaxf0WzrQp497R0Rms5IMzNA20VINYeC6y4%2B3xHvojtTyfu%2FfQj%2BBC%2BtxZT12OoFiAWxeU2zVquzNzlRs%2FmD6y5Hiy5nkxsPoHwWtYN9acDj5b%2FdZ159Mj4S8yY52yaHkRrHb92n1rH6WbOcUR32M%2Fy41ta9ZiFKwaaqPxQGeH3sE2EEez3LvQHAI9Xh9NGB2b2OLJigb4q6KS7Af2UYMlOxazlRab57uKPmPEiHsD55ZaGjgKwJR40J91lvcYtOq1lIO35uBMvSydIBq7LlycXfj2bWhZbhmBkOqzW2uxYrE73kN5ujXtu8aw91zzTSLr0TyFr7h4ySpiudYPDGjeeFA5JgqWxxwZSe%2FdY6MlDnIh%2FNO0AfQ1EIomeFhsMkNIpQ7gFOjmjmsXrDp3YLuZwe1f2b5UoIrrBgi73jvEI6GjiWXXTng6dWiH1f7SPYRevIa28fg7aDOfAQCpo5UYr6qJu5Xudj9W18kVIm6c4HmZ0WIK2ygETbNiWhziU%2B4%2FVrTZVTpJMV%2BF45cz0AlddkqvH3klFQ%2BMNvSscIGOqUBohKSmApph31W9FO7kb12MrxbwE4Tfh8VX9cwqH9n9zIR8jbcudLjR377kBc%2F6WucVqA051Qmvj52AySQQrCTVL%2FjkvjnHYnEnlaDjZS%2F%2FlRKe7%2Frd8Hd%2FrYZMiKRisZZ1JJdCHFHOpAefVyUoDeX8QXbovEmFZ5RnYaq1xO81YYA4j52tsMRHnWVFXqm9fOg6bVWOS8wMMmjT%2B%2BJ4Lw9kDo2CSCr&X-Amz-Signature=6aae2f3b095bef3a33e8cbd68d549681bb6ec3aa9614a9392c38ea614120e0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
