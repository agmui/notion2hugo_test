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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6QYLJW%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDyOsmxDmyEoToZTZXPxu6B9sxOWSVu2xX07xqWwG379AiBGjcr3OXUp%2FB5JChgfTEw8YJzrSTuYcQkaP1d%2FghQOjyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMIr%2FdfaXcdESSsmiHKtwDwnWYOdBX9wNFsMF8R%2BBGHp2A%2B3DilI%2FQTDV7QhxG7P3RJJYosR5zh8z8EPz2HVxAXP9D4z6Zc0eHgSpiRZ%2BkJ7nHbyeV1x51xG9Ro%2BdbjVN6qj1NKNq6pM01l7YB2gwol4%2FGyC2VI%2FnE2VYjkxNYVHNQngINHQQOp5xqxu2psEM%2FGB8GIHNgUhg4%2BOsu0YvgXEmtYl%2BnSWy1ht97o4BQKYkYfmjAKd5evCRWwy4MYqCMymO2EIG%2BdXaUx70acSfdOf%2B1Y1JDDdEQaFvjs1N7JF9i7FBb15VavKhwKFfUi5zOWRCyZdoY4%2F87JIV7oCXASuu7x%2FXP1zjYF43Lm6f0yVKxCQRHpN0Apmx%2FCtd4DrU8SZN1l6mlk406iQSGP15udZHr1bHNdZtKY5G8f9C8kHfZ8%2FcqcW5Ni26iBgZHBBN532pjV6XLIp65eNBVbDRJxSd11GVT%2BKI0wGZtFY3ihnA6fEhZZW93nUxopkxLMxwbDmgj%2BBoxbGQlMsesjRLQViKaJ5YVRtYTy7CsSeMUBRR4rYAr3BYBCVWtJlPLICqKerfk1PKbPqj3BZW82FWxCFDEv8Mk9Y%2FvwWBALQ1yGnoqDUUjAHpqIBO%2FZk1qdFVeEV9D7KZ%2BTha76JEwtdfazwY6pgEVX2xMjfhxBmkBHJ%2F4uey%2F3DHO514Qbswkf0HpOS5YDVm3%2FutBTLbOn6YXu7zQr0ehs4y4%2F9mXj3lk5XVwipxwfZObJVZJv%2BbbC2Sw1md1KgoI%2F0rJnimNQjVmo%2BNHf9frxugZLpBdbzF8kq0p3XNdkIicgFT2X7n5g3aBpx3hDA8dMPj1fJa6cVQNuEsI3iIU5Ua3oTa5EGAqRYJe0fXRihP1m5hu&X-Amz-Signature=29d7a1074f14898ddd3963fdd58f18b919362c17cb6e93b74c8b49b855907fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
