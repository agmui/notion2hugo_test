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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREXGO2Z%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGB7G4fXNSi4WZRyqE%2F9K5XAe26txLlXIHhNR%2FTjwNRMAiBDGxoB6pb0fBH22WSNuTPt%2Bcic%2BW8uVAdsMYyWF%2Bs3XSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbOl1mbs6LueVfrT7KtwDvxqFLJIDmO6pxUWieqWzMmCx8%2BL9OW6XK1zuWF9kvJVaTQjzHvbitgG4RgJJDtHA6Shch9Z%2FSZKrbE39cfIWLiEwXsu9qv3sf%2BNODYzYEHQZfrVpkOpgSaG52hCGa%2FMpZXs%2F7kOfXiACVePIOacha3E6aHQ%2BaiATot40G%2F5%2BfWOPOLT4WjkePpwSDGl54FHbdBgdMA1nUALfi0DrQTXtGTbXrCj%2FwJV8p6B5ggKj5INjCYNDTbF%2B0F%2BGjPQYuU85KrK88Rp5szyIFtBj6G4eZPoBfWzyXXYtPFk2Qp%2BJoPHaIvNW1t5E1rISNQuHF3maejVYfp%2BUnJ3wSQdWZ2jR3NCG0fVWUrR70iTbS%2B4xRZFD6pcGWhuyHzum4lpcJk1JnUzVC%2Bd3gfQWeXMCLVY2ZumSeZYzHriiEtFMoGMDPE0ylo5iGXIaoZw%2F6X1YBG4vbnZ0oH1jIpWTnq1PdkH18UHMAvqKrUwwS9vQ05gZYOQyLZwLyjqg7Fn1TYsD9Io0gu1U%2BczbokDwAnZe8CkYB3x%2FAppqPOWWPsIpmopkrKDHhYkBwsFrwmEAfFb%2Bk7O5iEmXAAidfVRV0V8oKuxub9kLTxw44g6DUo%2B9GV9LkxBJiuovIKxy25T3MQQww9mWvgY6pgFzIGuptUjg59vogSb4UnPaPSUJtIg42CNM%2FPVhOABk4nvQ5MWTUUaL5xRR4rXFoDa%2BeotpwhKTLV%2BWIVe%2BIMLU2KePPJobuHDAPPE1qG1YaAUI1TSg7KK2L9ra6bvBnPkjqXHBWwafRWXV9HUG%2Fwm6CQhHwZPcgCV4F4vF1PhHT2H3%2BqjwOmfJ78PF%2BnRCTxpD0Pz0mOsWAGVbUUjbluGS%2FnWODDmA&X-Amz-Signature=228a84cdb3df4d908433ce35ffab0521176d90d5ea60ed98681983da8304aece&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X2YCYM4%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2Q809VLPc9SLQx1fDGTC0XLHyH1kmfEMBgDH3xAXY%2BAiEAzVJdRFCmfAHoHhLfkorSQu5VmMTlVOOJaYoncLRCsigqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bd%2FPi0Lf7MvvwyxircA31FuKDoxc5W7L6niGZ%2BWsXg0nxrYqE%2FzjtYQQvb8ozRqF8ug7tYqGcrXIpQxuBMHEF4fcYUhsYIzxFCD%2Bjhjq1KHTX2Zkd3DLcTz0CXoamvQGLBdhglmjwi1I6b6tfjpI8jx02NtDbxFylaFWp3QwFNLu0cv%2Fr%2Bqmj4KKPJnn9QPW3wEdDLYas%2FjbaruFNb%2FyTsm4787MeVvOFbSLdiSRz4tkczMmsyt%2F3D8GzgNjML82ThrGlet82PcXZwNwOIXq7upHVivpfS617KxxQUFgfeH1LmmyVy7r3ByHFPGbooheGaSSpGevxtu%2BJiuPXW9CGr78tbg%2FEGry%2FtlQjSgJRruQFSzkl3CpRV%2B3YjbL4tPKf4DMkud5bUV58YFZ8nqhqGdR6x6qTH9837syzhGtExXRpFKL3xg%2B5XCSa%2Fgs20HjpeEs2Wt%2FVS8dYZ%2BNtvFjEA6tFE3M9%2Fjja6kNUGg9w7TqrCz%2FrKPwhxAyguBbILdaGFYH7%2FQmvvq7ttj%2FKbw8%2FIdWYmN71%2Fbu5Ee48CPGkDC55Hj5e%2F91RrNejA0AZ7RZk0OGADo%2F%2BTTnC634dCfXJD5SBZizKzu1UbdW6nF9QePKIRGfh4L7p8Y59wI0myhm5QP%2B%2BCBgQCUWv3MNPZlr4GOqUB9NYD%2FHD7vX9D9N%2F4%2BTxnSeFlHOfBWdnlTqx%2F43%2BaohhNGlO8SqbMVrDY%2B3irW38O%2B%2BoPGpfnomnJN%2BQ6AjmCyxoIlK7HXC%2B%2Be7yQXiipi22oBtGb4jDBDWSRGk4FoG9Y4V%2BggMWEgODXmMG8TSiwTHhygxANYkqLY8GU0%2Fn14mfWx6jzmH8XMbFsuAxzuVgpQrTkV8HID%2B0B8GZcie%2Bc1nq6u6fI&X-Amz-Signature=0b4077cf655516f528dce24bdd6f4f51264542323adcb290859d1547a62a79a7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
