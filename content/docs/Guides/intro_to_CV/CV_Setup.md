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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5YBBRIZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF0wz1KeWvDNY5ixMdjc6%2BL65Wi9H0uTjKB2NBPC2gVAIgTwXnq4WxaZzDwEfTSZIkwg7vX8zXSte610IvP9tW%2FHEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbxBjlhp8P%2FDyx%2FMyrcAw5%2FF8FcoOTVnpik8hxvoGz%2FmhO9i6OeS4%2FQ7nfk4POWfdj5IxkV6iohp6fm0AGj2dsyjGbdqCJA1a6m4FXd4F3uRScH1F3xMxRwwAW5%2BN7Ys3guxi0Ekq1bIulB%2FichK67ilJ9fJfU3pestiLEojW2382HS1rn7RBDfBEDHAsKrkJ3qX0A2JSCXyA503ZgyC3o%2FcXvPxkfw9JacnCQqHw2MYWS%2BOOnRdFo%2FdAMxLTAmhPVEcfknzfwoRIYUI2E8Aqa8Fnf8E9u9E5D9k82EGFpRTqTdIUT6ET2kXGpNJNPtLnGW65enm5zFEaRciv8n01zKDq1XoMH6Ae%2F4ds9K1L%2FY8ddFmzGJKKZ1MYb%2F6AXqp6Yq08fsm7olHYxjnScVmPedh6%2FyjPoctW2vVXMaHLfETDmxiOxsKD8BIIbGyowN0WYR3c5Q75jzyhHIhCCUuRENHvsLXVsWdwu8OY2emS3DN4TOPjJTEe1jehRV9ggiAYT2bZxdEblVXHTRFslVuWkfuOmvD9hWtRLPmDUiJCf3PkrLkWUUW%2B02ljrHFrCIX5A0PvGYWV5zR5QLxgfMLeybpZutMPkQNNCyq2PO38qrcw4kCI6F4MqvNZHDfp35eqW9bDquYtUwCKu2MLmr074GOqUB7kGqEBQbZ90dOcmNhjrSToFOSR9FkF%2BBRKT407oSD06lkPg5kp5o0PLfRyaBqO4VnwDJfdA91SbODcNO3WppP1okPCOq5WD5iupdaAhS4YjPJfPptnrJTkOStrVmqiU0bMQPZeu8uMqDz6%2FvXf1h7SaVRaoQF87NoRMUFbBwtDobHPGhErRPtF2k07C6m8cqP0a1iK3QZI9yoiONubmAnyjdgjEt&X-Amz-Signature=3f6f3f30642c29a646229ec247714b20cd39216a388448dba0bbbbc265bb9615&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDHH2O7T%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV96HOzMlNuIkkerBXfhjq956i1VK1TCby5uxbcSeVeAiEA1uZhR%2FR9SrsmtGZMsDK7thi2NRjgropiPe7ubZnjQg0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInquS0WS5IUjDvgZSrcA0Gc%2FV%2FuGRorexAc%2FuDaRxoWz9LpzzhZasPSsisHRQbqhP3eKyd0nqYn4D0IRwNH%2FID9i4OvdY%2BEHVXdJicEjmwPNtowmBxzVTI%2BPsAnFMU4RSNEYQVZisEc00me%2BLv3mP19CO6GEuNloilYVShve37K4IYSc2yR2KkyhU5cPvzxmI%2FOkc2xXYUEADG%2BMPTMV09EC%2F9HPYVCLcsMPTiDdXLdjKVOkZjOL%2FS7HT3VDDXdim9SWsMJ%2BhIPQrqE%2FMgFNacD29oU%2FyZg0PTnJSv%2BCnFE%2BCj0J4fkBWqom4fziUfAR8CAzhC4rfItKs4oB4EljCtJ64L2Asm3Lyf8s879iNIoT%2BL2NccP%2Fc6hfmtlQ8qlzreLWWhJX20PfiXtxeqSLA%2BtMc4kF8r0zTiZsPtxo1wwFEabO1Bjlkn2TcUhfCaN7oREfYLxOeOIuEdrdQqNSCUwsJ3Y6qoYNt0q0IFBzxJkEd%2Fh0hKHSlMUYeywqRRMLZW4peezKX7JEL5T3QLIivEzTOfW01Bc2ojesmrV%2FXglxnx%2F%2F3ORZnqPU0EjYPzw%2BR0%2FPhKxkDkA2V0PzvmsJppzJmwmol4nyTlWd6AWBeXIqgM3yS9vW4PFcPj4Pi%2FjQ9NSU52ISFZ2Seq%2FMMKr074GOqUBToNAJeg630VCxfyYAvYO%2BTdAtjd2yYGt1wM7KWDDzNZtOezP6slScpvK30ZNIL0%2BkHrpUZJMwShVjeZLZX%2BtV4YBxB5fObexta5SD3LQUIiEYEuG9KMB27Bx%2FU6g1Xu4MBh6VqkGW1UVyaxZYqzw0A0E%2FbCFkTfcvpVfMnY5ecCrK0pQOhs9g%2BmEKYz6O%2BRCebAhjfFaiPghh3nLAT6ML%2BM632y8&X-Amz-Signature=bea516b7cc7f5dfb9023229dce0cc6fbfbb1157166b2e462114ef0be1c0fddae&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
