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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SBCVDS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRezuu38umjHidFMYiFW9b3jiHw%2FibRnhQ6lzf6FKz7QIgZ573X5Il2S4cDD1PA%2FYaAbVEPnKbIZFO2PgcqEU9F5EqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdtNaoub1X8XeX0XyrcA2z1kSMtbkMmhvFsxiNVCIqiojwWdW2B%2F4ke7FRyhb1mzeVvKET10rtWDBu0h15iznuEX2czfOrcJnOabWHd9zo0SNEW1sE1V%2B84J2w%2BlxLLP7oW9YOaH9Ik96p5IJMuQhi2AlCFAQQZvUovmntuxQXmARbpC9HrCAyr3pzEnXWnhyIPvczpUWMJ6ZxR3g2XthLk7o1VSQw4THIaZJLO8oxgByrd1Y3yfibg8YcJ7qto4LH%2BgJ2Bl2qDz7y1Ev5PzwWn%2FwUc8OX8Pb7ZASV88un4Cs4u2U1XCEQjIpsOXs6wdZFNMfaCg0gSzN0d9qfkRJmiz46vF8oN8wl%2FfiaSwsjFDzL%2FkmXF7by74NDJdNHVR5u2Eq%2F3uoRhFhQM60P7tkrobpos3V%2F%2B2Mgp5yontVYLUeNveC2aZzGC7nXAP7Soj%2BaPdRZe9v4QgkwSisO6i67iOvPofrVggm%2Fv8t0jzSCMhicL5ghohvLqVMKR6yOH4iorl68TVHl8dZ0Zy%2F9TyO%2B3yT2MGTP9JcjremXtNQDqeObkHnbLsu4CW51n0GUHoge0osu5%2BsJqIT0Mrdz3OKVnXMql7RDEdIADYtHs1kQeuW0HVNE2DH4vj0Q1CtfN5Rwfuv16YwTebiGHMPiY78gGOqUBCrRZWmjipEahOlxwb0u3FLr5DQqJUaffv71wu8kG3skn5B6EX4xw491WpsRboLKvMnUf1eSsGtu5u0PnPa2Bf2OKa%2Fszbonbgn%2BBWcfy8bCqHd2%2BwW31dnN0pjwfxp0q%2B1k7Qn%2BpU8jOshZwvmDR74KZmovAl2w7b9zbePOZ9fleDiTcOGOTlH6PiXiGrelyuboPrknTkL6qoY%2FeJfSSJXdVG2eu&X-Amz-Signature=427d283969c9b365babb811a0ccc4caad064679c6a90aa2c25d40d68a6483ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
