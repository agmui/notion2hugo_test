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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4E4UYEF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCR6T7qaHS22GA97HKktM64RkL7C3yancgJ%2F%2FfjT7YWqwIga3dmtwVspNgffeUd1SzRNwQZgEeI%2FGtPj4E4H85eTi8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9TTL0yECqpmFqgkircAyqaiwVESArbxCmiZFXeabJNTb153eJ6aO31%2BL9zKyCni2Pxc6kA3G2dcMYQ9UDa5VAFwJ2MdS5GPv8Q4ehUp%2Bbad3MMSFbrBzuoGNAuOI%2FWY7FI56rFmGazD%2BZIyBXT1x%2FyFXHrFfcXp4j30GdS7tdznxj9RVNJYiUKXebRQFUKgFVUTg3B0A4K1oApHckLibHpXLqfuQFH%2BfAZxGNMQUQ58rNcCs5FFulVBYOUG%2BWQGibRsvgCNsy5U45rc59bKfznYMhEGMHax%2Bsgme30gANWpX%2FcnEdg8vLz%2F4cSYCI1TFUcUnDhMDh%2Blgm%2FgxzNQ1z3NSOYGXtUZHWp56rXh6X1mfHFSBWN4SNFJ6h734PQCHUBoMryCiHnFJhGXYKsQr7vFXVrpVbfZbzkWZYP53fF6q5JM87Wji8shnjnG3peeO7GOZ4uRzcSZX2a7uMCCoDIby2INw03b6%2FYXoer03ic%2BrHyW%2BNnX%2FcX2yw3VaHgkWuTmWl%2FDmMV289CdXF8%2Fzt1U7uk%2Brb%2B2GF1T6bqwO0vbl699TjlzEXSUoTZ0RhwO0hghdlW7VdlJX4bRRaMw1Qt2u3SIFhXUJFFkkzb3AZtkOcbwRtOQ0%2BpwN%2BsCwA%2FZ3L1aTrgBCXaGgeKMKiK%2F8AGOqUBxaUTPXXqMsEj1cxOr%2Bq6Ul4beoqMOyIwMpIat%2F9%2FKGsVUy8aUlGBe4qwPsIeldQ7IS5zQzsGiSC1ui%2BcJ8VeqKYyVF8aA4utMyBWOdtlqkbBJhhBJsrbtLO9KMWZSqf79GbqTKD23Fx%2FxEAz2VYTAXKjHbOWvOvmmU5tFftVa1aHi4M8juPAVSI9mXiAcZTY51BvFhftUCI3rHPGm%2FmkO1AF5gs5&X-Amz-Signature=41ff78e323c056c6378f8d66d65e8d3e4ddc1f9de2d20dda455d142ef292b836&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI3F7ZT2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDNgOQ82t8iyBMvEm8iywpVDDDAdLcRF4uKlz2kyFtFKAiEAlV4LBuA7d8Q68LZZTy1A1sksSBzRQSUYZDXkx99lBmYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBcxJNXdfZkMwgw%2ByrcA5mh9CnEoiDOHAOLMAnZg9EL55ynCdoWYgBUWVSQKJXKsOWpifAcyko5fFwMaDAm1dsl0sjXIReZFLXNIAHYqPnYY4oVVmMwyQ45FpbjtT63HqI6asOgy8LmARH9rmGtvhgp24OOGohAr0tMxw9Fe9ua70lXJorbqzPydKAcNuG2rRMilq%2BJWJTGfQG46BLKn2aTNGz%2BupuOftmLjiKmbZXmTGOZdfoya0LbP2reJR243zFqa%2BSi8mNfGXOrdDtog1gedavgNfl6Zyn%2F%2BdSrm0vcdIw1vq%2F5qMJFpFG3%2Bj%2F54AOOHeeXVnKnyLwJc1j5j05i%2BVtYJ%2FFVpG7oWXqvZl1eSkgQqR37Cl%2ByF%2BLvR3%2BsF4DTJjWsqJ5kXTqAoS8Dmw9exSxmPYaA1rRgE9%2F5PBLxqRRJA5kkKIfqAHhLdKTzjUtvMToKQagD3AXvbbLWdlRPUSovuBcyz%2BYk4iHJ6T%2BtGlhF3Pja2KhG9m%2BZ8NyhHW6itVkeqcxAAT33u%2F3Y6IcKEPGfRImvdqBXGxwugijd1lZrFckwDpFOOuSYEKdulAkkPFS6wigC08NQNud3AdJv83fW0l4W4%2FM3kZsYJ1fpGFpKEYSHZu%2F1q8oDLl2NGKnPPgnTIsP%2BrDQKMLaK%2F8AGOqUB7GUypAoAlRSRPchki%2B0K4TgsPGdhW2NxkeYY2MxSIUkbHK9dMo2HP1LrEaDIKaKQ01mu1%2Bz4xsQfe%2BbchStoJ92NAqKSJOgHJZSRSdYtcwrQLMG5gnzgqeoaDrzi4IYRtSH31ZqRRSVhfqBZHmQMVmYSp2uTG%2FwXZgKiRKevyk6G3C8qVtp8gv4GRpg1P3tD%2FzoN6jlFjUwbivyWUGOpOD0Ggicw&X-Amz-Signature=2f91518d2e0e7dd3d543b80f109e1828cfdbba9e492efeca72a497d1f49d10b3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
