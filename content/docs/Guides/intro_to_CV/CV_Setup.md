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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOMFX3JS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCZRQof%2F2LqZY77JEl%2FDFAzpSLWWBrJtDo71F998U2sHgIgRZDuMKqciahfJA3wPN%2FdhVdoqJYpZO51U%2Fc899bAeo8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxi9XOkop2DkOEqACrcA%2FnwV%2BqKESwUeN3ARRTvKSd7W3irQVK5YL9c%2B6JR%2BtP7X5x%2BrD3DsmmtX4hIJQZl%2Fb3VS22pgMqxTo6Pahz0yujaPMiB00MSZdIg389gc8C56Je07plBFigaplbTkY1Lb7LiakEDfmXbyAZmbhJX%2BZOW6DciUTy8fIAXLCKROwwfvkki0cV71O%2F%2F6nIy7Bhj50oRQGE7jsgSEL50rYjcOW8uZzcPNiygGmGeKdzCZ7fwLPPHMXJs4%2BNzVuGzCImYhU3vCjosuPz9Rx7l%2FnUov9%2Bmp%2BDWnGFza2Ba%2F5nm4aPEEeoIeJsoqikMcijs9o%2FcXIOe9LZbzWd%2BTVD2G17KasVq0c%2FlOGkvsftxUcZ%2BHKeulOaF%2F3duK0zd7WK5i7vw2iP7QJCRTKybuQINRqjkPNdRtrHDtwMIBBpjngW%2B67JDLjXY6wtNENiJqIIrvI5XYmvI7EKgbIDGNAKqtV8rn%2BmqbUiXMM6OptGVhN6bHD0IuWY1WbdMgNn79NV12qQp11JvNw2ETvnxGVIE129M0G4BQu3XdwxYxpkt7b5W9KMLmYt7ba2OEPEqRuIWCLxB8FNJGxJZ%2FAms8okzRBMIAao4rStGhq%2BU7ZZFWZnmLuzZ6UsAxaxdHhVeFUUoMPLS%2F8AGOqUBtP2MiGvHE2EKS38uKPDdm0LasFhk33Z9Eg76%2BME%2FWQBcDOtXBldph33ki7XHDPL2%2BUCE8klYPPvkjMMmpAvC57MmkwkPLwQ3%2FHRfNYBsbTZ9tqw1A9hrN5UJgsFkM%2F3vSAbvJBSBQNYH45y%2FBFrW8%2FQVY7sSVPNr6Kv9V2sj6x0HAcy%2Fk3VWS%2BcB9KE0K9OKX9zrXFjyLWldbtWDIRgCyNEXJwd0&X-Amz-Signature=48bfc4cf80f53d1d405ebe077783d2de637cb8a008f59b63ea34a9a59e4c0e6b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZCMDRA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCZ%2FUo%2BGuW3QEmycCuiT2gjoDJLqehxtGTgd%2FCSvZGmPQIhAIwYn7UDK%2B32DwWFv9KA2bEsGlEo%2F2Y6pd9w4GsrAiyCKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiDOsZ2h3THXBxStEq3ANezi4n4bcGlGTf4PfGIChATz54xiqmpWzKFEiUYnP%2FFcDhaApahvxIjCrGoVHgdo4jol7jT9qScIGxclzzs9cq7oTKRqObuo7pV8aUIe5IfR2W9RZiXQw%2FnEL8jSEl6ZIWjE9BnZQPY0bdPeYzrWj73ynM0ADbwblhK%2FyWZCEZ%2B%2BQOacK8Wix8bqWsL5qTifA1GvftNnAfmeyGWK2urHBla%2BxbjjCSX9QSGM5mlrk%2B6iwPEA7P0e2ETawaVtg2PjVCJGNLodDMy%2BVmoLmp2iKnGIY%2BLig5Jj3PBjAbFonjS5nbKV0uL6Czlco0WbFsxdxKL5OqVEZj%2BkX9dDTtBxT9kRzREZbhKfzo5viyZCm3aktBjqYSRq4dpvro4aA%2BDN5n5L9fgRA6MzsnAodiegqTsOCk6QGM%2FV2N0eAMrFDYPnU4h1S%2BREausXyUQG8jdZQHN4wXLMQRsR38PI2GGhKHQ6tZQwcfVydQRFYpwb4kzSJlDmn6MbBh6dSJOnBSQyaEZ4UarYTJz%2FrURrWVTb23QlAYPJL5leH9XpQ5qKz8UqPaeDM%2Br4YbRNiO049WxEfoj65Ah17kln5bbG87cwBArYHS2yNFo9KMqs%2FmFsPtas4SjL7t8nZbP4y5QzDC0v%2FABjqkAYpKuA5X0t%2FOzywEU3%2BnhB0roSWOYjCppEAnG7w6a68J7lkaZ0aKJxbDqJT3o2IGO%2FNsenQu4bi5LRuAD4qn1a20xutyiRhJRFpdqkAgXGf414QFfapXpYP3zZFnWbFR0raSxEHqyicp%2FIRYk495er5SnV2jnKf9Ag22tP8zEgCB5Xgvs5QY5sZFXdxY4znk3xp3SEwIa%2BkG5UwUfYym3mMATxuP&X-Amz-Signature=97faa469c4612d5b974248fe83f872a5919933da0907da52ffd5b10f2bff94c6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
