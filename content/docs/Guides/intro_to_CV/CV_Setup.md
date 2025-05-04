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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2NAKXGK%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDSBi51ydTg7VzlzgK8C4U9QHuL8uXSxrH%2Fl4GrfO2u3wIhAPscrdg4isKCOcB8if%2BsZI1zkCTgRC8MVTmxEH5TeFzCKv8DCBgQABoMNjM3NDIzMTgzODA1Igxn1en7IjHWSdwSmc0q3AMIsO1lUgBzvcEkVpEsm5JF0L8Z7g7%2B%2F3NYkTL1gQ5a3FIC47%2Fbj3Eqex7QvN6yUPKmvfzUs%2FhcDuJ63J7sc910haC3JmE9OylrkNiE4yvBRbJZFU%2Fpcqm4S6kbbR2plq5CTDvn6XZYNNhROxvGwTd1YcR7%2B89oP1JWli4h5yVmztnVDQJ%2Fz4uUhIaXscNjSpKDuZ%2FkYzQBXNUJ22qYWWsK7UmvBgqkLqBp7KGGZr69Ip%2BfNqg%2BCeSKvi2mX15lu9lPFyw6Cc7t4ZtNDCxPnCa8g%2BNHcUNF2f3j1oFbLkGqFMrU3YaOFTI4W%2F%2BPe%2Fhrl1P3hzSgOZ3CewR1PyVSsDeAFAm%2FvYrCCLcYk7a7qSdmKbYWw2Dnxf0QpoCffHIRU0z14ZzJDFz6d96mIeoM5ebDeCqn6wh%2FLmoij%2FInhNDRJwzWcS7egyTHUrhJX3WuQ09cqUIC9XUuw6ttFriZlTP3lPy5nRNFWg3Es4mxKH5jvb3INJ6xGjtqnLaX8r43d0R%2B8oBWPYImOGrKZzz9G4bCn3rIsTTSJILxBN8%2BLvveootwxNyO5eneeISEjm1b3yFDsY9xmzBUFuc1OAxhD0ZPWRmvh7zCWH45b1%2Fvkyci3H3c3o0wj97WlCe8ATCeiN7ABjqkATsZW0v6EQ0801np4lEqdEHF47qx0nFbI0Ww1FwLneYG4saHP1Mkx42LiUDeiKHK%2BTrsFbe9H6J1465JjV3KhslU3%2FRVquLmHP%2FGxQAwoS7qisNG%2Bh%2Bn4OhkdifbfX%2Fhy3cvDPRnbaTvlM2bMaAnPk8DJTQE2%2FyWw34JsNPDaexWUfudyENw%2Bd7qDxSYSBg07qeuU9AidTg3cffuCYSEZ%2FqGgVKk&X-Amz-Signature=8dbd726dadeeb9d2595894692860dad3faa4e0e8f17a762f190cc680ddf198fc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWEFZOZP%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCmAb5JXgGNyB%2FLKXfvGMtgR5YdNTCunt6h3rX814fpNAIgefYqu4keggpgCwEJk65Thq%2Bmollyu9NpCWTIM1NQTVMq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDHd3u9fjshIHnYQFyyrcAz6DejPZ7ZX2b%2BxiIiH0Vj0sDSWS7yAAqtsn7qBtAgb34sIlIheKvh9FCVjIy0J5Mzq0d0BmgD%2FIO%2BhR22Et2pvQbjLx8oRNNF%2Fy2mxT9srXpfK0iBoGxqK1C3ut%2B2TbKxSgLKBkhC4wEv3qxeRGhcMtt%2FSE0tZcvl5084NGL4dbK%2BYrjY0tmpRnfSZBvqTvslmNa2tV%2BLO%2FsLwcFx6U84EHsq86kFQjMBeJ4Tnku7AEWRGGjRCGUFR9GVjtHUSU5%2BmtAIydq%2BY54lPxpwjEHg33CYb9juTaAmCXgYNPFDUmvU7iCcYgKLW5atmvZYKcdO%2FlY2S3OskZupGOU6yz%2FaAJGHtMA8xgbOialNuAbvgKMEq2kUhGHr3E8%2F1BgWZmsw2p7yWSjwhzBypMw64mIPvo3J2zlMz%2Fv7tog1N9dGPmI5InwK%2BZVdK%2BUdTzwX9%2B3YtQQuGBnOrilW67Hq0M9panWo83IgrOR9mJfIg5JrCoQMwG%2F04gVUHU6yVjqlMyGDFqmGiq41mrvtLME%2FcvClke%2BqHZ7dCpn05oMQaIi6YpfMdZPrmoGU0LP4zuirCZP9qd5LREraSmvwqJ7Q59NHKfbArt9jekJ29nWPjoU0vYQJMENx5wlDxgjmcAMLiI3sAGOqUBoDqTAaWDLaj3ttBz89DLbZR2aaMmb%2BZ%2B7vCSNuvVr6b6w3A8n%2BG630Yw6Ne2fusCT%2FyKBTVtA4bpiR3BX3XKuHrUOF%2FKy7l%2BkY0tYdIoBXbSY35EyU086R0IY%2Bez5sV3VcqBvBADnIX6nMpO85C479b6SK4LXoT3masAywxWSSMC9YRjUNA0HaXryv1L7uZbzyDoycqCApZ3TGjXGN7levN%2FlBnK&X-Amz-Signature=542f6c3785751117dfaa36a1e6871998932b49aebeb98d170d1883ecc05f48be&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
