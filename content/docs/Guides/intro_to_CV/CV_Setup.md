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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZCHWKP3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQC0dRWess%2B9nBkDyRA0naWnlGF6f1Kz4SZzaA84tX05vwIhALepkbH09GpbGTA1%2B3glSIpJMuwIzvNW%2FLNTNnkuA7sKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0YLQtC8jvga7v%2Fg4q3APrVRNXBpGDTq2Cy8mNetcPEeWcYg7jegSVU3BWDXyrlKvYy8hQ%2BW65rTgIjZD7qmsmNwuYMMX9yZY5YCbtKnLZgW6TMeogFEBnNKiIBUAg5M1u9fyMphszlhDEimjw5BKK91J09IPqpWGHIUQI4CgndYssMtFrTPDThQk9a64eELoFraBP1OyU27Gy3lQgbSua8OiR8lrsytAuKJTbief6NHGijkh9yFqdJn8dGnlIpUWy%2Fa%2BQE0EU%2BAVe2pccfKrgr%2FtAR6olPLIwxzPzJjXeerjBmfH%2FuoD%2FFckR9JzdzEd%2FaMkp5zpcW7XpPDUNdzL2x4SIALIHI3%2FLH%2Fd2FO6L%2FRzXv5WbpPJOOjrTxqIYW4dxqA7J9i%2BV5xBKTB6LA%2FSDqi8RjRgxkCxe9RkHpPy7Ee5Vib0Q1Jid0KJoY5AQlhHhgnXawihoyTJuqzFX27NHPGgguz6UAhnF%2B5txZO5nf8Rc3z5Xt1JjFstQu3blk7GKE2GoK4OEO%2FYAnDGj%2BjOCJy8cjBOt6fOsbOz30q%2FiOXUcq8421Q55mYHd8qQTW2TuXO7J155L2AnoHpdwDLesVZYamBCHuMqw57bhk0MaYbnvpf%2Fwc6z99hNg5D8I6a17YXfH9RkUOEGCLTCM%2FufDBjqkAYHO325vTuwJZr0UBYeEi7qp9nLoSZ%2FwzmgSLAiESXJxvmTL2KvB9l6FlHJ8MliN4Jv696YZ94wPChVYM%2B2KEGZ%2BsUV6wrpOHNMH7NJHxvEWZfuqFUvsuNEMVyKB5r1s5HsHsWPQhP1eyV7KmFTyHn6%2FLcCnhazR0mFxMj1qDJFeqgwSSDsLgILGNLYssHe4EhjSuUNCdSLK8athSPIC7zosaxIF&X-Amz-Signature=f84ab70a47968765d873f4b6663f785b65ed4ad2b08a260489060aaf7508482c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=3a03bebdb2343cbe443dc54156f012ec8912de4a9badcabf1065cd5d77de6e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
