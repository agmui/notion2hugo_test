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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VC7GDBI%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR%2BmQ7h7QSSxvYt5fl3qkim1ZkZLEbG%2FAdkf2hTg8OoAiEA79MajodjzIRPo%2Fk6JzM5wBsABp4mXQoZFK%2BoxymuXboqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFlIlE1Q%2FemnD7KwircA0pNM3Sf0eGl8h7fHh85lGioG1Fe0gupliqqfve6SfRgSJB1pgsf%2FDLc%2BcpgZ%2BcZldAEO7BLwCvx6qEXMzc2LfKiWdyvUHz%2BB0DOIWa8GibsLL9VrFZ0QiSM2psxsdXwqe88SV8YUwOyumRvMtzxXe5QWl0eXRLPimhlCnRbfMfSFRLVdfUNZx%2BGwBePUHiK0FzDxjh8rXZZcS7dY%2BYfkhCFW14vOCCvao9d3uLL6LZz%2B%2BqYQ8T47O4TJSDmjqVVWxyL4YM0o3Yj2V0qJg%2FlQxAKfgo02x8akl1DHXbpqIQms2DOq2mraezCakYC0oZxiCDdGQJ6p%2B7NCBhSxdfuDTZtnA6NNnQztR4W%2FJenHOX9wQc36GPNQWVUZQWXzgzLuYiJMUf0GvazmS%2FR%2BuQwU4Stbbpb6h2OjacCb2wCaMtbvbSkhsa%2Bktb84w19AdJWPUVWaFQlvBZy04pPiyCgg7Zub%2BA0D2jnTIhd5SWtHntTufu87MXnqs%2FUU1hOTUm7y3RSkrLtQyJZ5TXlmac9btCA9yVFlwmN0LHhlsAjxuSaVjJSn3ss9G6zmsU%2BniUcEqytbGF1ZB8ZEYKItSHNfLJM3Rvq9Hl942EWIVOQh%2FVx%2FwjPKbaU%2FOpe5%2BLvMKX1jM4GOqUBVfT58Oj8JggqnVt0bZH0G%2F4nGFFPg%2B9wwF9QnPssCV3XV3D4B2CtuW%2FIv0QeZLKHV1gISCMD6bJzE894Ftwh8f4KKBm3L%2Bf9vD%2FGQHpg3W5h77lfsURF2%2BhbPAs9hp16XtRmIqd%2Bo0SC7jd%2B3yhmI2nQmNR4EAltSEeweY%2BRAv%2BtxUVz2MbMnDZkh29tyl%2BhzJRoykVXVGpfOnz%2Bn7JDPVldnLEU&X-Amz-Signature=9d5d75f39785adc1541e83997292e190e46e88afeebe13ecbbfb50e6df469851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
