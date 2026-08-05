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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVIZIWTD%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDafvaDc5XOgyH2a8V3LgVMSaPdL5gMcEVSiMW22Uz6lAiEA3tfQ4dKyiV%2FA6IjqJR%2FtC%2B4GjCpLZVRNrbYqax09NZAq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFQcAc2iFr5MFXf%2FTCrcA%2FjLU6FXsWTJVyVSLiR1w8FEndir%2FglPI7lEal9lwF6waB92%2Bz9ZbXSafh%2Bza8QMCzcK8Fx4xm2o8tZkMDtqjlJumq2STeGKZq1mEdk%2FV1Ob%2FlYQgnqQhqiszmJ65n37t4224p6b81hKA0XfGBhqoRmwD4VQY%2BARtI6NCctQdo6z5J%2BOo3sT7%2BtEoOdMDEEvgekltkVOXVl8O6adYv16gmhF9X2Y9fkAOvG70xq3GJVRAaDGPCUL%2FeYbRFmwPHzx36InDMhGNWkYJLOwAbCiCvC1u2ci9PPQGsuqxvvxLSYThUOLlvHzTE5BsaMQJoU7nGdwRdwuZ7hRtGpXc3PAsCUdekMCLshQeWtswnhoVNBXyk3BTWOd56IG6Dka5RVenr7ZLN%2Br%2F2yKYPtO9idWHJLeUoypa4peczVlSnr8Kg1Ak1NLAqXVzNmpy1i9yGB%2Feq9uI0wPjnmxm8r%2FtZpOVJ0NXrP2LkfhZC%2B8UDP9rVeGKdEmyoKnq7S0tszBvFWB5wqj%2BGIXbR%2Fe7u0qfBpELfuZWsvqr2ara%2Bfv%2B2sMO7Z%2FBf7fhDaCwR19pbgJo%2FUVbh4qDbY1qB0oqXiqPqTqwGZ1t68fxvTfwgoOMdD4Dw8S%2FCDkOWYvF1qswUX%2FMOyUytMGOqUBqJ7rScKAKhMl2x%2FfgULGYgfGyAkX9JLBKktVZRjSBtcufMEMJmWdq2ehtxkwDNRbh1rSbadFRUjOMg08onSl%2Bju4ZKw0zBJRHDwgU3ncSGrENIjI6oqz%2BTizAy%2Bg3SdoVyUhqGC9XuFhl7G9u1hf63CSrfA6jKw%2FkxiSHHOEZ2QIAL3azn2qUSYbDX%2Bap%2BkakDDhBwhhizRjCJdRjTF22XKCCR3m&X-Amz-Signature=e1efaaaecaa30ee586503593d2a7a163bb205890984941c062a4a72e68fd98c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
