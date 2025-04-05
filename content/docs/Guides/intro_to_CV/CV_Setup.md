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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQA2QIN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMAlKy8WeWniSXGajgtMH1AawzB4Ow%2BY2ZTcsKR%2FzApgIgE3Yyoqr1YoF0KAACorpBgBMMdJRKj3fKlZRq6IKQQT4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMYNfvXrlBGa8xWFxSrcA1pemSsnp5SsCCp%2FyF%2Fy%2BnTEuPW189IXxeZ47%2B3QW9mvpfEg2zfRAoKEEsu2%2FObnbExCBKD8ixpxefTG9vi8ScWETi%2FDpKaixi1Td68%2FoalEisIkERyWQKSIHrfTEHxInRigSiArl7G5EJ0RBVEdp5GXr5%2BANQfcWdDuLD8xTd3ESVSKHl9MdE7xKZ9hWU%2BibTvbMyNwgJk3Nq4sMrqaUtT6uisGfnykGJiDO7mKqGUXKjIhKH7oqE97eW3vVUOKI1GWf9qqtS22kR3QP1jg0dewKH8Xn8NY6%2BF5oxEfe9lD7fmOR2FMN2GTTGFEcdIaKZh90BHBhDocEaqYtZu0Qx3QLyxEueD4D0%2FhbAjOm3kf0LnwQV6LjN48Q8Go7pt3OmbwdHLsUKLwXel4j9UCJ%2BVcNivOSFr5z0S0YRbCn%2F9d%2Blk1ctgLDSkT9gSlXvA%2FCqGFH2zp6KeWpUiAwwzJXZj4UbSfa2OgsF83STfxOiecobeN7JR%2FCaqrocRW%2BF6tXsk4sjpqKX9csP6WGfCYnY55K2zjUDS56ahaEwWjD2EuElLjYhtgTiIrvFUIRJzajKFarbxJLRS5mRGEH2qOa4weuNy%2FqpYwVGpI6WuiDgTBYfPhkmtolKOohQ3XMJu9w78GOqUBr%2FUPDg6JCCMrcN676Y9wSCyAjJamketgPDBsCFMHaEaMAy3kSiVZKMrm6O1zot9I4KH1JDbKNPHriiXXmRG%2FwmnuKcIIzjlUWbvKkkSP16kLUo1ykZHAnPZrvc4wN2ITwB6SB3iG2ps3psry0tG7SrNuVMT0kGUMjM%2BrUu7Fep1DqKGvceA37sBAvfPq7ufGn3SJ65Z6BC2mt9CnhYUacXsMYUuJ&X-Amz-Signature=8c3e4c227458c9eeda94aa85f18636775c8b5d8a2d9db88359642d9fa6655401&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ6RQVTH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8jXADdxq%2BpgdT6h5AhuR2OVOSiYVsdasBSdIhAg%2FdqAIhANTi8LxAFVtD%2BrsQBzmH9NtrjnUiF1D75b6aPBjzQmRRKv8DCCkQABoMNjM3NDIzMTgzODA1IgwkygWP3IziJq0SNtYq3AMcMnXt%2BgVQQJZPvBYVd6l0DdNotf3%2BG6xTF%2BWZoxGtSSqgfst3XNNeeBtpEHXcNTz75RHRZAya%2Fd%2FkeN5s%2BaAW7SOiHkQReau9F8BYTX8BlrZYH9cKJZDhMzT4BkLSL691c9zmMir39xtpMRw3lnQ4jVVcW1%2BRecef68JfIm7C6wBASNA%2F%2BwiZvP92cxamek3XO9zH0R0RPyWedAVFBwDh6mNtEUNIOzMhLlgYKep9d15JGtUuMauXbEFW3Jj6mQfcroKp32HxcxczmjlpFmDRE3B6AjqO%2FBTK2CH4wK3ve4wffC6wKYGXtUJC6f4N%2Bm3c3ikazFEA4rvBaNGKRdO0rNFI5jl8Xs5BcuFUFTlVef0oVPmaJlF5gwp3xr9iEv5b0Y4tJPOtFcZ36trOdSe1U%2FADci1PGbqDGMq%2BBzAnH8QW3pe%2FC4HRd%2Ba1bjFPphPEUJRDoyZ0n7LXZ%2Fgluh27sTu88TKvyux2J6OBC%2FzVZLYXOkuypvSJu%2BK6a90vZ3oc8Kd4c1IPGb544HJ9VkFkBM8KLqRnko8LWn15yO2rR%2Fdd1WdyS9iWsBf2TeI4%2Fh37yk58udz8%2Bd%2BRgAbqdq3sfYcchcQ3DPEes8V9yiV7qJtd%2FHXiOIHTeX7JzjCkysO%2FBjqkAS5oKG1dNsXhRRlfIIbHmiSF4tM9kHkWVxbwbJfBAD1gAg71p%2FIeMUweu0Ps5lK25JPj5%2FQLUN%2FtTakWmgg0H0seHnBS9O4%2B3oBBTvqORLJFCYZFRRrF4PJquB%2FAnoUCHn4VVS4x%2BptpATQx98aQ3lb5VGG3UYKOkKXRNWtr2eegZ6veyyQBZ%2BpueT9VyS4NA5lT%2FAc93RZdWlSyYaFLJBAiLmql&X-Amz-Signature=759af07536633240931047bf87794a21d1112664d48d8371d4e10ace3d21c5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
