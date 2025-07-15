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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRK6LMTZ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAELu%2Bg7qWS92atl%2BlYyuulzxP0eFBIdz9NsnuGVBynQAiEA0RmGHPSO6ZX%2FGQSxBTTai5ZhF3oFNEn4D57aXl1114Eq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDBSQCM7r00KBATnL3ircA23We9DVgqDh2NnHrbyov%2B5GYGxyBhI%2B5u9rwB5%2FQSYCLSbiG9TZSVOLmlFsmkZUW%2Fzpn1EnaAQ3qR5f2mqnVFbxO686VB45MpYCCMrjY1J8u8ookqZsqvr7iggnsMYqVmhLxKbUf7Umy1Kv9OBGr%2FUdZAkf%2Bs2Rla%2B1oFg%2Bku68kF2%2FvDaU%2B8kxdA9uNdEj%2F5epD51%2BDh%2Bpz55eIZcauZb7XPRu1qnyCHx4tiiiwBkS8m2%2F9urTGEMMbx3UrSeAwQjmp2smUNKdlSLBwmaROH%2FtKSc44bBkpQfkLxzdH4wYEUwwnqKjn8QWHlOhzuh8EGA3HBryszK%2F41Urajxjp3O7rhCMPIxANTmmKBQmjgAmJeIzrEqbeHxjjLD4PVEtCeLOps9BSCVJAyv4lwXKr%2BowJBrBVrDJMtzakEQl0n5SwVY1XwEcBEGR3W%2FbIUmreWkXw%2FfVGBZ7R8wg1k2CJGERyLS0I973jRdnxNn5HU6Ce4iFQ5kJKVGKrTAXQ3VGoeCwCCpVsR4aVS4dAOhcW2kCooL3eU9E8lxbLIXOehCQ7fvUmIzUtYQk2hodOlAl55v6nGzM7qpKu6dI%2FHbO4DOj6KLFMGy9bJkf0gfwKdbRHCV9Xvlur4U38RTBMKOq18MGOqUBbCO879jieEdwTGo3ZGeYMCl6BldaujCg2v69f0JHCzgQmUGqg88cPoBl8%2F787J3ozVAHKIte4tZ0HLF79EQGMA5XgpwhRizXtyuBxoaSJM6%2BLodXzUJr%2BDQefjLLZCS8pfg7ho%2FRGa4%2FsFArLVWVfTaitHh3O87jEI1FSzvXNo6kn2pgDsHgTv%2FzE9gWydpbT9s3%2Fn9HIEQCEkOUeht6TcYgaPYb&X-Amz-Signature=d3c7cf1ce6fe1f728c6cd00d5d7cf542f0e4eaa870ecca01db840e4d9d13e04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N32O7N4%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDk8Hi4YUk0EKOAChXWdhsDFfN9kDy3CnWzv0Crd%2B95QgIgRUmC8L1OZ9tTCj%2BBoEXQy%2Bg5zZOnB2cckpuz3Iiyclsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJyeHB%2B1t062Lx8JHCrcAy5eUt%2FblRpHsZKgSFMU2tM01zDlECJr%2FuOiI5uu5pBqR0Gz5W2WfWYRFBltKq06eS0KlOx3VGb0WJ5bxu3jmO0BMyzJXHYFs%2BEYrcM%2FdHe9SuwEG2HYt3qeQTsRI08rvPX0e5XrOX3gTEksmR7jct6Mp%2F6Mk0D7LXMLZWiziPvEz2w5Uux5kOROYIhtjXtWleRq0E2%2B8AuzVIwIwUNIZg7v91N1iu974KD43Py9DPt0i1lCls30jE7p4wXK79k9i7e6uYyxLHSXobNkO2ZpUw8OI493xfSrWpocdjAkOn1Gvg9dC062oGBaaIp41AlMjy2bFG9jYb6WoEHcPdSVwvGot3vrELKwprphCbe2b3TT0I9lBqseW%2FiqsksyGFKXhr9%2F%2BPtyqK0wevwfF7sV1lmW5c%2B680HIzBOEXlBZEBHoNkDtFZ0QOzh0GSOP0aaDm0dl1Lp45lcRprUz0qa5LxC%2FL8shl7kfNB2gxuGl%2FkAnZ8Y9pYsUc5K8QqDE9PI4ZXQR7Bn0jlKyf8hitlbbbUIv36l%2F%2BCEeg%2F9YNzq%2FsBmtLyGayFfa8Ky3h8H5bemISra2waMRQXEssNM8d1JhsxlTi3HUHcyHfoDS4CRulbBnYDsde0XP6hLNhpFlMKaq18MGOqUBoGtvS5TRUkv3O6wuD8YSli9d3BGbCK2FGRR2kWqrMEB6j8fRdxI62vzEBwg%2FnxQEQcxeo5NPcYIP9fwd34lLfcF%2BlfzRQEPZakQbtG2ouqqM5j25xB7slzlcyqi192EP8kffb7d4AP4OV8OCSWtto8BdVQKjRgHucd2c2W1Xd5jOdjEFZaxq3Gv5ZrqCwcFarSjuMYaF9rsTTyzpRgsh%2Bk%2BPpQxt&X-Amz-Signature=ab5fe1e29aa8391feefec83be7c13ba55fe9d1a9c3b6037684a901268510bff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
