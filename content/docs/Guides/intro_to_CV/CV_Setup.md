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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IU2A2UO%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCNeDM5SxBPELouiiRRCqMn%2BVmoSYyuW8CTJKsEEFb5jQIgMh6es8%2FBreEdWnKI%2BUoQskW9hfXuz8eih%2FmQHGj5PkEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLK2uFabpJKfKr27yrcAwWQT2PzgNvVb%2BQMcwzmcTNfRqKCT13rIY3FMX6dX%2Bj8PSRCvC2XrdorbW2FcvOCwUgS7dssh2%2BIWQ%2BmWLiuGy0LuJdCy8o%2F3Ueu%2FE94UBw2Rn6AcK44xAVzY4BdXVUXWRKnOAZfBT9xvEIHpW1vk4kZPK2rfuSqLS1MSt8vp7ZJLNW5rQyYDU9w9f0pQG7oSTf4%2FN9aD%2BKu6WpyRciPIsiXTOJYOukQG9ZDzt0jQ6xlx9NPhdyDRxvsytNXhOc9nVLB5%2FjoficU8GBsfuSq%2FZWgrQAnK1QUye%2Ft7xFnMvQqKJUt5os9bPc3qsmniyQL5vAELe0d4JwwGA6%2FsiTqdoWOsKV62zKbFWcBKKkYX%2BegzsKwfJNciixhc1hvlxSzKaSwi4TGq7CntFG1XpGnp6FOqZ5mj2nLgkiaAFy9rA4Wp0M2J77aW%2FDE0dJzBed%2FKChtaS1eK2Upov5nUJp5zYP3N0Zya7r9lVnzNauClKtE41C8TlRr03Ky%2BRr7ZsPOpBV7k4kuR3O6wT4AfX9F3du3X1zkEI%2BUhqeYimCF0gNW3ig3t8c8wbMaQBsvJbewtkJEPswAePOJWcmGtYliMqB2%2B4pcWeBq0MRZWK6mNZj%2BG5EgHcCvRGJx6R63MPu4q78GOqUBVEI4uDgi8v1XD2mvTT7TsCmPM792oQ0oV7aK%2Fckg0gheGNTkEYuQAm35urQX1%2BRPsjPAZmGza4LV6ixSgf2yr9bTqKWIRwmUDgOe1QZPz2GM5f0ho58wW9KESxF1qTEY6hrNTg3r9Nyh5YeMHECFYvg%2BflbVpHecBEdkLlG7LX3JOU6t%2B5v0560tOInnJxDSgOkr16L7sKWkLoxCjbNk2shLylIt&X-Amz-Signature=9baf0f01c6789dc2ee643c08ae6da5815dbace7a6d07974097b5940f43b7d398&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAKY3LI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC71ccDWOKHHEOR8Q1HxDoWFx1BDdY98X%2Ft1XjAZeCKyAiEAxfabzk83RCZSIBoOnwdHzz1hktsC1JgS26PzYwsz7EsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEocUFh4Oemk1wVqHyrcAyJr%2Bff1JdRHuueKwPgVn5WRjGvrAW01x9ayo0a9cV8b1le%2BTMfSzqccW4TAxFS%2BOSVsU2SkH9W1VNtanmUsRoV2n2HZeOMSxRJlENSprl6QyHW95dsYYnorl3kX0%2B%2BMj5K7V4Nc20k51ZYXRrop0clS3cBKM6ZpxnO%2B7lOXjMAdZaJCU%2BnOsq7ySTSQhjwjFrkiJvOT3qSRBq7Q8XgndBdcKr1BhxtQe0KXtN50Ih4fwMSVZgdoyaQe9oDazSfi%2BCnBLiTuvBMtnak%2BFW%2FOFzm3eOxeaAkqVPPgsdADKIRYqVADG4lxS7G7JWkRfnP6W2KIpjVW6YTR5P1egK5SHx7waZmvvMM55svNo5h3gR3E630r3YLO%2BgzNw7LFCnsOGQGCHUTRSBFsmBbFaXw0aT45KO6HyYrQiDhMJd6GwZ78WyRoG5wkQuErhtYTHyyvjbSG5%2F6S8N%2FpUDQVEoyheQbli1IMH0nXTHBhPr6QowKrHdJTT4ZBWD4ZUP5BYanZ%2F7mGA9RqhAHA8MSMjenHI8ObK2j2xx7rcmY58J6x%2FqYiZA8wHR3gcQXIZ%2Fcst47rBEm3O9rzbxUirO3%2FLo4SPzPl%2B%2FLPA9l9XOQIyuMjyCGJYNaP%2Bl9xCxkClR4eMPK5q78GOqUBEPE1Sy101gEbogqJpMkEEy1AP8OiXktIf782fAQL%2BnnpEtlLopBDjPNJT3Dn2ZFV4J02Nk93ld3F8JXyjJliO%2FjgFKoAZfrruKszj8Va9dQwP83BcFxgNhgd0l0qD5IgoXS7FpuPCDtpdthoal2Co4Fd5GzAPY%2Bxlqk1i8wsq9pZ1Hg5bzPVhHdmVr2IVKbVenBWd1tSczZxLUSv%2FHk9lZC1busa&X-Amz-Signature=1381b480cbd37336b2ca1162d9760388c2c7dff61fc056029e203c6566a7cd41&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
