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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LG2O5AL%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXX1zuioBVDSRsg4rfIjrPJEXli18Ut0r5Jp5tMlfx0AiEA2wuWza5f7al%2FO8n%2FfYrrwusuBf7m1wZH6wiY5XP5K9MqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHos7m3X5Tk7KLu%2ByrcA3ZxJd%2FkHPy9c0kv1kWpXIHOmuYw4JDYypvMgCa7WnjRkiMlG3o6wzycdLbmoz7OSAZLJO%2Bs2Brl4D7C1Rg9sA2NC7Wh0yXHnf506kKuRId8xsTsytSDvj9pFHEpf%2BZOw9Qg9vQPi1VJVd%2FKIOYMqyuoAjszRfXn8IIArbZwMZJUegu4sH8byVC0XQDDlgA00%2Frlhpl3x%2BLtiaoX7MikApI9quyHKj11Tt64X5veHKTxqwXcOmXVo8Uv%2F5ybycB4C69%2FaXAzzWqGBWqhxMCQILFnf8zpwV6Hvynim7RxSsXR0EusNVEKPxHI%2BvRJQOVkaWAND%2F%2FO8ksihRYClZi09%2BU8OHg9VY4yPtGfXZkPWPIE8%2BzyQWpzVaPNfiEjZ%2FQ3Xc1ZM2lQuvMp53ShElaxQgxHgb9Ij6HFhlvBzkfD1ak%2FbuWF9k4NTk4ilQnz1VYIrWr5ICuyAwj8uVJsNABkHM%2FAEpmFrAAVq%2BHll%2FshTTAy4CqIQgnIWezj8nr0ze0QCAUFy8%2BfKQsolSLfFrXPw9PPGXEORCH3lvWvgoxMQT1RokniXkFRlda81mkooJaAMOmAvbXSyfw8kzfTTlQh0Pg%2Flz3fsVlg4WUxCrqsHhOknYruUdQSm9pEduMuMPXY8NIGOqUBOroApU4aYxev2DDF1ZrwBKar9JK2KatpJ%2FeZUvP9J3%2BbL9%2FXKg%2B%2FTH2s3pxm%2BD9wsSwFedq4ZeVo7GB8ySVpSD2aQEqard2dQpneuE9eBoVRFHaIlYx7IN%2BW5F8fsQKoV%2F2qkJyaSMfHvxQUjB6neQN3gecmqGzm270jz9082f3oOzvOYCtNvepm7L0FAe0%2BOBVb8LZpBzOOQI1kAi9JFLuWf8BL&X-Amz-Signature=1bfa933191d530b41ccd266a000dd8e195dd056a60960967541389960ccde3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
