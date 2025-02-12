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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=f92f40b981a7c77e84e3bccd2f8f6f8a2271369d35cfb605fc02bf7ea1bfa922&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5FBWL3J%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2FR2fTIVwmMZeyJmj9Mpc%2BVo%2F%2BhrEhUfMMIBBJxTqZsAiEA%2F6SRIwoM5OvV7rBEC8XjKrobAlEzLz6h4U1t4FsVYEIqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FSrYSSncbtY5qLyCrcA%2Bvgfw%2BhANuQ60TWopSEWoGPFzoxpGC6%2FqDve%2BjnaXP33HJGqlroeKq4GS%2BVfR1BFcEsuiwMjOdRzprZ3IVDu8Paspd5mPFQIeWVStFX3xq8T%2F4Pey7UeEyWby%2BpS9PbIUrlZnOaQN%2F91%2FInrmXYiiRmO%2BXsdT71FhjAJ07b2gP7jsrMh3uXnXZNgHNQzLtZa0jDwqe6ifAPfBJF8njSOgSP4ALswHVZ2xIg9oRiPkxo%2BE0miuD8L9EFFgW2suBmjiFaZ7Zu4ag6hVW178LahzinXLRwa4kcGKKwnjV7N6ZELGh1UqPpXHC2jlhUOvDuMQxPeIO3%2BO4Sj3XzeyAQYLxlcCTaQZGW%2FYJaSoCGaym7JK%2BTNK9Z97eqYcS%2F0XmMPvjyB2xAxWafhIVsn2uGlaIjMi2ASBe%2FZkSGn4rE%2Ffnidtft9AK3DMh1JVrbv9xebdyvHnxUFwJifzpaSLoMKgSE58XCl%2FRXkMhZZcJyZt3JqvZ%2BItRzjoTwW739jMrdsSvEFlx8w3IwdNGbcdZApe0Kt7z%2BEkXD%2Fu6WS9AqzNuq9rbLsM6k0BjI9toqze4a7vRAmlMHFeS0mPnIW%2FqA%2BTEhfod9r2MDH45QY99gwaOE2pSra8NQDiXFcGnYMO2ssr0GOqUBB7CY6BaIlf7ND0kduIAMGdWTIOlMKvKbaClxSfVY9b%2Bs19dhJW7o3L2QPo5CNeYf8CG34RrWI6LHKvbSPN8dF9cwPznLFTwUzL6GLcmXj6RNCEVX7zoHiTpUdtV53YOuoKhBlOXp4HZxco1C3Rlu27sc%2FriHDV9Ju5VtVGqL%2B88vFH3p%2FJo2r5kPzTOcqRc9fvKcA4OwAzK41CsQ4GOdYwEV2YIQ&X-Amz-Signature=37d9928e7e1f95b7e15457d254ea3bb4801a3b349f6272edebf9bad32183c16c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
