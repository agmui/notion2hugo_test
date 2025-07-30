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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU772OVR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMGMTsPNZBFwrknrFbKRGDUZo53feJcik01%2F9%2F%2BbqTKQIhAP3dcmSnHbUfHqxc5a93FmXCW7NXuT%2FnxoL8il1SdHAkKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySWVPRKyXKO09zqnUq3ANCxNKD%2BXYzGtNkRv4359XRCEs2CogBYAIPvWi55Te5puk%2BDnT3Zd%2BHHt7b0NuuAmP8AXWl%2BKLzHpbyZGNH5ty5gyVKp35k6TmoedVDQBgwhCxhSSLOR8VzSTS3qQHi1G0ULb05bij7GCLj8I0u24m2IYJDjFdn%2BX5kpAvH%2Bcw5WrOWrs5TOuGggyEiTH735rKFpC%2Bhp2EOPPHwv9%2Bp%2BQL%2FqqhnaL4nZ%2FNt68gryzSMgATVTOM6DTFbNjTnMcoGASuVEETi1KUeCuDDPnFYgWtRRf52jo32kGvUgoAc44EEspscywMBua03Kequzg%2FSy5S8xxkOTqitINOmOKjOJ504tDoKiICDGP7sVymwLxxndlmP0zBg4dfd%2BCxwlks26d%2BXVLkncGIyppZQwCERwhwGZQVoljFLIskIWvkjbbvhptTZUvMJ76zo7kc7L08xQZrphgoyifzCClIARzZ6zJ5xOkAyUYWZtvGvwrnRniuQ2tkz%2FCzwuPvCm%2FyMdtUJnX7ejSrXXT6dypaYrOrIjb3YFonWk2XZNuXGHtjjBqVnAZzXtVZuv8K3PhMzntFUdVaNW2X9QnEkp3IySIoxTl7iA9vZBzzO2iXmJ1E0ejMIubumVnscoQDnJmH5ejDv8aXEBjqkAZEL%2FqERoHt4DTf4aETNidxAeQ3T%2BcQY7LvsuhU1GOEygQVmqRPlIwrWYaM9aKDO6Hxbvs11FGQOiW2pLv5ji8FhLW79p%2F4YfETWHfkd%2BDV3%2BHDg0KIriI1LJLRUcwAwhoaahE35Ax6pBOyG%2FWLWYwvfyA1L7TRcDM9AhEaoTHHXOZzFXR59PYmYjdT%2BAyFD%2FgO5uHyPjjPPPDBq6e3PxiK0FWM6&X-Amz-Signature=949d00ec06000cc1d64caf59fd81a7f751fc965fc4222726baf85b21bd580ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE5RJW6Z%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T043920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4c7rsaXRx80vL%2BeM4xFAJGYRi1bGK1CReAPiFvpiOFQIgH%2F14aRlF2yO3XgiVRPU8qbz%2Bc5q%2B2OKKaFVaY1ycLcgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqPz6Br7qUEvtegDCrcA2t0OzXElbBfPTfRpsSI3dUGCh%2B6A7SDXiafhHFMl9B90Mr5gFSbj%2Fz5GYTLZahOVw%2FGdovZTNjZtGrzDq%2BovMJjr0aAN9Po945o8qsqIHz1DMwLE1PY5fPIxWBq5mnQ7MZXdWCuXWiRVJbhPmVDwVM9puXV8%2BmP3S8Z%2BWaWlGL7x3BTlh%2Bo5evEfE4mitCP8qoQI6NrlIVF2cy%2BeLCyV3mHdJPIM9z%2F9YLFsYVaJTfg4t4Z0DW6ma0GlEiBfVgue6auNmCVHWozIt1A9JDSYiNr5cegPTRrSuoKXohvduSV78ZeojuIRIlHg4asVVB551DPasIFBWc30QzOO8CokptJTxqiBVJHr16RDL3C6KZ3gcsnFxX9IWQ7rc9UwEV1lcE9grfd9E%2BUSOFkiKK7520rYimb%2Fh3SWL4OvJ44EK3HNrCFWXVwka2seHUewIsMJ%2F4eRbkJokzSJtz3lHttZJVMQ9Q16xA6uZ0M78NcusckuH8Wf%2F6gh7U%2Bo3Qq20vxtHqtgPEabLVLtUnLcSSG60B7ssCgSnWI79hQpUXs%2BS4%2BHDIJ9DH2iL256NxPwvpabdNfw%2B0VXH3nbfQlFlhvU4vyNcSnlqbbQMJQ0bJlDs5thSz0RjzOsyffT8%2BzMO3xpcQGOqUBFIbqCZwm3rpFoUMXalerre64rcXIRue2IlMUuQbEpUhRElRo4fqr%2FgNT3%2FU8EvwZQVY7HNGX2ojJixXyMdBz7tnGERehDz5yXJzqh7p1x%2Fsr1dWhqE6uMpdNj%2BbginnZbn8PE6qDu7O%2FQXCv9mb9d4P%2BZrvXOgCWfaKLVipyrSiuCVmTpOO%2B13HbNhoITO3T64%2FSIrAmQFJtdZb4rJSkVRTEl18K&X-Amz-Signature=bfce79a06a7a0b3b461cf07c388ba3b6a333b4f63df5daaedec323fd852ebb77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
