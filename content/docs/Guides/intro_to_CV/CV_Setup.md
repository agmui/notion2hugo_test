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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYULVXDA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoyl1CuuGFw%2FDerkcj0BPQfWmlK18fon9YcPtUl68ptQIgDoqEPn41rOubS9xZ3KWVhJf70nezEA7ZYhYYVvxdyLMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHto2pL7OnszdtngcircA6yhHlqz%2BKtyjQmfXd0enhXIFXsNwiYvvZEaKMaq%2FZmnoHpoMfxsalqPpFBU%2FvY8TOKylHCBloHmIa0sh1jCLIvHUC5SnIJge1hHFUk6Wc7CR0sZxr6UqxHXx61csJ2GzcreFru54MyuRQrpuVeLRHKTMlWNHnzOnKm6raaMY0virHh%2Fu6kk91G2fxIafg6WSWZKD9%2FOgD0G93kuKw%2F5eSUp35EaRMPD6B5S3kzDcWB1PuaJgxuAG5PU9libf7drW%2BgiLC4b76rf37aOG2l3XNGBDW%2Bf14RncMQ7LKkkwOq0ChXaeX1vMBcjVXpL0KvOn5kb5KlGl8%2Bu%2FZUgSmzc5HbfTWHrJbEqhuZz45KVmD1NY6JrEoF7xtiMxZ8Es3oIlGMhZa1dbLwDeU6Fo6OLcJkLFYDPRGfn6DyUFRad%2BqXZty6eHTA3cMBjJe5KHQKn0QJGY2itiCFh1D2N3sPrc6zs6nU9t%2BMQy3VdwUbyuNJTuTcfpaWug2TH6LQz1mLW4Giwfldy397WVY3%2BygECO4FeG9%2FaMlBbDE6IAPnTzYZIXeeO5OOciwHzbi2ZM8kUDMAqou15FkNp4OlsMLlGnn4VX1qqKuPgrAAQGO6yAe9TzQAau890dYlQaJW1MND3tcQGOqUBMcsIcuNP%2B0rPAl8PxB9hzMLNZ8w1Ir0KUvK0%2FmTbOz1MR%2FrbH%2F38SfPXPX61cbW7q3Kbr4QnLgvnjcqPdALfLtVFYsdHXapiPeQyfPwaY7ErrJ4jEnQ8lT19SLxOG5x8dAIMWeGB81phInx1VpyNTTsFyUrKOq%2B2pt%2F1yNvxDuJS0fpLQHQzPznPc9atPcfcqu7yS2BMh5qnF63FYlla%2FR8Y8Mtm&X-Amz-Signature=d303dd651ef6547ecb4a5ca485baa4e3e6c966ee351303685d5f11d3b2b94c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNLTAOAS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtOo9MNWsvgRGZk4TMzMdmE1LZUPG9G2%2Fwj%2BSogYDf3AiEA4IMkmrVImHbzEjRcsuHfXATr5d0UkOJiuHIlNugMiXoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOo%2FdpUbd1G0pL0FMircA4NyA4Kya65GN4PM5U5%2FK%2FLFsiEfJfOxrbUF4bi7C5bFVYxAgXXKbOeCXu7Zr4CAMPtCSot%2FGYV%2BH8hDZPXiRMZViGuJgih8JseB%2BbxviCNzuc1Gr2boUdmRyQIcrEk%2FW0%2BBnQvMGYWd2jr3l1UuM9GwMa9EsNdUYuLG0WFlfvYeR6o9t4rzPPGuljMEpkmC2dHkaU1vRvvFRrbyOPZYFXlADSd%2F0AQk20gyDt47lxA5hhFuw1wQzINL0u%2Fbl3Kt2NT65pkB0%2FVpJAK6N7s2tfdkQsp1DzPZawaWRmDqQVjZ4%2Fpxkpv5ncC%2BwXyhmjvZ4x9j4iEWvd%2BDyDlmjf61LxGGMQ4DLT3HzSKP6Xzo2hX2aKby04rSpbGZ%2Fs%2FMTTJ56%2FP0avUNwYdjonPYjkMqix24xcPz8MeMKBrEnLzBFXrcFWiRFu8R8EgTYoqzq5ZNlHdVK2vBuiGR%2BINiFg5Aju1fbdiysWbE5X0kZMvDZZk1v3xyAQp5CI1pfCuHHLdFXHaNfm%2BE92kpywCVPgU1s8qTSWu08%2FhURUwngawE85wvTp8c87AqwWX%2FW5EBAmF8S0PB%2BskKF4uNmidbtQPu3RLZuLOHa57DYQIHSqi7zmTF4PTE%2Ff2PU2i3pwr0MJv3tcQGOqUBhI%2FtK%2FUllx3UTacY%2BkvSNzCgGfUqCLTQ%2FQxOj35MHYjgu%2FtsFqLfos50oEAev3VTrT9O40oPyjuwusKgYZizMKZu5rxZfz%2Bl7K5qh8vnCfltShN9pg698p91K17N1F765DDCGh702P0hvhdgIQZcpOmPAOaXpZBiwEXiwGudqjSrCZVJ5rPXcCRTbo3Djn7XlhN%2Bumkz592Oi70wwRC7g9XcL72Q&X-Amz-Signature=2d166ded14513c5e656ef34e602617a63a4e6dd18ea622466f0654af0386273c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
