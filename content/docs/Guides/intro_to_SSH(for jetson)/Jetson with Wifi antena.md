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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQJMFUZ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmAOv%2BV7WdrhpAhNUR4O869S2etttm6xJN%2FGOq30IYkAiBotsx0rwtU4%2Bxl8vKce3uvuY8hf2kCcPBEhpxev8%2BLhiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHfwQvbNUdBZFVM0KtwDMyr4JGA6fglTA6M80i67TqHi8JV1GrbPF%2FYmeENmsQBXWJnAxviNRnzkjMINT39ngteKxrsicTgodeg98%2BHcK4D7M1438t47SKAZPfVAck7zj8xmGy1ORr8Ofpi2gEdS6ZHTl5r5twuKryGKLlC2pAtGpAWUbDoqi2KPGyUZ6BH2cv33E8G9w12%2BHlDhWJW0zitEUYCTOSpSsBmq%2Bsr25Z0YQKdfWSlSN81bBSJrCtRcTF0mlKiMDWGbtK35YA4EpPwcZX9F%2BDaSntFEZUiDQBgpDW%2FKY9zhI3Cgr3MI%2Bt5lStkgrdJfSl9%2BulKTBMUIktp73MJmGUAgbdBD5L8I0ShV2jau1uU3IgrzCcDsTvuZRSQlm5QubmDvQj6YXZ1nxi9Uxu9imb2wvpw9%2BT3FnWFWDEKmBTlLyWFyHUTh%2B4KMEyyDUXa124P5%2Fg8kuNl7jSNch18bL72RlL2HdFpFLHe8OC0GJFKXZKk7nsXo5FqYRH%2B1I0aGH3YyZsrVPCWWxUIiWOWhRDwOdCW3lsiH7L69o9T314LseusRcM%2BsIQQoORBP2%2FryPewLgkJG66wD1O7%2FW%2BE%2B0eNVjGIvHqwnZIgGU%2BK0iBgMBU1NWVcZLrI83apZ4DRDGNSxQ9Yw66%2F1xwY6pgF0CZ3mCKLjnvXBfuIlgrRdL629uHrRkgVcHuIVjRVW3U8IyLFxyzaCt4D2%2FkUpzRLKZ%2BUyFLrUn2AmMX3z2dqZUyxfkpHCGuCFDkU7%2Bx%2B7xRrM4kZrS%2BtDlynwxxy8f2w96DgULEICRWgrGDDUzHo1EkyKvl870bsG654UB55JlLn9lhfhjM2vVqeqjWfV8tuQyBjUxPVHz4yQwV2X8E22mkDv9Wkg&X-Amz-Signature=0f507a18384c32a8f5a4bc9464c498f9d99393b1d713d54f248f5d09990c4f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
