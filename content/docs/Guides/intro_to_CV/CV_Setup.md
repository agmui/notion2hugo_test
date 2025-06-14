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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFNCQP7W%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCbKTtvZaT6KKcjtkxl4UQhPAGcX6brktDOrrWEiwRG5QIgcIyAR3lcRFgtt4K%2BAdpbOHW%2B964u8x0Cltrz3VFqie0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLKwsJnCUcZEh9sDCircA2z24FV02Cs073Z7LWuLev6qjsL3WE8Wrh0P1pFPIsIn2CKsHr7RDxmajAUyaJ%2FtUyVa4PeJwlpPntjhpz8YCt8e3uiiuKslm6x70V710B%2BffMiCTSLtGUnFndJtCxdZCPYGdijloY8vxPN54HZIygTe838hj%2BHUekbDYJzTn1LRsMNTnB4BjDahzDLvSHt%2F3jUuxKKtqDZkae2gh1Jipu%2F4Qw3E25vfjARB7pNVmxUyfwbJnoSJM2YF2rpK9sLAX0YyeKYVicwdxKcaLaIcdvJzy95SeklXFQsgXWBx%2FZ2Ki%2B0z2UZ2QH72GtQsNAruiVjTK7%2Fzgv1HhXlr3Wq0x0DxZ7ls4VoVwk38rl7ymOWj6EOA4iXxzRCGkh4Mrsot5WO7X%2BnO9eWOz0zBtKfvJzVtif4w1QQOn52SrKtfKbDAc5Sx3LFMbQ726msaL1AII6adOFQwZr2ea3fCp2aFwyYf2KLBWjH%2BDiNDqZcTNlKzWk6R4K1rjpw3k5jyWCdq9ihQZ70qogM5n7nxBvVeMNlwHjAen0c2BvKK%2F1%2BUQX5xe4Z5T%2Bb3cLK6eU8iOx1T7tQyOPbxdzd3KFDk95taUWYhLsJgTuLtyNns%2BmRFggLH0YryJZ7DnloUpPRHMKO9s8IGOqUBD464%2B94hBF%2FS1LMRB3VpjRob%2BDesdCNvwaJ%2FiKN2Lxo155evRlfDFoCZBLmyjF4oK0k%2B4bjflFSXkDTXHurr8pWNeGe1eWd9HEdXxUn7P%2B%2BN%2FZhxpFg6x4PXxo3i3R7%2Bw2r%2F3LWuB%2BWBl0IAyRKvXnzDSaxn8iWK5LEgRsl9ObJBhBAyZauIh5r0p4vZFRJtKe4S%2Bl%2F85VRa3bYDVp8YQS3U1Wnp&X-Amz-Signature=6a72f0076acafc13deb60acaa31aeb4dedc08410ce214c94b94535dbabad1561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQO2SVV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIDN6NUgMn9AnNl3gd1UWsqWjQVwVoFulotEgbGXvge99AiEA32RFRXlT5nKLEsHvg%2FbZHULdk60TA8b60s84vo0sff4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGdlRyMC%2F5%2F4vxB5cyrcA93Q6ykjUYwsjMJk2Jw%2Ff3QFnc2CkWcnWfk8ZG%2FcXjQTHA5mDbCk7hG%2BNcpCod2tZvadMYxxKNDPC8HIRN%2BuV62W9AdTg1z4UYzK%2FcwTQSLO1TiKts4xw%2FH8SdtQYeiMOzDgWMqnnOYJi97rCATvRaB%2BmyaKXSQg0haY4y3vD%2FZZgTJsilr%2BmKCwfJ20QjxErXl74U7IOJMbREncudQCP6qltNzxaWEKi9rUPKadZNz%2FX3ZruNGPGP0n4MZ0wxzsitgy8PvdsoSuAQIhsGZ6fUY9MXBsRJHWaELANlqdPtV7Q6yD3riQQnXd%2BnyIDm7yparUB%2Br65jIletVghHjadibZNdK4M7T253wn012PWyowX5jfDuaVrA%2FB98%2FAGRMpg%2FZ6%2FcYoyKVjo9GntV2%2F%2BhKKRK%2B4gtqjjyodUO7fbH62laNjoM5xXGJQov3SBjh2WvZhRRv%2FNJ0i7ow97UQUp%2F%2BLnnbAhADlyNgkh4gAPNZHFQ1A580G4dM1u34JSIvjVGMmFWyXYRLKaKriVPvW5VO24KtXCEQw3NBvcjNJim2IgMY00o2ltsbvbX%2BjInjY7Var%2BvOSISxv3kUn1gJ2vDv3zwAiZhTumpkGVdiyfNzyh616bHDG97rPYaKAMPO9s8IGOqUBbp542YI4NKmdz63l5iKkznYjEHQeX56cg%2F18mWbLocxgf8TkOpEE2v2Idj7yE1%2BYtyzGtfDv9zUvpg0dMwylW2PufPaDMnf47eJc4AJTKVFiuDDZkyxVK5gv104Xmnd6NrcsRjL9etF5BX1rv71OoZDumkXeasSFIwOyvGrlj9wm1S5Dy9Aot%2FIXWIyGO6z9P9iXuav9sHAOBIhieEEawgb9Rp5Q&X-Amz-Signature=2c989ac236ce41478e28e2f88b7bb9a42291db31f9db449a002a542eddb0302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
