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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5OLAMJ3%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHaDUgOkDV%2FhwG39oL0z8fP6DORYHVlCvWGYJZIzTu0LAiEAusC%2BVbEx0eGmI%2B%2BNtdz4LNjRsqsgzKKYLu7p5rvmb2QqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzA1s%2FrkPi7m2Zn9CrcA9vBG7s5OYEfJOp76V22I2zVfh%2Brx01%2F%2BtQjTIIOrCbH5wND%2FhH1z%2FMlLb5gkiweieLEmIEtsK7vc0ULV%2FViCCPvzNCJQ41w5s6onWJjb7fr3IZj9u8gIjAbKy%2B9CIOYnj%2BoiNwFA1H%2FfuqRnngU0nH2pCiGiWIiq6hwFP1YCsfvsTJx2Lv%2FdDuUzz2nafQbiLSdMK0dxMPpieC1Qte0WNzb3xYcQMaXUUVyWxjz7Yp7DwrjueccE%2BWQxRZ65KelzVOX06Mz2eG1kjhkrGcmz8gWpSgRBMBEYeQo7c92XKNqNswNDZAiuvWiYtd1mLp9wUHyszKSPg88LZVE2rCEwqG9%2Ft%2FjFP1LkUSZcSF6luGaJArptWYEF7lO2xeh8O2OZ1IzdMiMAU5hDu196aTZBCA7emSs4kJgm5OIkLWgwwOAluT1Ae1cw0SyopgYNtysamdqNp2stOZmTmqnxnfcrESuNgl3dCUTWoUwyYJLiTgtsV14tFq5DUVAWYF993H50Af%2BbEwYtsnPC1q2OIGrUB87cxLaX3yMGEhr9uOt2QSmUt1IKavYIqsMTOBptuvaQIZE1wav3bepiOq9WpAMX1EJ%2Fc43w7iUN8e0KqPsCd%2BAhzvh0wjgrpsKX69KMKuGqdQGOqUB3jQONwLDGupB%2BZW2QIeznlqMXmBjoOj81%2BWZfNcz92lriS5pBqeeM%2BWXun2SSqSaUJ8X2f9Jlz60B0szxqFytakQw2pCfIQa6OWQasx42NT4FAJcWpTAHX1uVa8ETSWeSaVc7qJh4WfYT%2BXQLNoKDmVwjWD%2FPlfDYaGcrwPPPhLMpP60ZcfZQZWV1nOHlJV9l7t2rpf3%2BXPCvkBiqEGvChkFR%2Bbn&X-Amz-Signature=933dedb46a2c480dd5a39eaf32a3abf868cf03a319eff625686bfd147ec2a00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
