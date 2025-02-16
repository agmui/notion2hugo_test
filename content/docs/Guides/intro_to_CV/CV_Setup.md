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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUYLWYFE%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCSjaQv7Cj0dMMM2G%2Fx5a0TniVIbNYNSSbDweKyC60bogIhAPjX2UDMHZe%2FV7TSo%2FutRVQUQhKQ5y98tm9pd9Vekdq%2BKv8DCFYQABoMNjM3NDIzMTgzODA1IgzHawot5WEMPcEe998q3AO5A5C2bAHjkZt6s2VU5Cljc3cksb1bvHNBxlH2Xml4C%2BZle0IAC5NfFNyT1RqNdLkfZDef3dMKGVXPn37opx%2FcUlKiS%2FV5xgtMRYnlCqqj%2BNlliWpCWYwdcv3qDVe%2BkoS1CC6RCdeEAZLx6UKZE%2BK16Xpt8tJIVYSuy9zg0fqSP2z%2FvSbeX16oZsjgcnb4CPWx%2BNJ2iwbiWILarhg7xIDM%2FvHMrm%2B4ZkhPeEszO1P6O5NqX%2Fdr%2B2LFMF%2BTFi8X928pfKuEjx4pIpIxr%2B4mfaJLtTdP1VY2sSfq8yyMGYmexnF%2BFc9O%2B6fPRzK2z5jIZAq9sZfz3bkTUmLAxDD34hRXBkDrso5un3Vf8jApWq4W3FpeFuVtkxq2sSBSdDcUer8YAndWqj%2F5cwq2Xyp04%2BCWZ77nmKycrN1XoRfl0eOYBcwCH%2Br17SD%2B5aLfz9lDoDVRjgLOSQHZm%2Be1D5%2Bf%2BqDV4EprkF55b6GYXiGOJqR7kotm8OFfz4mrJJANbOjyNJumO4h4Weht1XExrYJkzrD3IUpeQUoJPa5R5VMOxJG%2FNDq0c97TufYvwXorTJ4Urjc%2BNRagMFyv9JcZWVYSV5flz8CHJfO%2Bccl7FdSVMcckZECBH9U%2F3ueuhhku3zCu38W9BjqkAfFj%2BtWJXPDJrtls9%2FrUoop1FTkvdwOb%2BgrV2XINIC81X8cnCPy0dbMi50%2BI5fUEKH62%2Bm2KjE6drs4T9ICGorGIUtzfO6BjXFNrHUPGFLrK6pZOZN5oYrw9CKX7%2FAbXrFo8496SmpiZhIKSy4E%2F3tNVDUt3bhI8KhKHBNDLEIx2SNCRBo9NyKL9GPJiUJylBCu6kF1KzRdkM4fKV5fJCU0bVhBc&X-Amz-Signature=7ab0c664dac39f09772516504995747513659de7bbee515d92041b8f902832d8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4FO26Z%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDziexP4KjaJt3hJaAGyJuF16HniH3dXjQp%2Fkt8gO4ryAiBoexMmVIilMu9o1s35njhnpsPwVviksaIYqwq0EQCnjSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMRtuGcH1fI8va4hIqKtwDYrNUb26k8uW7Bh2CatjT16ZRMs5Hui7tF%2F1Oz2zEidOj5QkVgXsqVinL%2F22HGnhXzfUDQjAYDYi%2BKVFjWt0olh3OTloMPXwLC2PmLdIgVEDQ7A%2BdbED1NP6RHEZxsqJeu2X%2FqHcBZe8Z%2Fe4NqcQ3cliZTYhtVqQnMCBB0MtxYMY6ZDEdfRfnrXhIPHa6RKcCan%2FDe6QbNP8q4KP%2B4QUdiaG4ejoQ8p46Hw9JOb459S0duYBE%2FJg3hRsaDzo2yYd3f0bE7d4iz2O0LsVBcX3G9p6IAXiQqdbeA6KldYFZ70uYn0jnDRzFtKu2Z3zZsyGqUFmqeHKrwvwsNx6ZbfxWQO0R6oXbCHLb7ecxRhHeq8zM8HGg4ExzGdqfUoz9glk8%2FMcN3kzwxcFARv8WF9OhnG%2Blnr9%2B0cPxedrDNqhD5JllzV8Kx61kWRzHZ99iUeJR4gfhnZNLlcyfnaD8VffY2RcF73oKwe3t1%2FBzbRAet7q4qq%2BxQohUCRlBvNzilGcqF2xV81pbWDU5nxvYstJeiDkTO%2Biesp0N7sHBPuN0yIxfmT1onYqUSgPAGK2FzRxC7VvlyVKMNkMzo9e%2FiMhwEp%2FTC909lMV01ZnGoB4HVo0%2BsW11OeqQPz5gJDwwq9%2FFvQY6pgEH8WLIvqWtF84xQg%2FhIoR5iRZ5xECsucAwxlkYxRk7Ldp8Q5fOzld62BcON0yUgdl%2BBxwOfiLooSnafwel47hOX%2FPZ%2BzBxFmKEHVz8ZuGfVZZNl0%2BOFXZNJ0iSQZ5HhW2sS92HYxpYqF60Nfkw%2Bn43QJxHxOI9vxvNhtoL5bPoWqDVnYbKQ%2Br8BhhrYHK3P32sHzs5ulHjqWMyxpJM%2BfaprLDnLyGJ&X-Amz-Signature=abf8f5434e74343b1562c50e91e9acce2e095bfa6e560fd2292f5d6a12df77ba&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
