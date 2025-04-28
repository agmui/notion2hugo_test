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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIY4YKW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo15jsoY92HAZ09zVLF3lsHex0vBMFiryAvHa6xlKk%2FgIhAP%2Fln%2BMUACFBw4bwYa6Waamf5z7ZuStx6YriRaA3DD4cKv8DCH4QABoMNjM3NDIzMTgzODA1IgwuOP6m%2B1DW1gyEuk4q3AMxPJ4XUJe4%2F0nypH95EvFmaJmFF5ViU2vsEZ60zmPAqD4zPxmL7QsTK5sRul9f6YD82xiNeQsyIjZ2e%2Fp42SxPJc4M89%2FjLR29OOnyVlywGbbQ4zWZkQYDu630%2BEP2%2BbuFAsX%2Bb9ZN6ywffthFC6WQIPJlEoCb1Av0J4xI%2FscLzse0sgBdWnxxuc4CJJYjh12caw2Uhvdgn0rc7YXVpviH%2BsgDoDJZ6tCjfYfyDnj7xxCFndObuoEJhpXjhXpsqCOsI5lj5Ch0JQUfWO4C%2FivoztHVRKw4k5bMRdGBw4Fug7IfPODn6gNacbWBLUHJDlBw6cRLQS95wH5kx3ZxpeT4JQT0ZFiwf5YEocsqsvdeT3KyxXd8IUd433WpN5BkwMZiYB8aa1fXRq9nvrKQvNywvoka3eq3Lhjg%2BbDcZoAQ9CBok6eAgffES0h%2FulVTxvwOW373tWWeMx0lzTEkVztwKN2zIxVRa74%2B9sgcGJtqDLd6tC56PYatKYU7CAMLH2dDUJ%2FttH7ToPUpBqtUxBvXMlC6kMMk9%2FytSFVUh73EEjDDipW6xJ05Z%2FHqQpKpC12KHBor6GXfnI%2F%2FDmAEW%2Flic4xkTVac8Ke1zW8xrFZfYhR9Np2lk7BlQphopTDu0b%2FABjqkAchjHRNgTPwW3P%2Fgf6x8LvXwCpR1GOfpaaABZJhwJpdUmt1tWNHnMzrlj43W53MWvVYL52jXb9YU6A%2BS67DJW5Yez6ob0dmzIJ3kcq7gwVEbzOHXiUVtcjAyicksfn1lbVuafIVVj8F5%2FnKpavSfcXwl%2BDkrVXVoENSstOueYZNG1AEH50aLKRVKtIDO8eV1d3HjxBPpmNv0MBuAqy91%2BqCdXami&X-Amz-Signature=3e32f03a431225fcbb3bc8dc120fb0295b9a4d0df8f67485597056e4076ec913&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6PHD4IZ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqBuwfD%2BrI6C%2Bk59DvM8hM96pezhjOwRvyjJYfjWfUiAiEA73Avo%2BDZVQzZNIOw293SL%2FPIYDBtZA5bU%2BRXy8JDNQ8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEhMkVVn9ZyQkX2dKCrcA32HPY8PhUGOoI8U9cP80spZl2eMmy1JFtvwroe3EHdUaShdPkNrl3cKNx7XOqeiwUmmWEuekRE41hTuJQxArsQWfX%2Bp82qI%2BiaVDGd9dOQ%2BSk0JMHeSdwHLcrZvmzkDvOYZBEJItMH2O5VPomhGn7cGJtn8pzl6rlmmMAQXKHw2%2BCoQIUFHvLWKieQgHJ6xIlI5naLcAGfg1Z6g7pReK44megBPpmniHX8n5dFgriuI69Tviib17A%2Fcc7AXkHLS4HgolwDsz0e3Afj%2FjTsFqX2E7hodD0u6VRTpSpVRHN7sYhKI5gaNSq%2FehwLqxC7EhmxZ1FVWy0D%2FmufR66aheyoVx0KgcMq%2BAYOQeZj7IxnEPKhIHhWWAITcdljAV84a0ti%2FGiQjtVXdQGTuo4gOyBLkHDcH9rEGMjk%2BOUbTRcigKakArrm2EuDHzYILk8%2FPQgZaqoFrkhCwRu7rVcLzCMgy%2B5VaOA0Q61HocUmPpyJWO9mmYdxvfZHkYU7hV9KZ9RXsKBtILWwuZY1L2BiKpnYjolYp3Ea93l6ZZazXtKGc1t5xSbOKoJgW%2F1mkkPAx7nAz8JoR8FQeSf8dQ519zW8OgZ0ESHRUTe3f7PUvlIugqlsYBiz%2BQ7mVhTxQMIDSv8AGOqUBv113lpHacZKBxouedb1CQsAXYr1BqY6YrsXvzp5nnwRbkm%2BUVMcP3wwEfr4igqr2HE80FotffLB7ol7iVby5ww%2BgFJKh5cgDmIh7aIn8jZB92D2jc92uAh4bOueIT3jaTrfLdlv%2BFgf6iUE9LONsT9MALRycWYXpjhwUPJ00%2FQtcNu5FL3XxKqTJ61lnBqMBKnx%2Bt2nthTsRaWYxoiQ%2B9ueI2NKn&X-Amz-Signature=b961b1f42cb177ae03c0665a951db4d3fc3d15b0a9d93092c6fecd40c6001685&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
