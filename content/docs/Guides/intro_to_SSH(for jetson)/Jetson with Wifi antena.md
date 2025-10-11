---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LLIPXQ6%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHlt64jJahH3eBplVTBl6x3IDY50qOQ0Y9%2B4WxM1Tt2rAiB8qvar9Ek2Lwwz%2BG1w0lwdNmJV47GSocABf23qUbqPjiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgrjJe0luul9aSd8xKtwD5l%2FLRTKaEcPJAoNrKiz5njgw46GGJIMiXfFVEeKJLs1uoOgn7jDNIGZGcxrY7Ti%2F%2FCCSqUekDg7xjhPphVnDPS5C0Eg%2FSKJ461hE5ROGZ0TWvNksU2cQIDiQkCIA1thTYuPIkdH5rbkSofOUx24%2BMT7ZsOE1smtT%2Fv%2FIKTAGDB811GW0u8uAKw5AWq%2F1iNN13qmnGiNvj2U%2FuXrEwKUHzqXk%2Bwwe3nxfbonrXauaxGVOVLUcrhZLo%2F0B2XNmBIASRSx4J%2BnQ2y6gtlmh4ILuB0xYwcwxS7jzlLdzEIn29Et5DMz2FMWSCsoQp0MB5%2BbHqyIi%2F%2FQIKJedDe7F70Yqo1qhN47beDY9CvlyAm2sSfSqHq5jf1urWzxJOHuJI2FfaJ22LvtRtZhgy7TnJEZfXtgelp%2Feg%2BKTdbUJY8fLDYvEgsF8ByWB23nQcEt7oW3woVquOeK7zGzwLzjshrAbYN3Pax4svCdRXHyrG4699QcKdBII3V3jWKm%2BuX11isJhx240KWMxxaNYcCRt2l1m77bHDXj%2BvehniZzUNGJKQug%2F4fdl5St7roBuQEQzMNfoV4J9eOafGOssYgU584zGIwR4GKc01tg3GVDzyVVGAoL1fKIZEznj4xZfneswvdemxwY6pgFOCO2IJayIMFa6iW6durHdy8g5ATLDopBAOZ5vA%2F8tmdiL3PtFKuufsncLRcASh05YWY1n04MaK0DPeJP978yNWFYsTePtNep07HDHw%2FvGSBZSZuG7tAKQH7JgN4KoxoPuoJEoY8mCFPsJ5lHsrRMlFZqwvS3gXBFs5gB0eJNqN%2BsHKLE%2FQfpe2ima2LTu8GMfbYnSmsUWMJLBjf3lGcpPaDBVl%2BM%2F&X-Amz-Signature=aa448273e6fecab0583bdab12435e0379887862bf7030de1fcb7c9e18b89ab00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
