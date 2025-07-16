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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CUJNP7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAJBBpY0tuJSehsOvOqa2Z611D7gzK7Fp5eAUXkPhZn6AiBcx9jYJ2068jzTXv88E9oW48E%2BnYwE%2BBOhBAkrm6SO%2BCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM2Ef6p4EdGER8kkVkKtwDk2KsPz8RnElj3ehDR8STLCMlvUBxsYVmKIDRaKAuqGBYDJXBbOYpJG0iiUHNK6iA4xk0I%2F72pewEoJ9Ske%2FuTDLe6GdTtAfyulGR8btachy%2FT%2F2t9QnLCU4DsnS8xwtTbHP4Eit9TF2afm9zvaVpQHWfgqxPiE87eqjdvPaf6dJt4Lcgw9ZYNvYmWGUpjPV9V2007RWlDEVqAXDO88AOVjC53umQdqD5x3lgMwJ3bN4ZOjOG1lDOhVzmctOcmHz%2BDiXxAJHOwnatbv6QD96%2BqTVAOZyEGR%2BcGAphTMERap5XQo5NUdANzaoJ24%2FiE0cCDSXBDJMPA89d14RzocuOVLIYahZbgjEXw5qipfPhtQhEseGH4muWWjHToaNJIx3zf4nrBjls8gIOFmN9b4iveUVJ8Vf8ffmyXWSPLu6Emw01KfJ8LkBgoPrZLBiZk1U7fpRiCrB602cXQIKcKbQKTIBv0DYIfxF9glTzf71xP6RbeO%2FajmRZROvN6d%2FyAKy2HpKU0wb2dZwnj7Xy5AJf5PDIQjNq2LjUz9B5Z%2BEK8kfwqwN%2BFc9zDS%2FOUvOAYvSukD5NIH8dxgURoV01Vj%2BzogbouXkgZwtb0Ucv1CHKarLB1EwCCBLpCLMADbQw2%2BDfwwY6pgGXGTvL2Y7wg8bavY%2BCBDh2oqHY9wKDhzU5gwtibwnYsInKAMHslEqfY2nxJTsjljvvuDvAWdOPsbsbKIl8oCY%2FNge06k88IvJTlj2ALJLBHLGMuhh%2BtxVh8dtPARyQmsYaEbqqQZ34W5jYsqToc8C08KKZmjkHcafnZ3gw%2FK7TWIlD60akQTwPqBSuyacvMynjfTg8u6hSAvLsH%2BtgMm6OMASRRpqM&X-Amz-Signature=879c9e0a52cfea2732187bded582831190cea2e287cfbdda4d027a5e9d59ffc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625HXP7ZG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCtuX3g4JQZoR1408o81G%2BWghNuczhqlSLhcb4jXD26nwIgEWi4jbosB39Fpelu9E%2B2hJQ4rrNuwosWpz5CVo2Pvdgq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDIZWI1VCGUi%2Bg0%2BfmCrcA5cJ%2BoNf7ZxUTvtcuerAL1uTY%2FtGDWDiG39CEn%2BN31HK8QdcgvxALQml6Nm5oKzfPCj5hYtHQCu36jZ%2FpK%2B1hYm8QESlhGuqx3ZMHhomMST05BsOUEKXbw%2BAxWprwcSRJr8Es1bYcU6tzjEr8u2aPh%2FiU78NKA9wnI0K8y9Orbr%2BW9F2vmaUCatBpM%2B09IhrfFgnSjO2ZS5QgXZG7D2VpZGZ223QCzHEFM8qDrgDGbQJGQw5eyYT3lXjBneNmuAbeFZUF4Kn04lprdGw1ufKmjv1forQujqx04l%2B2xe5Pdgxy4Vw42%2F07qsEdgCw9FnllZYekVP9LayM%2FpBqS3Y8IenCDCBEJwvY52LhUd62uWsJcAZUR5hjg8QU318Zos4F0vhjlOGmcTvlCKIEluxgZGo7Y2CoHJYT7qhHPMofEKJUrPVBDN6iL4voclSErBXvhN5UT41kTygEs5yw755fx1F%2BnMra7dH4e%2F1XAyQQ3SfSEHZ5kS3Jna2ekjQ%2Fy9HIv0p5MqPWaunyywDTCGv38kSTpDtEVk2ontZbuz4vyS05cgZ9nIGOKLYhPQl0R23xTtgvS5NYnqVlOHDTWHOUfqisfIQ3wwNqTv7mt86ZyGqkt9cCqU3W%2F0iP4xsRMJbg38MGOqUBys0yNP8cJnZiUAB7%2BUJ5KoKh11oBRZVyyLU1f6J99FVeBN8n4YHPB%2BOkFNIM2xEMAIeTjFBXlWWlJcivZqf%2BWdDU7L6g3%2B7DJaaDIxmb8rPH0wZxA28ITuI557xFGCe0Ng8KiNxN5B%2FfWP2fowalMZSj7ywRTJzoCeq7UxQczyQaiFhsz4%2FZ5ayAoJY%2BTVejAyuyCSMXKT4MtNI4mz0%2Fl9GZLVxt&X-Amz-Signature=e28d2b9a079564e7315eba91287dee0bba0cd2c1ff75a4d7ce0ab947b58bea63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
