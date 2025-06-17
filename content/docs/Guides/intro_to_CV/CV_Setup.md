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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWUMJ5GI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGU%2FGipehKUC5hW8waX5U%2Fr3Fs%2B1v982fryeyQ1uM2W9AiBnNJn51%2FWhTY2de1aKAi24VFG2C8sXjJY3QAjNHwWnvSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0f3CEmm%2FBzJueNz5KtwD0g%2BlRumQLXjrU0DxU1eAP5k%2Br5AfPl3R3JQOHeQl6hJX08TQRagDFtZD9EApHpBiTwrlmeDJ6UqogrdUQV3RwOXlNupDxwHrl04jWHUdOO3thdSc2QIcuLAOWt8M8loYzw5JCQ4o40mYeXdwUQcB%2BmZHcMbfP4tJ282tAkFNnuTwI%2FyDh2FYpjXajVQZ0EftMSnW4rf18ggBuOE0Fdrf%2BsT9x%2B%2BUnUVcHXsXGEwWFrRsdTWsGAgRESdTjv11fsp%2BqDqHVQkjmUOR6UNoYVBn2MHAsQc89EHcpjAIcR%2FEY5Df6DeI2IfuDFFAn6Woqd9FqmyOVlx0rxKGs1uLhhlHw1tME3LByLu82b1OAOD9q3r8HD3rlVzHpEMw3zPc6yPvZdfvfrbsADB%2FqJdDezOOjHlzt8hHrXzQDDFiem86znoezw5WOF9h8pj0U9eOcl54YfDvbXEZf5svHEM2lnNn87FoiHW9wGEIS8%2BsBJ4nsFjko5om2kkMqWX98ldJ3Io3kngiKdF54HIGwQJyXL7cit9mgYybCQiHfHOl9Xs7EGkJpOtj%2BTwLlBygvsACGygGF0T3DYJkZ%2F3ZwtFXKukq5GjwsiQqgWc0%2FgyWmh0BQ7LLUsM9oKZRcsenFSQw39%2FGwgY6pgFVXrhZZXwAA3SRWsmv92r1AaVoypFjH2zNlgDqQHokgcStdBgU1Sqs7GpWK4qAvGEojMYtveG1QQCLuzd2JX7%2BhGycVMIQ4R6OwqXpVNSfJSodXX22jlYafJpa0S4%2BEpqLOqaZqjohNdX8%2BaLhAAnxqaz5t%2FTOnQwwA9YNqN9WlhwWhhtyMC8TJy3t6a%2BEYBnv6MQj%2BZISOSdQEwbG2abDkgep56e6&X-Amz-Signature=9ff150bf26704bb0ed7a0aa3dd3ff7e19cdf9846f8cf53ac05470b55f1e29210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVE4DFF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCblo8qe%2FwLM0OeO1%2B9Fe5UaD1m56Reds7zC1wdiDJH5gIgfRj8CMmZqZYaOroQ2UF0l%2Bk0J1Vz0iS%2BWZUTmbm6Q2gq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIm%2F1pXTXdWYs4fRZSrcA0chQldUbGO2ju5jw%2F9NPPhWVJeBTkvGzifDbG0mjfIDXt%2FT%2BdfpHoiZOlumA8F7mgI9MC49oMWczBRFOg1qpHOChEbEn16gfS%2FO%2B0z%2FOraPsNQk5xxmTUVBqO3P39Lo19aPNU94%2BZw965qmUribOQ54UVa47ci1w8WrqSfpHjy7UspmzWJ2gWhO%2B8bd6UgOw27a8Cak%2BQ5laMbEYMovdm7LxU%2FpNFNas3HFuUrmJ4s8n%2FQMuOGRKP21DhBFG6l8xnTzJoWu4d2m%2BBazIy8QAglKFLClNdX%2BCXlSmVIMHa3rVGRzeZy9l9vcwulQ6tRPcZJLlP5f1WIaoTplaWuAIr5qiciHQp7%2BlsBop8adbPITp%2BciaSYTow%2BFxmNZ1nAeF48QCA2FbV24Yg8hnQW85ajCD%2FSmI%2FEvvx7tMvPfHVcyyjnUgB0SAMCzBFUdGKBIN6poj9TRbecn63Xh5NnNdo3djCrV6KT8ASVa1R%2BDXiBmjy1y90B3kVsz4jFWlEkMQ05pJ6IFYJGaJhMViTUwRY1R73tdJg2hszmG4EYjaY4OHyNvNDQIlKhwcT6d7ebbKDgEzhJtT6%2Fg3iNk7kikTiliYUJlu3XarG%2F48WvRoVgicrO8m1JaL%2BLUb54LMN3fxsIGOqUBl1JX6vwZNlvsCWbT8eKKiuABlOq6rUE1oxuTa2eCPHzB1pujaV9DAfMM8yuaRw8HI6KV6XrojdnAHuZgqPRADWVYcziai5dF%2B6X%2F0xPTnsj9c0Dn2Wll7jroekclylqtZicNGdSivVZs4F4ucvnC1EAuAKo0px%2B%2FMjKzoiTjPpWGD%2BtSuM0V5QIyIg1LWNZz%2FTvFpmIFoS2COMQ1OTi4tWtCcFfS&X-Amz-Signature=e960914321a25f5ddeea257789248fb119bada207f9da84cb6449a640ef89593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
