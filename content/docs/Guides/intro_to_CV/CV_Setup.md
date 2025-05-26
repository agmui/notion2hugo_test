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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2DK3F2%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDLu3YKc1ZY3Lk5PXv4da3tLSUPLksPQnM%2F%2FLdcXd1ZYAiAIa7%2FrW6VM%2FzA49mN8MyNXAopFQQ3HO3PqV1RkD4ACJir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMiaZLazD41cyWA%2B9TKtwD%2FojBjNg1wVBRXeZNod8vN3j97frwc%2FyWsOodnbRnMhBGNuFtQIWHFRhpvgRGAtBGKXoHeDUjwo%2FX0Tt%2FecW1DvsMRAVDJ%2FWykwRF%2FvCcHb2uFgYKBVaRwyPgGCvOftlpcu4Z6ZPkyeQ8OccOw52wAWKrfUmV6NaKR8UsluJIbHTWIbANoNZCTitPfbG4dHWiU1BMI5sqKjjqUkV6tjqjCpJOU0zenBEIu9b9vFM8Zcp3%2FzaMH0ntm6d6w8AW09ySw%2FWkttj7uWffxYB%2BC%2Fz0Z2Q%2FeKB7V0henU%2B3fybzQsjlfvX2C9hTjBJxHnrREESktwR%2BaLN07Ys1N8VMoXWzKERt09JiCLdfDGHypxIgtJ9sP5qUy7KJfkasyx7OAGob1hPMGMV0M9QmSND3sY6rFnXv53KCq5os%2FccPhkLNQ4FYeD0vz3cgBPg97CCC6gnxVG4L48S6JwEDusjkD%2Br6vGNdUybR8wLS6lStsXYC37%2BPdR41NoZ4rvgE6rzvykqVMjQP9HoT9lmP8Jgk4TlSVykVUjKeFnDwuQ1BCa4GSRF89Gra1dH8EHcvDdxe8OBUY6BkKo9XzGiT%2BffJEwg%2Bv8GfjOwIoxpcrBN0tP%2B874VrAXWC4EEm%2BKBt5OowjJ7PwQY6pgELvQnmtW6bxab4aiq3eu%2FKZFaYo0XeFyopvglOPDLSQbVMw3sTNEVIMpRuMHeZkCo5VY3JpbTRcxlrZrEEsfw%2FXTiRADPkrmcEeZhd%2BNyH0laOS7cmHJ8RWOT5J91%2F8GewBwjpwf%2BNP3huOvDdkxMwEsesBolCoJo77UwLxF7z7RGS5Iyiw5T5qEoVfw6D96rqeulJLljX3dVvjEZ5W2n%2BGFdk48SQ&X-Amz-Signature=734ed03b52fea58bee44f911a3925e800e6e293d3a7f6a2938499a5e8bc2c2d9&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OSC7HC3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCymhTmFvzxnZ%2BXuMx2j%2FgfGjcVdXwve%2B3K53w99RqCvQIhAMz3qabRTXjy0V%2BK4fhhql0MdNvoNrlubI0dQjmiIkVsKv8DCDsQABoMNjM3NDIzMTgzODA1IgziEHJTdH6ysTfqtFwq3APkT3YwvQpZUsZFoRGShJwCh2PN%2B34mvflqm6i7SrU8KkUfw5ivdaC2G6ZrVt66Hcn6wkkFIk3ELK2%2Fxe6D8NuZN5BmFGyifnf5eFbki6c2OsXDW7rcNeNotUYFgJ5Yl%2BsAAX6DRUOc9JMhayqTo%2FZXdfAQfsVyIMSeH0iezc285QX9Ave%2ForSa4IpCaO6Kl4tpdIGqQMIW8lasDGiEQzD3k%2FoNDq7kX4kua%2B3PCqmeiWXTr30Ppb4JiF4DLqjV%2BA%2FzL%2BdpsUPuL27%2F8%2BrTUTldITHOkFhdI0zOA8PP%2BAZ1fBMCpuhzMVXroNzlkDxBhC7kiZmQoAMm5KDSbITgycJ86RhYLvSbGyQYbDGGXnmAxuGYkOVlWBEoCBCxcI8MBQk4R1EquHXwJJjq6NsHGnL%2BxyV6veh58OOowfp0Uw2jpmhjPeUlpMmHrKh%2BF4SjDnwtxAB5gIfTjB4Zs8dk58004iJdz46CAZZwUOsycJM8%2B8vhgEoUFUiBvPNfVmf3Dl6w7QOfqhK6faoNotk%2FjqFs79RHaAUBup9AEhh2tJBFoT56eEmQgh1iSU%2FMx0loqaPJzARsFgrQaSSUYFTdXITBcQZnXN6Qofs9LdaPcE7tp%2FUGfa3SMBWqPf9h0jD8nc%2FBBjqkAa6OA6nP8KlvXL8IpQ%2BN1ZWcvH3ZpN2Mhe18VcylNlwF1a9wLaxTk3mkjeMuedC%2B4dlkF5KTM8wbne18zdSM8L6LmJ0UFNqdn2F2YbysKSRv5se9U%2BXTPuh3hqxUm1pt496%2B%2BCd2g4PHSKMx9e81awIepvxirviTle10ZWwU7nuku3ltNt2H5xltf1jCEkThtVZvbuVc6QvJ18EaVO3cJkQvtJRs&X-Amz-Signature=c2ef8f4226f3f4681a96cae764fd049a20177dcec902eb3940f0ce0bc039a0f3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
