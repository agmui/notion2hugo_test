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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7UXXFJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv4lttUPe73tmqwL%2BSa0Z5F083HG683C8Bvme%2BgNmnsAiAUG9pmkfl%2BBAdgRYI5IKiWrSayNnvu9UyvIcIkw0CxICqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ62%2F1upw22q8mUBtKtwD9kCqeCFv92esUkEZvTQMAl20sCQzpXkiRtzjpWuRJn500DtNnhCwd9ae4YBw4gfKc42aRYmckkGBmqtuG%2B6fZq6FE8B27fvV%2F4REXI2ZOnu0avCuWfz8A%2BNG0nvvxEbl31LihIa%2BqaEeWsPwca3%2B%2B6PWtDo08KHMoGpJ1hP9gDL2Jos%2BuTTuRQgldATiv2umNqC1JyAGdYaXsecdF7LFHFbiBKJ0bTrtE5TurS7u%2F58yb%2Bi3G3G1CgqXJUsEWdixBQ9NXq%2BZR5VHyICA3yJuLtcm3rMoGBITvPLparl5JCtvmqopo4MSCnkMOB9DQqxAMekwnmrL1i1d4%2BPnXP4Ivtk3yhWpGvTotex9QzKvW5j453gpsrGb9eqEdFeZhuyJZ8QDA9BEVXupWYFOuVBvEnS6MVc%2B6QFeYA2OLeguk67rrwNRftIdslp9xR9Ezozah3%2B6SSRCr%2BtD%2BrUd1uc48O3N6IJIifx7cTj%2FoWzaU7is%2F3dpjAxSw%2BOJvjZ6%2Bbm2mGC7z7%2BCcQ0U4V4OQOJNOzYzXPdg5swobbZG7HOaU1X8MTpp%2BUhy1PpPkieH%2BgS9VHqVuXptk1gFYD5Rs1dlbCpJwV6aN7Gg1xcUq7Y3WUOb9Y3wEQS097AIlx4w5Ki0vQY6pgHeCCaGF%2BkS%2BSQY3P1FmisuBLpRjO0R2P570A2KsyGOYKSWYWgFkPLHbTag1DMIp5UJvqgyeLORgH1BVnHBTiSQTzvGb5exOYHYreGga8OKBfCHvHrFJCNBDDL4GcPGtVx15W1WwRU8sHzwKD2gzIy366wOWKAdir%2BeBk6xov8v3PmrmVRKu9riLSitf7BbgsMzHXiQx8QqJ15l8PxY3zXSCzEMrQsI&X-Amz-Signature=b811c059f2061d1bd7d74bab264ee16860ebcd366974bec56b66cc32d31f7ee2&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LARZVCW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaRc06bPoRkIbqCzaaM3wmiigYvp8FXLjWaXoajq4HwIgVAOCmaCAkIF1mqZhTah4%2Bgu70epLLNPbcpoOAvj582gqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8NsD0o44c2Xn09FircAz5CzYxzrfKdB%2FGZlzm%2BWr0DPICEhtdzrpzKHgQb8PH9ML9OR9ARU37I8ccpJZ%2FLXsL9%2BVrNzRN6WazltyRxuaC1zLIVWvVhae0E95%2BZ3ML9eY1XxwqAHJ%2BMFnB%2BnyOIEe2MMp0IwHGArpjffgvdW9SSoeJD9Aop0XjLTRES0M9nisSGv3%2BNJPPFytbRovTB2bvXjtKgUFIJ6EdqUPaauytJ8PPsEel2ReIh3gxuhvKTvWt%2BYWZbsoy3GUMDASNDTudpSkUXstykUWHgbqyIDWP0eGmrIkOVeS8yB3fibBDvgZc3m3A4aAExwQbd967nHOwZcdMu%2BRz5AEg1QsYlpmCQ9kLXeiGbc53RVS0JnKLBAu1S0VHqiadnMPyipWcyrDK78Pfqi9bkF5x8FALczxb1LeAiutAfNkbBzfy8rJX2ZrLRP0FsD1L0TVCQbzWnZcHxi4LfViU3TMd4ZRZoMHXkpgi79Hg7eQ5LvPi2NfniKeaTRnymEOGY85Qi8p4MgwFd86VyPvKqbfhDWqoZRURl1cf%2BG3V%2FrbT5Nua9%2B4L3exg9V7BFgnqpc80KH%2BbfgxlD6Xph86zl9cZKIRoMVwMeQzhk6xAkDbNT6J%2BWJGEHLNTzl7IFnLjFhKDYMJCptL0GOqUB687%2B2MZEFSWROf4Z1TZeCy03QCk5tkHYXvpSpLCOLaJifw82ZLDnHMtSu8k6ESro6aOzSZwc3yJXG%2FR%2B1%2FyYapCqJqUb4cPHFY%2FHOFz4lsq2iL7Kt8qdwJWGfuBhS2P5PgU4vsVZqj3g0OxCnTOEhbK49sYnUJjyhsc32k5tJojuan2w36P5vLz0I2RPjiWij7D2rgtdo5t9AJ8VXRT68SxumdEA&X-Amz-Signature=f970da9e3fa6c8a0b772dfad505bf058b3b2436791cb8f157fe2ebce6bb41365&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
