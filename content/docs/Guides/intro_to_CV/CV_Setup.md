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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG3IDYT%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCrbjWaH4QI0Ey4OQjtNGZLhh%2B4HU4dyC439Owva2pxFgIhAOE%2BMZW%2FfwTihb5KBeqg0VOAA4fWxKVEzexEwCxkhClAKv8DCBMQABoMNjM3NDIzMTgzODA1IgwtQN%2F6%2BMzkx3beFL0q3AOG7XM8CUHWALalWRhRTAPnOjDD7fr4mEw5PqBg5goT5gYk215herMnfSnIkAsgQ%2BohQdK8yqK0eMVg9x3hwcrrad05eVC%2F7oY6kfGZB4aFxG2AlhwIxsTuNWI2RAhzP0b2lmNVH4QWALH7i8t2DOEJDN2wuBS8oY5G2vEiCyKvfp4SvgAkWoxgke%2BUccqjtvj3YlI%2F556DVSUTkWGRs2WqbirK39Fyj%2FqypUfBMBmZNn2%2F%2BlbPOr85d6W3i79arPyq8znnL4jXBhOX%2BUNWrO9YtDNHT6fsWcecKu2Cc6DoNVm7fn3g%2BmBC3hFA8%2F7Vqt2j0HOH9vmfoC4EYovtGgfp4sYetfSIPF6T8%2FDEkvJFOIQv39Olvcp09ZAyKO0gu%2F1VItmleXuL7k0xmm76McCi63MsnLH4sV8dnNwn4lroRcGQpfOuseFoufkztKYccW94%2FVn9%2FykoUezc5RmprcvHtIJrSLLXmFSl8hulpxFgNmZmCK04pWohTCZgBaqRdy83cY%2Br3cfWjBJOenIKtEXkQT1dWaMKGnqI1RHpMT9u59EfSn49Bzvv5MpY2w3YaihFCOOPttsE%2Fu2drQyeDXyUFpJlkm1tw1VoLvgPy%2B6Y869Q9L3WciIFdTi%2BoDDH%2FNzABjqkATweZWB2blqkBuyuVYKIFlh9jI%2BTUnlvS0FWuEIjHxAzehI7nKpSNrkC6f5peP6a0i4AqEY67Bow%2B5XDXsQ7791iOZabPCmItqss9HGM8qEWCjARzMj13sQpHM1Tlj63NjoPLbUttw%2FA2xwo6D24dxWIaAy8oufHi%2BMmW1ZG3VaFv9QbF8SIlDMbw2bu8Yphz6UICniGeXBywS3ctRvhmshZIBDq&X-Amz-Signature=3b5d09765f840926b70badde9692d6db5f34a35887df4ce1c89c7d9e076b27ad&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYDWHIV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDRfK%2FVoH%2FSLYISm3f7XByEAMOnHJcT9GhKIVcQT8rwKQIhAMA1iChYry7iGGFllyZgDm2hVf2lZKHBa3%2BuWLjOzjuSKv8DCBMQABoMNjM3NDIzMTgzODA1IgzTzSYIOO%2Br87s3dN0q3AMkcT7SSHsh4HG2x99m8JBaH%2BLs9CSooWw4nBzaU5NpN06xw2a798%2Fgy3hE8UDZS3VmuY0Xxf7aLdQNbgastNgHCzPJOm96Snf7vDxyNff4yOj%2FSdNPtJpihRq1Auu%2BH%2BdpiGap6%2B06LtqNgdXvWhkPqOUI7OJDohexrvJ6L5%2F9p%2B8oI%2FJyVpzoNbcRPRwB6BXKTKuPNseBNiJ3QlMZSdL2qHVRu0IqYxhp%2BwUp4DrD%2FYJYnVCVEoCrsdyZNPb8O6WBSd96eGCvzHTxbEqDuBVLNetN1ruSzGB3Yigm%2FdYJ80GH%2BqZ5WhL2Tpzj6Magl4spiP%2BH0CgC6y2fA9kHbIP4i07JuN4BmLXMZz%2FoyrtYq9r2MhLISfYfrgo%2B9IkfzyYiB59%2BCjaF8e7ab5E%2BNzfKwkynR2jU2KXngu4AiuBK0f9OG0GAaJxo4CkLdOdCIE21IhvEltIX19UwkMzwxKgK3f0IWPc28Ep6xpFW%2BYZRE17hiQMWDUnIWguWo3tuxfWk%2FIV6e%2BkuJQppSRlb%2FaN0Z%2B87ZrTDv0s8qvd4HmSLrElvP0OhravdY0QF%2F%2FPPzokuhE2Mvvd%2Fgfl8eDobNLze16zqaBnHRgCvD97fpiU7J6xvZIZxH4nIfFbOOTDp%2FdzABjqkAWJ7oLNwoVQt%2B3jqfEjEaCA40GLDonwl1suT4YlLawwKf%2Brj5b9DmyRdsal3BbyQ6o01WYiKuvUH%2FutkmMZdNlbnamM1g53OY28AtQUeFn9N9%2BvV53Tn4PkXzm%2Ffv379Qm3cyt0zFkst4y0Yag1eLmduYvR1tKQ1M0PmKPSmb2A8hQ7oLmTKzsMOXdqJg8tpHaDA15lcj3djfukVbFBL0PNBzp2e&X-Amz-Signature=3dd48324d67cf5dc761d7f02f6a130fc5608d4f2ac03fefd63eca27f4be617bd&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
