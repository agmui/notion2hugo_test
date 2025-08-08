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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664RYT25E%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQC4NGH308yjJyWk4ROKrAELTB5xADi8umlARP2hdYVPRQIhAK%2FshRaz0zEXn7Z46muRYt6kYlYlRNv39hEoY9yMWZCGKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxODHY%2FxWXZCWW14q3AOOKpSII1%2FiAPeag8TSlBnjD665cVfkbNzVAOGP90jCh2EJ%2F4H5zs8vYdu069CFeVIFxNNu1z6Yd9ltvrqEvmmqbxz7QqafZnU38z9GFUZbOzzinDqtScZctwEY5cCRJCh9BRN7w7DfWHxiUvYlXiUwBeLyyV3bA2wAGyLPUv3Qdh4vFLUfRJRtL97pWB3rAPmWS3FnLj%2FEOdhm%2FJZ6raLtuyfOs8aT2CXLruhxeyAWIm6y4xoI1CGrUSSwk%2Bi9HJsqVARwipxveKJmhFhnVS6YAZEMsIAEblMAoaysi2qni66dk3M46WnUB6Xy%2B%2F9rZo2681PjaOnuK0cVCON2ej5LTeabU%2FoWmO5LV%2BQTR6jBmPYHWwy8Lrw6saF5Qkb2jf1y3Ug2iV2RWG0nXRCwvNRfPf6JMVyy8PaeI39ipoqQC1HY0bPKNFY%2B0T%2FCTnTxIFp1QiH5GjaoeBCk5W0yGN9fWJcahBl5giGXNErs%2FaGxv8E9TP5fjBJDcouZATEevFmAy%2BmSigoQe34QoTHE9jXenOVopaFEZ86hddwfl4rxLRfB3vrBc9Yrzm%2BOHvii5sZ8WXhZ4Gih%2F6T51WH2OCfl4bUvJ2LBb2CNFA5jxCTdht3rTaiEnyX4wkwtBzCLoNbEBjqkAcdImTuuc5I6olPfJNwS4BkX%2BvTCikfh8v0WsLb%2BkuRYCxkCIW1yjV1pGGcY3pHtaC%2FX50NbGfiD9UDFvZz6z6X0RHT9DH36UbdvBtPdGgiTocqtUDGbkoCZGOOiA97gYK8O5oBjxUO9jBGnzugnJrdbcMiK2O5qHsdlP7U2tTOuqz2gCRq9629Z4Q49wDPjFxljU34eKQJsARSe2KwB0a4XOo8T&X-Amz-Signature=5d3fcad90d35d18b31f4d65e65afa440503503d0e5066b688c8ec413b9ebbbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QJ4HDOA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDChWWY6PDsxcNZab%2FEAAn%2BCzwV52za0KHclfm2fcSlxwIgXlveuAGvosmE2%2BMxad6bnNw6SkxAjeDYFNtc2KdJosMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGg6nYO3vkH8EnS6yrcA4oKlWzcEnEuWJRBi1bA65A7rCClVnn9uuAdjcHnm4Dtlan%2BwasU7mtHPk5gSH%2BIvIM%2B7xNU50ZGcjtUzL7fKKBhbrUaBwgRZXf25HSuxFqdgk4PjJ9JF5SPPa8lv0KIUjseGAgp4h%2Bw1xdegDKRBevq0XGzRt2nUsxnUGfj%2B6ouN4fS%2Ba00JqdMF2%2FBtT5grH2xTwLfJTtSNxXq58djc4%2FGAi%2FHRYcEOXsbOE0FKbm31FX1W6x%2BR9%2FXkwFetjMAQcTZ9zOW4nNJxsFfd3Bli0f3s0NqdzPlpwSZdWk2mdqkAh9Rzvd%2FA8LB39YXC1zJKfy4xlxrpU4tiJr1j9SOSew033AtPI7ALYDJ0T8h%2FeOJ1wZnNy90tEVt0Qwi%2Fa0iFOl1FivZHGRv8SsvimncUVzApUVrqZHkRH9ul7%2BTyLc%2Fvh9sHtdxz7DWqg%2BWiD5Q57FV5Fm7EXXkSZOzAhAXwzE6yA0b8AC5lcrd1JK2tzoqUMpY9e485iIUOhoYNPyGxDJaTyBWgTuJMcfCWU1HJERLvCI%2FSiW6bA%2B4ppNBPWnaqp%2F%2BoGF%2FHUIm2D7VVO8X32xjJVUsIlGxDZRXJ%2BxU1Q25Dv8kMF3AFbPU953wXfkhOIJ%2FHZoXcgxsVTP0MMLH1sQGOqUBCwJxDlKb4O%2FNnhsmNI%2F%2BzVCSof2e8KdS9V2Ax9D%2FTevfVGwAh5m5GpeZYW%2BkWdR5UByX4YDuYMaIaATZLHuc5AytQ6oCmbBZM75XMzD5Mlwrn3brBwqnHjigE%2BGP8K09VWCj9%2FybuaNt1vvBqgi3r5Pox6WkKVToAWzcwyKYzoypa3r9hnIycLbBitrZBOluernSC5TyeT44GCLEs5mJVFo5pmql&X-Amz-Signature=bfc2df41b3e1ac3d507dcac1807f173bc17e94212e47310631627da438953335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
