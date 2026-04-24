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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIIXOF3%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRy3h4V8bE7lvKZf9GDKYoG1mJbGGT7YzuCYex4IScjQIgV7VsHg4lo6P09Y5cNS3jaIj7vJqMYRrmUD4grdssEWMq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOlyvqPibDRvrnOdqCrcA82qKmSrcDT0P6KnN8dIR2Za5HiUNxovE%2B%2FMUQKIzV8kh4XTRtJw65tIj1offN5VeZWP1uDWbzkMLP77KXKwMTPflM56RKxnnVaGYBE%2BpV3M%2BAM7qjqe%2FLvoYBRS77NqC1HsRkuFf%2Fvpo4ZJtVWf%2BmiDK52xLoouz4xhfBJShpB%2BT1n2XLaqE0aHP10QOZdJ3huyuigGmeBce7vfF%2Fg%2BTCDxVTIMtVWHMkOTYK9SZTxnMNAKSEJlTR5bdYzO%2FT%2F7yYJgR5KTEJc8Alo9DxlKwjV3r4QCzxmvTuqVq49zs%2Bu%2FcyTM%2BnAjNXrZZu4YnkrBPwQRXArojPzjEqdMy2myqrKLwxF%2BlzzceZBQT9nHjwxgHjVdp3AzXuSEh8wADv8HecnIF7iG7g2sFBT7wfIWFvqjV5J%2FLNoHmj9NrNa1gyLlR2dtpPKprv6479MP3IvUBGM67S1pzx1igLviRHX%2BhVUiWgM5sEHB9rxK213EXR4MEwGoe5FV6eGIWLK1emwzYT03e3IjIwXYowcpUYcPwuSobK6hrBaku6inmxeC0novjnZVZ4PLHelIlRZZbGS1k0eyIpd8SM4kzhg%2Bx76TyFGuCfNoZ2qd59%2FLq6Yi%2FuxiHHnxeZqjpBlCxfflMKGLqs8GOqUBbLnqt3dtMTFDSap%2BhYQp%2BFgLRP7pVchFPoOCn8GVwpfnurSqtII48CJE09rHDnR2d4B%2B0PjjuPWHKBwvq5KWOekEFWqKjtB2gcumHoI9Kf1buQZ%2FCIBZpGuf0IHHDMnbc9GqE7QwlbL%2FqAcqyXAPlrXSrhcJOMURsGOAJZCwibDBUWAypB1oM%2BgLiXZeDjEgfxIh4FbqFtQH%2FsXUaK8mjzOPHyVo&X-Amz-Signature=6720dc5aa4bb91e6cada6793733f9475bef85ddbecf9284290baa85bdc78cb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
