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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OJUJRD7%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCE2cKhmTtZZsnl849Mf5NnVXVpq9d9VcLoqJreGSJ7FwIhAOfOr3DtL6hH8o0wCRONKbPVPFvet7BEmzFzIHr6%2BbnsKv8DCHUQABoMNjM3NDIzMTgzODA1IgwnOK%2B%2B4cUwJQ6l8c4q3AOupkhDofYO5L95VIAnaIK8e5GQQy7%2FJbDV7aLOxss0mYkfuB9eW%2FhBnawzunnOQeE1MD8ozVJA8VzMNCgZRV6ajulHtBl6nte7OW5OikxaOzXgD4e3DYVNMoRQGJiiA%2BSN8osSu0pXxDB%2BLHgWYiCbTb8IQVRX50ghF07ISBQLsWuYjXxUqwiTmD9FVZ9dLXjHcSUicPqunVtXWXGTW7Blq2mU38TBEtVWuAjbsVQeYVnqj%2BsP5c%2BZWqXC4QJXIUMZRDxgKWnBClZzpyO98FY3ChwxE%2Fs%2BKdZaMv5DwIIBdsEf5ehSneh6PQebo5pBOrhk3vdTlzf%2F744BiRsGbKa1OalWIdO4SpXn2bQxhIKfgwp2Wt7N%2BG6LXdH2ym5A25OrhQVEdHXLaXSENJK%2Ffon7yZpUJITVW74raGvfQyd33%2BIPJ1UqtYKjDLdU03A5%2FpOl5qpJyIzHicQXSGPsAGbNf0E6ODAG35r6qVz90jCCYLvIXVTRvuu%2B%2FPoT9LOxu09qxh7l5Ccr78fjhmrPJiqXDe49mWhQ8IuudGQo77tAW%2FvrKpTlIpJR5l2MJeQY%2Fbk%2BNIpe5hlF%2FKkH9YWIyGk2zrGPEl3aDo%2Bx18egHNXK0jLilZpw2cr9h5ARTzCxtZ%2B%2FBjqkAX%2BLNk1abcdJdBtkMxK4gcItFC4WUTzzZ8Hlz%2Fey8VcrbyFf1dmLh9C02%2Bpbj%2BItkt6arxQ1w2Ax07cChUCjAVZDx3BIzoLzFRcdx%2BiTJm5Zo8kL%2B7qcU3K0fvhLmN82bKM2WYZK9TRUvs8jdZrVeDOFVP0VN3sZQ5BqgNVT%2FWeIKQ0VbemyIXua6iC%2BtSxeE89lMoVOvNNRwZUU79t42maDOMxo&X-Amz-Signature=9c981c1d6ea2894c1d74b87bf397f83b2a9f8df6407294f7fec93db727cd14df&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOHFPTK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIEUY0Df7TNoCbnXzmpcb7lDc1fn7aMgtPOZ%2F0ygC%2BpeiAiEA%2FiPi4YYmNOLsWeRkQ5fnBxQ%2FgJKs6N9C4e2qkjWdHnkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDLYlx5R2ghQTfuy9PCrcA5ed4qQaNgr%2FG4ggD1HODigUuAASptiZ9mfrzCYoZ1ajAOQD%2FGDfjXKUgiw6PZTPFEqq0CXjelKDyL8P2EBj%2BujaTVATvrwVz7uQqr3L3%2BSk%2BgGRKWKF7zKF5zolrTEqujA3wYB%2FkYlhcsP5qzP5Jp81UuWik3%2FdnLRAtHgvdfb7y6fks%2FglJnHnFcOpgR6yPqSQOSz111MzM%2BchfornlWaXRpTqFQvdxFgDamEcychJz3W1YNel0ppqG%2BMEA0RFOdM7K4SOp3EDs1jhGD1UVUW%2B993MQt2u2n%2FJ44KHcVRUmSgOMiT9tCEDIXVp%2Fp0uBEGwFMg5hQExFWqDmjdopE7rS6C86YiGBJhu4q7pY%2BHq0IPe4zOAyJ9%2BKgI7J1vMkMnH4Q7A4KYynioDREIk%2B4WZriK6wPphESCi5TzZOVaC8fBmLvpU78ksyef1Vr4iPJoOlh7o9P3aH%2BspVE7TVyuciJIlHliMRiOsFmP20hHPdo5%2FkovRueYiIRF7eZBCxCu4r%2FfagNQHKpxSrxDgbeiCE7yt%2BD2tyrQfvGE2pEg8eYDl74JusizVYXPqhH7SWs2mG2XZTzH%2BmjxtSMhG%2Bz5MPeVPVqIHcMW4sgVfOLJ3X5AU2Hcghba5QFvBMKm1n78GOqUBtuJnEX%2FB54tmmll7aYv3bJqYingHis14wS1h5zv4H9mHNthQmlwqUnE%2BdJcUOsQuo%2F2KCT9%2FwdzTt%2FrJXeAZJOFbMMQB%2FTEZyhOUB%2BORcp8eZt7qCp66l9swAF9a2PMOIhjAXD5eozFDFgWexRcZRK79OBJ3rBp3Rah3tPTPkk2dL5amb5Gfre1h1%2FORLSYX3Ul2D8z1TboKOeKCpQLZ074wHTzL&X-Amz-Signature=c7f667fce5071ff3cd7b40dcbd8cd0e3f001aab21c0384b7baa6ce1119365b94&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
