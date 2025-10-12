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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG5TTYY%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD0pGS5m2Xj7LQU%2F679tYCd6m%2BHSctfxeNNBi0tomIkDAIhANj0ipHY%2Fp9jFKSgbWJ9YQJOikGqxrahu%2BK97sCGgNdvKv8DCCAQABoMNjM3NDIzMTgzODA1IgyfxADJovUhIYp5vWkq3AOMbccGT5535QOQqM22yJck8ljTWD9ki9yrSbA0rFK5oPqlcdcHqN%2B6p2E00E6%2B9V7ZRXzfO4fSfrEFkeK4kl71AZ5CbITErtCTzbu%2BB9A7RkTOSyaWpGBa%2FF8n9E8o%2FJDl%2F02cHlg%2B%2BAwHA%2BujrGc1Fmw3zhfDWeFkqdKFUIKXYrjFzrwGl%2FD8NvchCtoQK3xu9os5Amb4QOx6OUy8zJqq9%2F9%2FM3NCG0ngJ2qkeRV82UrLvc67Zkc83ixCk84ZgX7Es%2FRInRzSd3ethbhHopOWdfwNOQYup%2FD8C9zWd12MbN%2BIM3KYC0UEWdAvMQCf%2BwkiB1jqiG5JEQpGdPhSccUlVmYEBARir4IVKKwKdVb%2FYuO8EXHXxLZHVem0nZO%2BFu1rmqOyGgRnDCf8DZdyt5jvPHoyQz7CG%2Fx0xumkDtilo98lcGiuSFsXVF7FO3HaWaNwFznTuXmR1phu7kO8LAyUuXBgJm58q6z2o%2FU1jj1ojNCe8klQ3dAd7HeUuY%2B3beFfu0rTM15%2BHuw4Sq0Db98b1LrMlueYV2AHqkJ2bJ7FjvJpMFTCD762RQGgHxuyYkzK4tI%2BnQFSY5Z0ZOYs2aVHgTM0R9dOxU39Qto1wUNPPbi6ivwOpUE%2FE7MY9jCOuavHBjqkAdPGb9QiScPROo0Sdzv1fIRS2Ziz0vD2Y1aFtTT3GdHDiLsjakh5gW00cj%2FfXeLi%2FEt5TCfQe0piV8cZyAMm2AJKhqUnh%2F6VwYGu7%2FPKieplTkMOItvd%2FlBEL46RGoCMk2ORwLfIJXZFHTbusJaAp%2FrjmozY8YvpHHHOVZlUSZ37z6T%2FKCz2ngKPVGx2d%2F1NMBuf%2BFB1H4ND2BFX%2BXRip8iSf7UG&X-Amz-Signature=f239437779d62bb6378c94b1422ea4d541d4c924d67e505f62cda29061a8b8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
