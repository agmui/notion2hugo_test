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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UENYHPAB%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbgVPeB3RnEe8j5HXOiwtJlEb2oJ1r%2BzoA%2B%2F9NxXiZhAiBQW694rJZSX0vhEcAKF6XoOTKBIHgYEMrS5J1uHxsEASqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0KUeMT8xLXRmcxWgKtwDzqAJ8c2beq1kIammmjVLYMiRvpzoY%2BFkRCneKXft9EOa%2BKrmRLR3AZpsxoJ%2BtlF8SmxpUNGzXYiujTHMvyV6Rvp22xgH9qX3HkfU83GfqKhinZZddywIH2oWA1JwSSle5NEyRNV7FRN1gAEaxzEBpPIJwH77DZ7zwrj2oXQqlTr88cD%2FSS%2FZV8Jxpr2UzXZJh6PIm3h1SZMbVWzHkOTstoHdi0xolK3n%2BhYnLWxm27f4jwGLNDtMvOPh6YulAgeQU2gMatUZzjF4KZL%2FRA%2FEqS1TIxcMGBzQ3WItR5QIJL8Qk3vKoHPrB4T8FOLeWpBYdVBoROAicCBLYijxZlOtJBUyVBjL%2FNz%2BgODmPKjrKhlNBIS9xic%2BzllReV1EVnedTxRo8cm7P81DbOL3P3AKTUmkWJhOHXvaPloGosmKU43LxOQ2FVcCiIzrle5BMPlluqikp8IORlqGq2EzkDMexskKDuJzDZffZfvlSed6ZmWRfT2n7z%2F2r%2FWOtYh190d92UIsXTrYmcQL7Ku8V962VEJtHh2nUzEDyHxgu6iyUtiPws0IKo26E%2F5OMQiE2v4LRcBleo6nys4rWTWm3FYKIdNKXq7eJEb0twjQKV71CysqLN%2FMkJqVHRdH%2Ffkw9JDYzQY6pgFKvfL3dhh1RTxuGzp8zN8jyPVtU9qxraVtB99GefwDjhiVnwwLxsjWWN5sIv%2Fb%2BgchjVLsaUkqBVSDIAKRqkwIUxXtyfJZTtWvD%2BVRgY3qEbDQyEOrfUBYmcURA4rgxpeaUJeDp%2BoF2PTu4Hq08X9bjMhHXlpmRnjJSUZnZHFy5MW21rjhtXgSZm5P6Y2hfGMlnLsIgJJmiRQflCelvOSc7UC2YfAO&X-Amz-Signature=82d0accf54205196457843b74f5fa042a95fc83d98bd1a1de96782830aa00c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
