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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7BGA7H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUmUETx9qgD4XYFAlSbvvd%2BQ%2Fp5Q1AO08xrVjWIZizHwIhAPukcbWIEYHNKaCPke2v9c3BIrKD9ld7P9mKOYVlxmS9KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F5TfSk9uh1qoClucq3AP%2FnAvSJsJQKCbe9o8Ep4yhnIAA7tlOfMFsR6EUqVKNoT3lcszDM1oJy%2B68uohJfMUIRPUAWUbsIDXZNlAT9Tw9WNi3qxpAHGXBTjj%2Ffys%2FlbZFDGNU2KuIT2VWtAm30sXPX3oLaIxF5ng32ge%2BH68iIWct2fSMeSHmA8bafPnMLNV05qWm87LYmp4HupUWtDhPnu0SDkR4w3shR8dCL%2ByiYBZe1HOHpKjzvF1WEsW0GfQmT9wBVxxtKAkzXlXvGC5rvavZRCQO9yDG0xyxlC1i85X%2Fs%2FVN35T0pgBJ6UNYvnJrq9xOBLVDok3T7cSdCo0e58RqGL%2Bomrg%2BU%2FB%2BOzGspCs6E4EawWzHdS5W3I7bzrWbrgGYAKQKU0N4B67G63p16RLFsVXI6e1GFa1YvX8fpb47n7JOSDfCDF00EufhQPLCg1YxzF%2BTx%2FikqrAhMDuVLp0xXX7IK4EYk7gyzJMfcU%2FrRWw8DnltcyDEDL1lgtwCbqPCcjnzFwa6VEfk%2B4LQXpmciXIfkMtaIaH01dGyz9jADTobv%2FIs96NumKHCKGB0HXybhn5d1mhEyeVMRbxz8ToVT3j2jIKFOfUViQYC3XpV1xgJroH3cnZfl4PPrOIk9xxVx5tNru1gizCEiqXEBjqkAY1tkazVLSIEM2G09yA7lXTCqsWx2XKyU4uJla78aeTh0aDsmZk6u94rtayTIzhC3LQfPI33Fa2tXMFfva19Ah56GaM95sUlxW7AZTFOVlBoYZxwO5zCswW%2B95oeZf5%2F28qNSVDK1JfbpTRZLHQBsrvofpd%2BRYItuwT%2B7HMzsC6537wFVNc2EVul9hpyHjsv%2F8oFBuW8986nDm9LqXo%2BmXC7by9q&X-Amz-Signature=eb86dc0ab0d5153ea974aedd5ae8c6e43308751ae4c97cf12acf192ffd0f06b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFRX2RH%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYKW%2BLqSITp7TazAYV7pUQyYfHw9ceoM8QHckNhp07JAiB6ex%2BANB94c2a%2BjIvlKdoHssDcNIbLBH0mbt3t1gvHsCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdfWw0KJeJ4ILaCOCKtwDvRzfAeQOsIpt2%2BUr8lE1VOSVAQryyEjwvXdMlMiiEwN4ApAQPnJLzUvO7LwYJD%2FQFOXSAAtzvDnufmJIdhK5kCT6gRSY%2FhITXjnhbWk%2B%2BFEO4BTlSdRM7XLL8mGNH1281ektE9EzSW0A%2BUtrC53OIQKs22JF5GSqTJzutbt1hDGecnwL28qML2eicP4B1WpolE9b5KF3HDIS%2F9LQITzmBa0OhGpqywy1uVMw2rTM6p20bJaqWdHpYll7qUCYGHVVQTWlpmAM9PFrG6ziAX%2BREw9Nk2MCehAfQDhCrxMBzaX57Ffq0HSYXsALOzELW13iwlRmG7Ok0zcOnoBp7ZZisZHw3HsHH0Y52IKR3mvyAF3byicRBHzt4CzMFPmckoaxwyVQgWegASNNYplZ4J9UBW%2B40Pbf7Ogq751cBevLh%2FKoA1VioOb99l4urBvorRgQ8s6m5PLeUHnBJPKDTR6g3i6z74M8hXSAn8c5lxRxIuGRIXWN9Z9D9bYjMRxa0Nv6OrQvFNBC7CLDUNZP9ef9LiBeB1gjZPrqxw8xDh02SkPH5KC3uRwwcgFO9YYWS1cCfWoUBbaxjZ4r8E9MOJ%2FtuaT%2FwP843on4oYUg%2FW5BReDm8toZsQHpatZ6aMgwwYqlxAY6pgE5EiBf5KF0fpg0a8aZTT2uD3sgZTdA2FhuyIhiP2qkY9wlNy9lahZzA8fc%2FxjlFT%2B%2BJj3pbwj%2BO7hNYWro14A2lMhtRdqML8Ks%2F3lDa2SGDVEM%2BFaekM9PM6fHof%2Bgb0UpUMwfBMBopYl71%2FOFsQb9axgdlUw4HHMUz66d7ANj37QJdon8o7S7i7zOqF5Kr4313J2UMxw7RHeCFneio2sDxzBpMMBM&X-Amz-Signature=d04f3112068f43a45577ed000a59d0a22603d51565e94b82957a426db679ad1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
