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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VJ6PSFY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBa5enaF7lXFxZv8ZJ0YVhbQG7oH%2FelmTPwzrd8%2FYiH8AiEAsTvSTBaakSZUndFqYGXUcGeE1iCaMxiHYc9KEYSh8UAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHatL5eaWLQctjB%2BircA9cjDguTIQKZX4Z%2FpNcn4j3pCKk8d8a%2Fin%2FzmoN9NX4l6OLVtGWqlMHpxEZfVLX8V3NQEltt2DS9c%2B%2FR9CdO02E6jTXPyF1JjLz5dqGgpieWMBWwnh5Ubi9TIH2MJN72vi5yNxUmsH6xl0QsNlZiUxxu74PQe2Fh5bHambauzKiqjlzfy1XfSJAtFppssq%2BpmSBj8Vjw3xlxlE89TXhMLXRl9DGW%2Bdnau3sW1ZGDpXblewtXViysJvH6vynbCWh%2BLhAIOo71URLiYpmZx9hJqsG13Ova4RpWPQDE1jaoKjI8qka4JcDT7vvS6dm6cU4xmXCZeH2HeX9nwjnlCBELcRuuezAHIzLLNYYuagD1s7MrYH4WCap6ScFijG0GWV3B2s4Jub%2F4GZjFBqkbMr1PckH8%2B3JD88JUj20kFHQQPj9hWfBezjipZFA5hLWZdysi8TojH%2By4FbKcCpVD1uNyZyXQhCLAQCmz49yn2nvnjwszVHNtEjxk9yxXM9fH3lC%2BDIIKykvPb8Gm6%2FvT%2Fn8CsIx2U8eTmTU9xIWSmHYHRcwIV1OxJF0jOtKAzA06L9XKUpyBP8g8CxrwVHzrjKoLKYzMEM449nFCEYNGui%2Fmv3Vjzl8V6%2BicdgivvoVPMM%2FKscMGOqUBJYRgtMZ7ktqB83IldvjibXjBDCwjYn6LwCQstfr0%2FIA9LaOHhEtg1x2iI5dG17%2FZv9rC1PuN8xtBpXOMoAnl7Sj31TpH3pMn6bFswvkaXVdo0m2DOu0YvIb6zHIVAWquvOn8hGJYsscnKjRFPJEkP6OWGGs%2BjyJx4a88JXiH91TltrvgiFkZ%2BQ7c4Y5LFB4nlQFRaAtLWqeeXBfRlpeVVQRwLvXY&X-Amz-Signature=19d34891d0faf0597c95ca4a54032efa2fcce4e6532423544504d6f014cb787d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROQAR2Y%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDU7upouC8HJhFzmkdF%2Bc7alvxFJAAFY6FngR3CAR%2FCKAiEA7GFcBy5rB4YqnCX5WYNq6VbSp3mercGrNybx3PuBSkUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN285xnyCv55jXEiSrcAwD7HDiUyLI9krMTs%2FMx%2BSyLSYgCc3r0jFlW2tqfxK4sl1O%2FzHMGL8p4rxU0%2BAA1v5MunjmgtrSv%2F2ED7nKBRucfGHMWS1vl1VFXaDi0%2BgKFQblO%2FiGSAG3kHtHIri9c4yRlXu4WdaTK%2BVwG4DpQ16h9u6UUziyFJXt2hr2qh4CyLFGPB5GX3ezwUvAQ%2FeFy6zVhV%2BImvJh%2FertezXBTQ%2FXKJ5TuWbLmv3vL5ElQ6pKs%2BwrI6z4QQTpxzBLbHPx2o96emJ6TsboTvyYWE90TqOpIsljOkF0OSnJYfDsRxRhYe7jaakolLPkDH89%2FuDO7lj3p8DO%2FEstoF21bnbjNETRjCXNd6k6QTYPyY3U%2BQt8yCe6oM5fiB71z5lsLg059aQ7P%2F%2FMohNlECUrDYtGPRJnFnzWlxXMDZsW03hXG9yv9QuG%2Fhwbd5YYiF4YlRKW4i8eL0QbBJ6BvOOiI34dMz0uVbejUcmpjl2oD8yroZdS5eTTZThWG0oAmvWQ7BN3iefi3SBFqAc4fBS1fxjBNOU99DQnCG3NgEUDpTjGM4sHFy%2FDSH%2FcpD9xTEUnr8D0j7DpJLb9%2Bll7uPLFFOEWMFx8hYdaWfTLSpZ0UeKOa8g6pQ2LgNKH9FZnRzM6uMJbKscMGOqUBjOauX%2BEDwc3em0LQzB5ZF%2BnaJ0PG3szbJfBMMGYvvF0GIMp5W%2BFJGV7y8JCLBUmR7uujfYNAj4Q7O7WPBIsCsX34uT%2F%2ByICtCe7%2BqBIn3GO6xerdxNzyhH5it%2BmREqtXX3Q8zlyxdOSRPkCn6JPalRlT1scgX9ELqIwHGpwVazatoxKVk76P29DRU%2BGfjukf78deCnEMO8Z0In3EC%2FkI1I1DGu9o&X-Amz-Signature=673b074e29efeb6fa9a45ec915bb7a2c0669754670d8661589dbd4a5b383f122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
