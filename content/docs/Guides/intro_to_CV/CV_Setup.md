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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FUAJFZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbT6WIygCmPmmobJGB2tjUXpKMg8zkyOuWutlAp2xC4gIhAICinqWXjd6dbwBT2wFlQQ64qxgoIQew%2BjXpOVsdx3K4KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx87pzRsBryCXfkVsIq3AP3k8MfEL%2F%2Fs09ZCqLgVHa47d5hOzsQ9O111Ti5extRmDkdKoaMVPbTkabG%2BpLnQ8O4OCFKNwzie%2BfPATrPEbnM4oKzPDZ1Rom2KMKSlLk1vHtBYauCYD4H7kUjSCZkX%2Fv%2B4jq%2FUUOF0VCzYKbTd3wlv5toQqUHDxjMJVx%2FUBzYrL%2FgcFhmLbyhX4n1VmpmpyQykhcSqP3NgsqSjXmzsIy7xXrCz4TsZ8WrzWq%2BNys31e2qeWDKuAlIq2KBCE4AIgslfyaizAPPORUGdskWjOTH6t9vYCwKlbyPgsqaQdYBu1RzUKt9TOdszba0h4zYUV7g3SJK71uRapWwZPK4tz7u8EmxxBiuyg9ZiCwmeNLFWuUDFarb9VC4QSJBGlvM601Cf0XrcM%2BqW7n4V4SyjZhoEv3cxxcDtCIt2VRV02Y4jqgqOdbNU%2BLF2UbNfNOOA3nJEP3k4DiWZA1S0BFtjM87gMVhXDN2C7NriQW5wC8OAU%2FOKdRr8u3gIRDKW3beX3MtMQGpEcLnVh5WkbIPd%2Fr9ean7Vi9gBSM2oGSLzrHa6yz2WujdTZftojpRoEROJ07ww8IpGj0EDIbLp9khOYeLoBtyhDUTHMShIDUwQqgGg8m%2BIrt3XGGEPbGX4DC7%2FoW%2FBjqkAeng0vzXw0LaEHu7hZxEvGiTVDYZ2HRYI8qAlsn6WmodTBGMXEUU4TRqsCNMwbz65CeZazUZm4sFwCZ3%2BFG6IrVsyfFB%2B9uAb9zB7iULIhkn0u7LskDknjXT66fbe7SStcSqRSwWkf7zrwyVLoh9OVhj8%2FZtj8eWnAywPvUNrQBNxkeO5DImTn9Ib3rhCwl2eYCugdHyTqunwTNlhoMUxagjjR8s&X-Amz-Signature=8754f6ac15586cfe69765f599eecef2dc3b65c1b56074b4534abfa7a005ac5de&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667A4333L%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf4BMrHrNymDvcd%2FpoEIToXRVqaISG4pLj%2F%2FmUF8KO4AIhAMT1nl4h6fREcfamAFkbg5d2RvE9ReGIqhxi%2FN8rW3eUKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2DnC%2B8owQxEh9eKIq3AN%2BFogOSbSmxHjGhivywYI5t3GYhb%2F25MU4lbSkDUM6721B%2FgFmY44ocqMSpKf549W6bNKy%2BUmHBuiLrPUO7eBPcbjyOEOpQ6oMdCptCpHPEn7EBFYe3t6gcuyTbKl5mj9zGy41%2B2Ng5oZXcK6Vm6QHYXiYbDa8BEDFMq%2Bvepgd2bGgmgLw0Mcd18r%2BzFdtGC7cWPpPqEXe23IoUW6vIud0pfS85Z9znThLA21reRnY9%2F%2FqqEUZ8SLOLyKJkjRR7UdKwT9xTj8HrJT%2FucUoiaYq2%2BuqyeMTKJfPph9M9e4Gwa8X8eQHCmVuZFvTQfyNWSU5JjZMuog5XD4Bexk%2FEMU0jzczPESIELMBGLGC3Oz6MnwSqd%2F%2BJwcQEsOeR4o4060It4zHjABWIu2xAT3VtkSXhjz3VncGn9LqcTvFiCxazBWtxKcjbn2N4FvjzOL4O2wfxV6W61Es9fjMyRSjnyAkJiVrEYvyIFACoQHbuZ5%2BjYrCHP3szHPkxP7dPbw37nXU%2B6WR3650ztnWeThnkzKuj%2B4LPVDUDdz8QXrvG6EQ%2FmGrrz14qmBY3GR0GR%2B9MYNkd9C3QlyOg9kgUu81uEdWVwghm4SSFxjyjrgzzUUGKrkjWt0LtlYzYTDT%2FTDW%2FYW%2FBjqkAZS33s2oe2x6Q0vQndtSmWzv6hvB%2FmHSdrLrGpgFwWV2W1vrmCZ4J4IO9YGCoEhRHNRPIQ4gjLhwgg7%2BjiE1vWF7HMmT%2FI%2F0Lkmci6haukVsBX1cLeDOY%2BPEvDTj8boUiqc83O8aQJQzYyZlGVZamRlWssyixmoExt0AxlZ5v11DMEn5MS7G6SeBobkdGkVgT0iREWPPykiNc2bgVTLKnQNpTjnK&X-Amz-Signature=089d9fe4cd13ff30d22a53a4a010162bf3d76eafa1e99f2a8dc9a01416bba28c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
