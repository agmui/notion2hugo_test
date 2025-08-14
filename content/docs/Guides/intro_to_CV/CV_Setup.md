---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FEQ3B57%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIH%2BV2phDAnpBuKOcm5WVyEAlmrUG3ckIzZ1MW4a55PDgAiEA2DHN%2BFqaljS4giJVsgHIrTg7YQhFq56HrGB0gpvK0hIq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGILUY%2B1Y%2BEWozRD2yrcA7QCD3wvQJCWqWrx4%2BwMEErgjRC9826moBkryvOaMnFsIu8JXuVsbSO9%2BIr%2FG5qAYoDn1YERDAB5cgyrDanu9qSZrczVxt7acJ4Z7sLga7HVshN3VNABbBlbIHl0HfD%2FwAJj%2FLMPSFWz7lzjNJdCrUah3uD0D5bKRxAUfRpbf0BsojcJxYlBfbBBGHtE0wcyOdwKv1nNn3zh3M6lgLsedrM8YLo0hko4pX7LopTyQqMXSzDRPHztGsNaaKwU%2BKhloKHwLmYIfJ91vzxA1QHsxahvFka7Ihm7y83p%2BN5o3FtpN4TsYS30VkWXsM0eYLL1CccF5ulBZ56%2BeSa6R3Am8BMb1F4s2HDx5HPx1MEwxslxsgQbe3Uy1ZlI2VcknEBt7%2FhMq5UdHVcyjVHFdLumSfsaer1nf%2BknVeuUnSbDb%2F9l9pBPJ5SITxWegN5iWosMPRMq0cDwcCT3RFRK0prKEkfcNWwmw28tTVth%2BvqPkI9uOks1CXKC1WsEPQkiOxpKHI9ACaGZ5OrAec7Wv%2BOebyyl9ObJJB9u5lv32G6KsgvKdDcVxisp%2B96oPQjCQ0HaYp8oZJdBUVyR%2FrAAlCQOKFMuG42bi5i1rFGi9A8DzPxX5Hm8E%2FOqp2tiNnpTMPye%2BMQGOqUBFFrE7BWJ4q0qmEU8FTMBoviUSUPkQyVRtIo2JJa2B7AKOC7nErPfLITgDR6Ehjx4ApYjKFkIWcc%2F3iZFdOIFGClzvxY8lXg5vi8K%2FLaJQFRFlfBCoTSmzyUR7wA6xH0%2Fn5We%2B0ZqYyHEJWUosL1rhbWB51y%2BCPD%2B4vVpQCmyjeyAF7FfOBTl8mtKELzOnhZolDNGJwmONM9pgd7sqvV64ISyL%2Fk0&X-Amz-Signature=64d3f5a450d91054cf88eaeca709e49d4053994a846e92b00eaf036e919d29b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM67365V%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIHwzfj0WqiFeW%2FyHypNiMLRP7ygR9mOwmTqZdB8BiaAzAiBDBKoKxZ5k8BZjnTuhgwKAgmKPBLXuw6rMkmyCJh8TjSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM3X4mKanVs9APZTozKtwD81f%2BOjXSYscJkBRJzXtTqpLQzxFUnmKQqzFgZbDIuDxhaMM095BbZBA96TfPp%2BYv6ziof6OwIZNHXrVmXBV%2Br4HPfcNE%2BdDoPsJo0C9EYG6KNTD6qxhAv8XX3qi1Yux633DE2h4zygdBaregJ3mgJpxnD%2FLcuPyPxgqSnCIfc6XuS47O2om5A2oTlsE5l%2BJfHk%2F9tesVQ6IKqT5U6IL9PbDYtlcYQH7fvEizbH%2BohMsRWjrJ%2Ftk5eXa2ym%2BBbI3NTgoe2uWjzImlAlBgRCyvC3NCpMH2pZh51%2B%2FXs%2FET9ZeEcclNyCTXMn7RacBcQn6BS70p%2B8ReMLtry14XRjM4nHd9hqYecnErbZnFYBlp%2FL%2FzNhiReOEr2uqpxeS7lbHvgxLbcdMRl9QTjKgVZf3GBgY96mMJKMfzqV%2Bl9sBGX3AXbD14w8OPTXhHZq8zHP449qHd8zj1aBKdlP0xQzkHe53jTrarc300pk5iYwa2WWPWVCK7vLrDeEKsxK%2BhAwjaLoO2GBk8fLwG5naWAb%2Fcv%2FbkRCLvelTI7jZ80Kj9lVyqSNHgYRYiAM76f3IPgdZ8K3M6VMgooFHEdP8TgRZynm2KUHxKEjOswNQlqh9xXBhTtU4S0p1tTRnnxlwwqJ%2F4xAY6pgEfbnhRU2iJ%2FPwmhyrI5Dv8YlDza%2BBBx8nTcoMp4diPRAuoDsJFoRGBmOYInkUiE4I70o8zFSB6atrgZz11jKm1n6fvl0C7rHAPchQroVyW%2Bd52zQBZaiTjXc3r9wAenaO7RxdxZB0Pc5mOA6QKelxGi9jp%2Bo9qdugA8P9BGBMwAk6l6viOzIv0cp6hFxBROJmM2CoHa%2BjmaUU%2Bb7lle5XwK2njb4Sd&X-Amz-Signature=e0f3e7b549b66a15a26f50814bfac7dab1d82c728d03affc8f566b611285bbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
