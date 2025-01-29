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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JATJKMF%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWLqcNThW92Jwg6cYVrihYE7Pl%2Bm6iKXZCIZohVYzfJwIgVnuwJs626EoX%2FNZ5IcLSnA7dH8BnzgRDph9IDwLlEy0qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0ChMtx03nSLMhvByrcA8Ei21D7kjNROIlaomIiYJFNv8XhZPZ70Yhr71KzyaeMzrQbF8iXRKdLCsCO4ifbXjmtBh%2B0ycyDmmtHKeSRnZMqPV5DX%2FEQj0g6DChF1ctUvM3dh1U1Uc4uAPZ%2BO8w3JOUdyvFVxQdUshKAsd%2ByWHYnNprdiC9QPgInwcx6eJkkeUm9slwxLpWiZ4gMlf4odP2qDF%2F9YoYfp4mgkjnQbiZChMrHOgwQcpT2B45Jh1J8U1lusvuQ2nFputFinC%2Bv4v7Oij6vZ0Uldoik%2FNNO4uOCVXRF%2BTUki2fPzIKIIz75aJf9wJLgMbE5JO9B9K4Y4esEUwqh4%2Bc4%2BVmowBTdKj2DvYcteRCMb3kVzsKabJVPT4OUD1AC%2Fvw5wPt8wz94XyFtthsdKIhhVfMEe%2BJyHKvLAVu2VXA9BnuPtU0QpKR7AMu7%2BayKnZMIjE8Yg5YwBLFRj70u8mAbARNu0hIs0dPM138gWRfnu72d9zM7EtWJgSmWrGAiCBYEYlFJLrreOaVjSKz%2FlUficr02DolJ29PhQnXyQFXsuSVKI09I7r4d4uR2EhXnf9YKI%2FT771LD6Rmxj6CuIRT%2F2jZHXyUXUoXvby65%2BPKq3Ap%2BrFn0Y4ABXMlbdMjWerPUbKimMLyF6bwGOqUBxIRZVp3CtJhf424jFc2GkYw8iDKxc6q7RLwSpQJnKnsQQSkJ11%2FjIA8RvfGIfBpSX%2FXqYZlyuCvkNNf1y16D10VVeYqD%2F4FwNke6IlEYGhgLrzjr7uHHU8u4k%2FZ47yhogq3HrICzPvH1UpOrJxlgoQ0dFvcDWhvJOgvoZasDWJjV1v1xfhi%2F3fZPULgnR%2FGQ1Ep9ePcZtaBqbQ4XRZ0PglFrtZ5d&X-Amz-Signature=49544bca3b6958e706b9e4cf807f381e612c7096800f90aba8e296d233b70672&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL4JMVEP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBlceyHawJpINMLiLCo1EIq%2FJZhw25qOMZhJvcUBSYPcAiAKvFeu2HoXOPOGxB3zWjmkiUyqPVSof5B1HMczW6%2FeICqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVdXti7GwSDx3YKJKtwDnVtnizWKwNq9yGse7MOEnaT1uZ3Lbwrn3JkBbSfWvqUrBs2KF9bC%2FUSJZHMhB1EDDetYG1iYiHlzlY6tqiWx5kBvB4jAGXyhZUwVkiFG5%2B5cMHlBN8JzrVK5uUkGCZoU6OFraOa%2BDSSSx2fw3Sm6FNQTtiGwf9YcqrmGxQ3xHrDmYkXi%2B3nRwXhWBuNS9%2BQiWa1uCG2C40Kdv71JRuWf6i5RLIc9FC88%2Bdd0N1f5VUveHXEs6ACWq%2BakUxJbiFCqQfYXp3LckSbmLzegXTJ5WFIvfZ2WQVn8R9pzhpyxWXw2pJnsndl6RH9IAhptVKFL0BMIbPlF2szfkJMkrhTRmlLaheg9iQ%2FqG8KAKHTFVd6EIeV6C6eBr3h7x2GixewarFuJWMjeBmI0feob90PC%2ByQSRiLx3U6xUDjPCqWjQQTORLyPES8WvRhWaWrltBhHsaCrAJ78zJM6H4iTSVUGUfvpom7D0YTe9tBQkRCH7eUE2aohqrcq5rzNrWGbiizcfapIZRWvJjOO0fN6caL6YNPcgZjGFDA%2BWuoti719WNM90NHbGxC67XBVrfC5zmNXiW3xrRB4jABatmqTA6HWsO4YuBSSHeshS9ZbLCH5JhUB1BetWDqlLZZ4b%2B4wgIXpvAY6pgH8BiQ3xnIMF%2BunG21L9BMZhCJPKmh5hbyirLQnX%2Fcib2GGs4NzFPCw6s9jfbnk0SvOlo7%2B%2BNIoWuUHHl2SDVuLCCUiic7R3aSLEzDpGlBtBZr4%2BI%2FoOXJCiADYSnk6Jwe%2BmR%2FPf%2BMsA44wp9avfPnuEA3iGvLaTQQGjiF4eVTjsXjuiaAHnrLoE4up86UIPLP%2BjQuy3JztxHdBRWbLWX1w93%2BBZ%2Bvw&X-Amz-Signature=66b98552b666491aa25f95042bec35878d248e57fdca546ad0414c1f8d5e682b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
