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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XUK7IEP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCICynFkbwRWnpcbQ8o3O0ffJy5RsvHjql5tWcBQKTDNfEAiAg3QNKoKQ1jjt3kurUdJh4ql2Ehx4%2BiZz6jVSAKDdugCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2FedGR3oHvBOkFXeqKtwD21Lj0WRqEYve1yiPnBRFUJv1bBIzSmjK%2F9ghl6NyhKBN6p4nzsXXigZNeAJuYqQtP4PDH4FPQS8f%2FCnbSCWiDqA1%2B0kqAIynJemWvh%2FKDHNBzGW%2FDDN6f4mwLJAic2nw3w%2BSPHc6%2BztimeEHT483tmqcTcdxQWqBgjY62A%2F%2BePYQeO1wzmrsyjknRG%2B1G6haAvAlJjYec7UDYWZngW%2FcB3%2FeG%2FZnYsAa%2FCBcuPGgqh8n7WPGLM3XPFpFdSzB2MyLkFzWZIlYdU5vFUiFrjnIM3RmrXfQTdUpttg0TBeUllFLfb4YaO9MrXEbRyyq%2BPpoKxQI%2FP2dUMdTXqdHtDE16rd%2BHVjfXLFhtXehLGipuFMIjF7hEEGEZI8GY%2BIpzddkZ%2FX25%2B%2FTuwW8t6wHQE6NXyjMPY84fGlQYDfvbS37mj4FuIS1MMidpZn0RHhBb2Ww%2Bme3k3Np1EFegMnm0aUi8U%2FVwUvJn935kfWbZ7KnZ9zZPq9OAI58VHhyoVwyOUZEppcnnt0U6uZ8C%2Bg8cc59FRZVq7UOm%2FeslSYtWIF7WtjQryhKS8RiGypV2mglHVwCmxhWniJ8TVTkpdeWabphR9n5P0xMOWvf2LXg66m78uPSBwLuoTZoYN4bYZswg7yowAY6pgH3zmHgWHzGDpw20b8KmZqnc7R7OjPCzC%2F7sWnyukhbYQrBYPR%2FcU63wjDQPwAxr24PxpySloxbNJpyHAzfodd3VeCRlY%2Frmy0O31LEEirYVMMwwmrlRCeabdDALj1F6huHm7K%2FDzt0QKiHULcFTUpttHlQrVHD5qOrsPzNAZU5AOQfnXARjBdEOttiVrNRVUJHgNTFqA9%2FT5uT8dzAo%2FA7hLO%2BFFdP&X-Amz-Signature=f76aa853f4cf303c0554ef9b20c4b9b93bf5fccf6cffaa678011a8f91d4f48d7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667PB5O75%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFbail9p8ciNQ3UmR4MxQbddth3KKqdSODwplYTn1hXlAiEA0BPFNKwTxfeTeAx9ZqyXFUOooF9RflrwNlLvW%2BRmHEMq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDA5%2FseAEAYI5SdzFtSrcA6TSc%2FP1x5GxAlsdY9yZ8xuSeUyeOT2YZXMlYH08u1ahc2Zk4FdIb5TqRDBerL1rZB%2BAfi%2BdcLP7pT4N21qqT0nuzuxcPpmcQvcmOq701bpuXk9HAF3fZXmyq%2FUWLhzv5D2QcB%2BJrblHPmjlGMsMm%2FtF7Sw7NrJCOpuvLd%2FMf7o2Mz3tBS7H49H%2FVVAVP8loxR9pXJsBKF488xnkuBMwV2JoDR%2BZwI%2BtjEGrfuummtuvM%2Fe%2B9ja4ZM6KVEQE2bg1Phrz53SzwK72UopfPFtuWu2IvyBh7jcGYzKuk6tnJDKv445sl9EstaeJt6OSqqktGIldZregVnM1Ub3hxSo%2BqUOey72HK%2BK5%2FUa3o00J4W%2Bszxua1TD9c1bLpLHalhIgeCcQ11VkroT0MhtMg%2BPFpJYiO7aZ%2BXyZ4DOfADrGNZW8wDvQo9fhKO8jqSwtqw3HwPtrHNeQ1Ja9vDDmEcFjssRZP2Xz0Vl15VMDVY0JM6JWqP6wHI2ck7HGh4KvAWLeWsDC2pIEY0jGiwN7ejAgkFj7fXyILDSEDO0%2FY1ubFZg7iz7glgL3%2BP6kf4L17rEwSzImkZwaTkA44QdBbSj8LaLjiZvjn8On7k7pQs9foyq03KUHosZCNG%2BkG6hsMMrEqMAGOqUB4hNBdypU%2Fhshx%2FoWiP4l9j%2Fsu5NqEzNeypmcaMeuDvljymeD2CSPQWA%2FkWrNAtGLqnleLGsbvXZNkAL7pXxXsib2Bb5%2B%2B4PmmjyzFk0zux%2FEQF1LhvNsHzG97QAd2ezY91kG%2FmqnyWtyruKQLHSFBaGVDEMKD%2F%2Bfd3NNpRLzYd0lDrFo46t4iWpFkYnYrfS47yVKgzykARUsohbL%2BTZ0VrbnmMOA&X-Amz-Signature=346aa2af9348fe420f86f516aa95669528f66d024dd8e0892b810e74f58e4e20&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
