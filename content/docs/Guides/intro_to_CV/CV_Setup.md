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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUXE6BN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpntCijxj5ApEv7aFPXgEn94CjRjzRyQYaRa57Kj3GNgIhAIDpqmKwj%2Bgt1GMOwCyaXFz6TEcRdryhQXq4XRCXkODSKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoYvPJl3rkUqwDUvwq3APDBkzuXq0nAUNSFfev5OrUVJOgOfNhTynns6AsTZE%2B5OlOESlRd4LwtLp080AYgUhd%2Fig80ugfcVl%2ByX7nI1FqZsVnwhgCCRSGz4r1P%2BfIJMp6Mx%2BmwTsSeeSLj3iwGPpCk5MDmot%2B85Gj5xGLa8i9r37iNrS46UgS6VjRq7BHJl4qS6M7RoG6sWE6vTP47OCzFrc8iC72%2B0BSLv7fbnB%2FHhIdH9Qcf9DIWN62%2BIt0RFqfVfKgsX7cjrzQlWpcVfBibRYTfhlMQ6cwU5rPbWSdaaeH%2BxcQAlMgThbLxK%2Bl9II87hotIah7AoXdErfALMkA9GjtOjC97MlZPkBmikVmNMeP33UwHAXQ5efec%2FXEM938Rmljx1FNk%2B9yOl2jr9Xv5dJgM5t7LY2zNIummAXrwlbK8YNupycNq3SnDl8fMyCsMdo3kkJWhhJEjA1%2B6UnHyFzVpm776XR8fenZZMX%2FqQ5pRDUVK23e7%2BxVDwGZBjbWBdt%2FhJZpI7XjG68luRHhm9rKn0kF9XtG3Adrgo3ZdCELwNRwamd5%2FSJ2GsNUkgWt%2FRqnivj3mqFmboSIn3W88vzj6oO%2BSRKXxYNZ%2BOsM5HkwbOVADuvnqzXfQceoC3dnV%2FWofInvpD6HqzD63tDCBjqkAelpOO8ICf%2Fdw9Vk3JCv7YRjmtlJ39OS8EYUCbpcMllJrVhXAKBEMOh%2Bzy7Wj0ra9DxSYRfOaDn3ycijjmqk9azwt8Jr4xs%2Fb6FGWQ6gTY1l7Yzjo13EN0WHBygAunHCwOEMvPlzW3v7rfPJHWiJqOUFjMjzjvbotrpCJB0ojmBtRIu2zauxPgEVqrhHsCPK8t06tjU7%2BaQ5KZIZNekOKqJ%2FYlBx&X-Amz-Signature=d81e56973b920b07f36b24a137dcc9ddd4c3f59427e190daafbf8197ec4099bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXIFFI44%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE1FcGcoQA6tvLRWqyLm0Fhhjef%2FBC4OPPQqeJVJGABAIhAOICciLuuMXSPxIsw5J18iV76J%2F0GbGbEBcP7%2BlyCDd9KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXrhaAadiB3vzuX2Uq3AMSENXBwcCg0%2FdYUUw3UEwGbIjtzn%2FD9wYdC82yZ0RIZuS1uyyqdLLiUhzWBQFvFlb5m5%2BTliV5TNeD6WDq%2BrJFXsNcDHjVZTmCk7YNtvn6PSUgXOxPb8PwbMu1HVLn%2BgJFu3EgE9T%2FSUd1atukzpM8KOW0g772oHlZYfFguCKmdWSn8LkBKvq54tFXsDcIKmN37CosOCsAQ%2Fy4iM0oZwgXxk3oWiKsYGjp82JN7rHKo2VWBJW%2FywGbhKYJJYaI7qRaTXlhwa31Xica4dMKIeC%2ByUMg8MKiTL4qcO4ynS9j5sHJ78pbJAMqQIf6iL7s15UJGd2ny3kaSZNJkDHVi58S%2B9iosqXiqQWNO0NjmPimAyzjYYzFPqiXLRO1ghcpazi1%2BVclkwG7TFJcenk7XWFDO50yIq2jpCNk9bsbWI3FdWWekSQ%2FtyQR3Qqdk%2B9TqN5w5CcxUSzOySQt%2FZ8Ku02gdXkU1lAa0XiytByL4wOQPP7%2Bx%2FNksOopWFzOS4i8kQQsSt3Cmlav8Y9fD0IOrS78zNeyKwO2ZI5tcmgzlPM7Hou7F8PbdaH0C72Quwy%2BNk2BcUk7HjVU72YYIz6gz4P7QNEL%2B%2BJfH0FKl54xfQ8QaQXVqIsaxm7yq8ScLDDs3tDCBjqkAXioVLimTUV%2FmQ5zlLbCqguCVA1vK9VZXzDKA8xwWYBWqPhhzrMn1koU0Rac9XxyxdcE615P4R8ef9fNBo1lryleykwBzvaQz1rKyjCkQ16ppC4uXDK7GK1IaYC6RF9g4%2BGbdt6xDexCJuDWS3HrLQAZPYKFJj3WKo%2FRdTHSMrbXXtRGeZjYHmqqs6fdvj18PnnFqft0CpbirrkPJmOgQ0SI%2FSMZ&X-Amz-Signature=a380359053ac1551ea0598b9780838c35d6a2b590908253afc8e283ef07c7301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
