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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCA5QQQJ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD8RC%2BD6yo%2FApCzCHZxuUgWJDnIlfsCP6T9v9j%2Fr7M3BAIgafgmf0iZNWc%2BYk1odJFpH0c4RZnE0EO7w794ICFNICQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAhBeGOybDVR7%2BnxiCrcAwl5ctJV07w%2Fx1T9lZhfFsheFd%2FKLXnqbpJhTnSeWUElHrOBDz3zwoTKBjbQMF9Pc%2B71ZGf%2F4tMpFQTUq8SuHdz3zkOOoVwLgA%2FNs7Hhs07E1Ml1cQotdUdENvRYXqeoteKDZVwMAQyIu%2Bj%2FJE5Xt1tScPR%2F0b3VuvD75KPByVztwTzQGkuSA14O9a58vDXggDB65jNjNQuWu3Yjg3%2BYTaV6c%2BHHfDvvXdQHNI49byjA5uch6BP2bMG1Ni04RSqdzIpwRN2q%2BOrFgAqM0GEG4qjlUf4%2BI7UzNa1GN4hBukwyQy674vR5CLsTRVXQyI%2F9VKwqU5mUsc7x6%2FiXiJBA3ULPSUhgLlfPAwap5HtDHcmnBSj2XymmjeeMhXyUGFMiT3lmFWvTkJKPrEU4igH0okuUqCbWDiiqlASRIoXurKGuEnCRD5uDVU9n%2BoRd5nTi%2BupCm83PUNK3H%2BXfwKtLuBofH7fHyv67bvlMPIxbq2ru40QO8JWpXIXm2VN7JgjAZCEKT9QBNo8kHDuHY3JKEumENsyLsSNX6UFUhWGpZlLtc%2FYop1177zPExjYDq%2F30pI60XzJhNsvjlVauCA7LXgPSFXE2K0Yh6bHIAhlB2toG4IwsxO5rG4oTsKZhMKOQm8MGOqUBTcXaFagUy8IV3pGbv%2FnuPSTirtEWmJ1noj0xhpYAq7xU1%2B1mKsecY916TGqKt0%2FownvOHzFJiL1jzVDfbJatrrF46vAwUOU4u9wSir0H84NmSBDa0lnErC0RfnvH6amVnSxVn1VuZjLxxIdWwEX6ibbr%2FS0ad3IoDw1FeXu0t6kifTxVwLpDBn5tX6S5WgBVihEM4WUosScjxmnyQW%2BvikdIZw0C&X-Amz-Signature=97b621277232ae8c84becbfac89ccd99f01b019ce5f848b9f67ce04b88252c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVK2LVY7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHTuxLUEn%2FOSIZW4Z6uCktHufq9iP%2F9uKnXkHv%2Bh7ZENAiEAs9QDDDb06eXnsbh0mniRGFvM5WF%2BGobRBf3Bhx43UIsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE87rfXFUkBFNgPsvSrcA437vE0jZSQgpJ%2BWf5athq2%2BzK6l4OJdQdLH%2FMuUhvkjRPUJpgI9Z2rpvJWuCPMo%2Fes7fzI51VtpRLqGrCLw8lw75mQ0c4DIP2rDOGhMhRFZ%2BepFgynhdhHOYT%2BA%2FLd88jDZS%2FFAxBEWDe6JB%2Fs7FfelxrygofHkcEBdATbvudXbgqoqKRVCJXMNaBmycCCJFA%2Fb9JSKPCLO9i2db3YjSbIP9TKQ0ZNkjH8Pv2OhpS9SF5MXFWuNLwAOBwrWlGN9o12p%2Bg5hX2Pt%2B9WInCL1%2B4lsVXAW6cmXPPDrW0j47t2eIsmxSmbQctOYFrVlZuOra7JJfgEnw6D5aU%2FUv3lNFOLtnfjVErHUHUWXp7QVvuOxH1iY%2BtKcGIvjaodylhxaWON94XWt1lKa%2Bf%2FsMEN9C10tOMV1u8uIHmHcVFjTci1bNuQZcy8o3JEScvDe5JhKbZ3SRxl%2FIIqZqyE4EGC1wn6x38peQxy9FrMr%2Bv5PgRSnUxna47bCmco%2F6AsQ0gjNSnxYpT2yH6KkqKyc8ljYGr%2F3WtrqJcg%2BJa8rXI%2FkD4JuJJxHQLE0AIn20ofVdqVzwaoTjPN%2Bf5Re%2Fe8vzhiKPcOzxyQyYoui6MZUKPqpzDAEP73WTKUBAH%2BvjVMiMM2Qm8MGOqUBVt4IoKbfKQPZDcBLUWDYJuFY5aP%2Fcq91ISHQj1ZFjFlmyoVUlopfAPHhXs%2FWcvi3z3VXsnysuygieB1qZpd8pXMriNBksyklXwbdZx2ncCBRsjmrgfMJ4G8iyuK%2FZRU4OhZBcKMofOAkDZyc%2Ffqw5x6smCFz3av24nYSyl6chMANn4gkQofGj6bIQDi3fGO0Kj5J1sYh9gHvwSe%2FMJMNg2AR9rOv&X-Amz-Signature=fdd563ce1b6dda3bcd674e8b226b0520de95575c4a59d61bda9df5ca1f10ebc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
