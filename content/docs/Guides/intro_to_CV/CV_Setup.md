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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPCQ7O2O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiMRFgALA44RZ3CrJpZHPoM%2FdQxnRHiCfIkBnVMzIYwAiEA4oHwd8bzFMWSajwam0YjXbxW9K3Dny1%2BcKz%2Bf%2F1E8k8q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEcV2u8y%2BWgJijzsiSrcA4QqnKEj0Cq7VniLZ26fMvEJnWpcHvpg6YNDYRhKnLKVgIRLAK0IYaAFT1B9wjkI53BtmkHowlO4Kr%2FL%2BaFcsS5CIXKu7fxzecSpvHSleoI7rUxeOn4cSerplCQKLkJ%2BPl05xUa07pR7Ajsy3zjaWMLfloRYCtornBin9yYnNlUOMmXRgr9F3J3x4h0lnf7WGVbHEQMxBX1OxcfLhS8W4cP95QHUNfrHWqJ12u4kxPwu%2FJvwIrtsylfy3j3AuBw0LR6IWcbdTuJBmupViMzRs8oO7WK8Ihtgn8eUmdiqvrVZG5GrrQs%2BoBl2ReMllBsM3zmaBILC1N1OVTHdncupEAIGOVSS8%2Fj59M1yhcaEiSJJDeHEudgddD1RB758C5iEw0HNklHt4Bgfy75vt29DMpLAXwlNmZsxnsthuW%2FOJYvUN6KFuiluOTGLKUW3CukI2rGiulANbK3Lw2RaPEF849dhS8y1%2BmN5fCYSY1Mgy90TmMW8DFiNGPoXGTiPQc9z0oVaCNDEHWYpWt17QvpbmNZEoV%2FRV5FG5G93EIx%2BsjrdtojpasCsSopLibQnHfIDmhfZ%2B%2BgUQ2Qa7kycjxHq1NrDk0YuYSLzEIL%2BcjzhYRZ3kVZvVNMuu%2Fpupf3EMO%2Bbu8QGOqUBx1S%2BaGTWxx39guZoy%2F0v0pTtrjrzgmMIeovrs0s308rzvTsXVrEvpPT4A8015bmNScuHWWIYrh7TbByGcxrOZIpIeej3EwelDKU8amJH0q2w4iRWaWVVW3Jk0cZh2cqueMO%2FLt88UTxsWIRWkwyNAOzNoEBxqFutpJ1tDlQR27RRCHUbO%2Fjq51M0JSyG32Up6g20veCZgsYohS9PQGlwqrTiNaLx&X-Amz-Signature=0fb4c364b9c499eaa269938d14e4cedb2b72358d7cd0b5d63aff9a5bc92a29f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETZCJAH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNkSM8%2F%2BpqciG9i0nJtA8sEf3BqT4AqFkALzsR%2FS%2FBRwIhAOw0mIrTz%2BTqbCXeqbvZFOTb5JvvufM9zqz%2FuJVpx17GKv8DCCQQABoMNjM3NDIzMTgzODA1IgxyXZg8eFrOOSIFaAIq3AN%2FAsBpd%2FgYaMTjYESyHuvL4T%2BUHndCKzfRIGM7v9uewSBMArJ0yyxn%2FLqCUuqWw7lHPrnXD6Wp4qeMV%2BmuxPKJJ9yWGiy7diz3F4g9zbZYNtyM5kcZkOOstmIOIpYatKsOw1ur75zygyBuf%2B6us%2F%2FG4D6Ks7CX%2F4NQ30YGPzYW%2BRtUfdIIXMpHKWeUqGsjiNuRcwuwgd1AxykX60HitHUR8g4k72S7wBvexfTaZYmi6Jg4BCejpKsCALPu3fcqpfekRse4Jx6zbhLePLhEzquyp%2FMIg6ZWLGNoxL%2FetUtXp9eAlbfSdeM4XdOs871aJPuuSjpzJ1CmvxJx%2FSHrRJlTgzTC2o3OdyvZPbP6rkHUcwZQV2Vfr6xHg5KP8uQpq0d3azQ8rvzZkJNaWA2ef9TnpDaTggAhjIhM9KgXnN2uZNnk2RYjH6719opudqqDjn7vFxkltTzUf5%2B%2Biksu4CEyhEe%2B2Jk2xyO3DFxsoXt4%2BIVRqpmQxvFd9N0wR4uCpgowsF5ycKlHwEOUin%2FdlCV1y74gd4K0DdUfgGaDcowGBdq3TU2byqs3OHO3EZSQ92kc7ErWTB%2FxyBUfHGfzA86Gck8Ph8JHyhh5FoHi4hxDDHxkuNNhF2OuxxAtTDCjoLvEBjqkAdW5%2B%2Bu1fLV976CfacivwlQLJpGd%2Ff%2BUUGM0iW12P%2B2X8JK7jd7oScH3D9vtB%2BBtYNlAWodNl30SZJtpBjxYhWG6mp0evNAcNnz%2F7kcoiZw65bVrj3EeXR1e%2BbH3NK%2FB9g5eoozRd8Dm53bCcmNckawnSy1Pat5XQlxVnoalZjMmOZhO%2F2oV1NVHWQZTFbuc8Xig1eGObBWEMEQVZJw44WOjMit2&X-Amz-Signature=813a8fc485f36aec4dba6440ae8fdbe943dac546f0f95f1496c8dc4e0ace75c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
