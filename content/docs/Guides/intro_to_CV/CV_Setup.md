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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTSFMHT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDbtyEt9DK3OhZK6wP%2FEII23RqgW90AjF%2FcvG1hd7bKEQIhAOBlyMvN425DOG3iS5Zwf0sATxsN3bbkGC5avPVwoipUKv8DCEcQABoMNjM3NDIzMTgzODA1IgxhuyN65yOvc5tR7hIq3AOde7gIvY3awDHFiVshMc5YkpCLVQcoFgQLtzzba0g8edysCKf5RsnHUA8zvOun7%2BsjNdHDK7P2TYpAl%2BIniMc1VcJtwbLK8DCHUFnUnzyjyb2R70LzKXk3b7%2FeoqX38HK04f1i7eSp%2Bu9KdmVwO2npdqv%2Fo%2BY0esKjL9UKmv4qN9nOtFxg5Jm%2FzgoV4rAe9ZJGCYqN09Fi56vlyp1OcQB%2BmGnIOx54RRWleUausQbTxwqabzy%2Ff273zj8D1EoeCbkAuMReR6K8APLCpyjo0MYFYefoJmW5qLZW1H%2BxEAspueb%2Fo3HOpy%2B2ZDuoEuVZqppkCjm2kH9TYzx8A6B2e%2FTlF9hmBoX3ljrR%2Bx1PnfYK57j0MwwInVVmpxmsUf1lxPgWrgQsi6y2X%2BuRqqncvBk9k4%2BWKwuOdJqstJyXTT6GTp9RF5KIP%2B7aGp%2BBv3W0QUWIT01xyEj%2FTLngu4Pf00bjGKqJumIsj1BHFTrLzEsIrToExOThfP1aUnojIVJnHhxvOLO5ZqjSJKPATX044J8iFRH1eCihXlUzixjXeD3loww%2F4X33kOnt%2FLZkRbLuypaHO6jWDzZgPFVpZuN1C45iD1qvlnV6jjW8qU4tq7DWpFU8KCpm7%2BCQ3wPJyjDwxcK9BjqkAZ2o3gQje8APKAsr9kw95Ei2zzWflXIVeTheMLzmG7YLQ8Ghf464mx1PkkduF5rajuPRfYM%2B8GhSQdqZbIZNVIY4sxlRTHC0WcKi%2FqjPnnkTyXhPIqgKpEkaZ8XbMI%2F0Z%2BJZc%2BZCWrTcMhRUPph5hD7jlwXXRaA0CU64q8qsZyF3oKm43PbNTySdgOqu9Da5UbY94gvwPDGOwnk0hDgT%2B%2BOv2uhj&X-Amz-Signature=c5b09f2ce5a7dcc64cd56222fb99a3a0ddc8df441513a61667686e7a31a980ca&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622C7FL3L%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDy%2FeYwelgPr6s6l4haNU4JDP09XCuKPO5Bzd%2FcgevdqAIhAISCGowadSq%2BUpeOo3VUHK3cP%2BLBs017CgHDwLxYtbdDKv8DCEcQABoMNjM3NDIzMTgzODA1IgzGGtnLQRCScWVN7JMq3APm66OlXvfuhRVvX7PCP9gLQgN1e7Yb%2F49d%2BahQRw18kNRsdC4uSeOvctKdKgRJPO4IBBYYGGp7TaxYtOoZXgOwVYVjwqt7%2Fl5vUfSn9CCCmeu9hV1KEye5IKZ9l43k5Nbv3NqXgDwslpsGR5pmAeEfCrPufk6L6U8wQBB9zpTQ%2B6Xs9Yxz0osmo93%2B3pUqYbh265F%2FMbTQSRJkoeVovrkq5eaNhjFOzfI2%2Bq5qepzW9xQN03SoIlvRu1WOV0ZyZDeKK305Ex5qP1d6yqLe%2BRGdvBtCq6Nw5WFALl8CiA%2FQaCS5vpOCiiocj3Ntz4SmzhfgRFUvt%2B2MPKreSc0A2M%2BCcmTfY9VCVSg8lGuWexXKR8YAX3wnvofeMTSd%2FKRnutP2Xza%2F%2BTjXfjPm4yBnVOsi%2F86GJTz4TIfdMIWT3LlMN3IQdDlIrLZQMWvWayECYLUUz5YKvBppbyCXE65DN8Yk8iv%2Fn9f37VhnpzOUNrfxSVPjhATPzkmY05zfZBkeH8fp6qsmww6uD5KLQD%2FE8IKh6pXdgwv0FL%2B9EQJ%2FRLaNPp987vAuBhgYqotoi1TFbTqgeDOWHk5AGi4a6o7dBrcBHXm%2FML23GKUxOJSlhuhhuggClNeoJFDmjkBdiTCzxsK9BjqkAUkvzMo5M2OOE%2BO9aX1v0jLKUj68o9aMGfmlziZSB75%2F1LtbUMBBnjQaSLFLXgV%2B%2FyYtC76VeDgfa2C0MPMbVJOriQP3YOLCZvCo%2BCybHXmWb7%2BTIzKsVpjAYCusI2nhGBEcU24ZIihSQ34pNUFNaaPTJQs00QiIQVsO9gu%2BNhCHyUjK67iTVhd5moZAfM92a2NOdC9NFs1M7F7t%2BVz%2BBFMxHmCa&X-Amz-Signature=e7a63cfb044d57b49e75638f968382608f4c75859067313af7d0dbe59953c4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
