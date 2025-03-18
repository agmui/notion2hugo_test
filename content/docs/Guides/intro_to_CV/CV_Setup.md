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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSS3RTM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2B%2FonCBB4Qs1tk%2BzhXutzhULPNfgYL%2BRS9nxBdum1M0gIhAOub5gPz5HbFE3niX3j6c185R6Kjr4PNjRld3BG60w81Kv8DCFcQABoMNjM3NDIzMTgzODA1IgxU5nHh0XUUBgg0tHYq3AM230W%2B%2Fz2RuBvSiYd5eG9DaFldjd3c%2FnStm2RWJZq8qqR14trfHPlZhdGGyBjDW8HGGr3I%2FQOMWBglJ3F%2BZC%2Bm6igcHdh3VuxpNlRLo4CSk3UFQdz7lt%2FE%2BzeqB4ziXr4C1mE7kevPjQcMibh4NR2%2Fw5kklRR%2BixpQuE%2Fw2ZcvIjaiVUbbAaBoPBA6xkO0Cl3HfDGqpD%2FL%2FuaxSI67%2F0hSxqEduxvj%2FbDcmZj8QoL7rti1enpuvGS4fgW5duiOzt%2BMVwO%2BxEcKIBpi9oDvpHAgtuhWPQwgob7V7iXRk%2BKuKkBJ1DlfEl6TPsMkWFj5Ys7TNvWc9cAgDgrujnWKIsNSr0W9k%2FCeCKcwltOmR2xrDkgmKvkMf2SjvqqnriEe4jo6B715BAqelqOKZzTYWkTfMrYnr7itjP1ClHWIs02HF9u8vDjwIBpGOiiw3I2vIzreiIcFzb9%2FjuBi4lNipA5plEmN2wyte72ki4k3tKqw%2FTQPUUdUQSHY86ktYKPVlH4NHe9V1JqhSDC7gPNG4Rn7uu4EgXHA%2B3FrFFMKOP66S8CpFLQyqubo6EmmH%2Bgn3sTn44sklUCq1au8HJF9uvOtK7eL1Di%2F1Zhotg3QxUyJiyjT6c112BTnTiGzKDCHh%2BS%2BBjqkAdXBizCzl0OAiz2L6LfgsoA9dxwVHfSfBCqcN15Y0MKkjSZwta7zpEERuE%2Bnxvn8y%2B%2BKd2fnjUzmnxpAPtmytSVK0K9e%2FH9S4EgAwumjxOW%2FjF%2BsHg8uqDIVDBcB3etTy0uDvsNUEG13V2%2FCA15k%2BtVW8EWZ5TonlnWeKxFijqMTjJon5zMYmLlhQ9WIGm9gO3%2Fm72mLBwAspv%2BtimjF1vY2xmjt&X-Amz-Signature=3dbed575501c8c240bd98c2a5f94967444aac48e6c1330fdcb6eef07132939fe&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3M4XOS4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdMEMFy4srfrJwtNskfyp341YXT%2BKTERCvEve7j7VsdAiEAsUzJSjaq1QAf8yJlTRaiGKfBYNJ3Zd002ls2N5B9UOEq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHvQC3ZzTC5W64SIJyrcAwPhmWgJYT4OqvLLpHr7i8TGlE6%2BmtawZjqw%2B8G0LL8J%2FrQblFQn3c4WVTHQNLzIinQ7gmMO7PJPcZ7cduKyUs8jLI7pfGnrIs3LB9%2BMjyGWEJkie%2Fgm4YDSk6IehVzRV95TCt4zwERKesUp%2BRza2nVZRxtG0hlbduWwRQctJn6QYuFFAi%2FaIUcKC38RHGOZtocvvlLiTZNkO3KcSBMlEcP8rowB4qXXRKOVv1KkARrPrezABfBoBaa1uA%2Bz9johBhkxM%2FSkxKvQUrXQ9Vn1loyGEAM9BmWZzMnFS9s2rcFt1LH7uO15SGRxUEWmAUCLHh6DydRMr3ZTOESfE9w675f0ng%2FuGusAWhxozkUw%2FLCWjwMLUoaUo58rLY%2Bsc9ItH6sw%2Ft4wZ1s1L6mB0kHJiTdyCwabqKyWHzEVjMiE1%2FPN6naI4iEE1ct8iBMBXvFbBPGQSalunVT2ZcP6Jxk4iS4qt%2Byh8uBG93uTUi3d5lb2Cx7VtVqJ4hsSpdv5D31GxTdxXLmKzabiEvOGq2XzLBegzEK2ck9Ny4PIqg4E7%2FVTtp9AwKkVhBlcUsDcziGFYZ0H3LnEgkrHw90R96z1bxFGj57dnQWv7tZHdpDpfFRU2B5I%2B3Mxh8byExgQMMC25L4GOqUBJhCRvCykjB9SYZIh3HnIx9tFEv8zpWIrnzQrLZDjW8IB%2FwtyXXTIRvSIIv24U5ONqhbTdL%2BTfajkp6OEguCHi5y3fYGIBXJkyCoC2XeG0FBcZ7CsRrGFubMXDnl7WaVO17sYC%2Bc3Q6u4dZZ%2BHvzuDY%2Bulv4VOO9YgBtQz%2FROPOQFpKd%2Bc%2F89i3s4zdrG0NzCxwRqfuP2QgWdoPP2U3AHN0xPnh3i&X-Amz-Signature=a71d3f51ab0451baae03bd0091ee02b4c725132f9b0c59354595547c52366ab4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
