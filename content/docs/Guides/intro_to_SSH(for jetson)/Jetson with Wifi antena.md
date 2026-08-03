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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXGZSOOL%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDA622EBhzbIPIvh%2Fghr17Ki7%2FPOTvd%2Fp6vcsCtjOltawIhAInoE%2BdwEghkTs1KUhcP2leYe8afbULHf%2FeSFxKHVwmqKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUVImoakzdO6xprCQq3ANdkyjgrPmpCZpgeVo6NCL%2Fdv%2FQVNArl95hUArNpG%2BH9EuGIACzkMozO6eHGjAYQr6sE6AkoG1Eo40luON24iwBIUSCfzsORLPQizrDU9yMdx8vWU4S9OZFKT1rugU3oQpEkAZqiqof1X4DGlJOZd7MLNGaCSQzglCWovJ7BwHOfBBxZC1a5kB8nX9Uq%2B8ABytE%2Bnd7wKrxKtGxQwQMpfthI%2By7fe6r7yvh3SEM%2Bb%2BuZ9QGDoFjyY2ZKb7eIia%2Fo6eZweiHN82l1HlAYI8DbsLUM%2BEHxhMFjeftyulZBRVGxXdNtZeYAG0irqLTWWwk3%2B1RR6u5QpIKRNGAJDW0YVwUt%2FgaxckxEVSquj80LYOQP26NAnh2AkIG63YJ78xrpKjQE3lndmDbV%2FZ42Csx0IPaoMB98NqdIWmRMlpEb8itD285jAX5ppUVPU14zSW1mXKZp59ut5S%2FQy%2B7H9kyMQKotq54CZ%2FPQshSHrnzSO2UxgH4f0Q7wnuTK5rtok8OWX2PjdlR05FQ%2Fsm74isLZ9Uw4dQQNntc3eFTH2x2YUhpwoGUUvFO5k0bwgkzGdtaLeOtBVCyoPc1ojHBUsqvd%2BNfcnKJTuG0xzb1E%2BlWTSn3xV2pC7sIyRxotDm4WDDr57%2FTBjqkAfYekiLdsGpRiznnwKX2%2FEpum0Z3dLVJ4k7sYD2RVhYRvF6LrjROL81913ys4s%2B%2FD3K2w5k5KlY969dx%2BmR3%2Flr0gjL3yHJ%2FBW06wcSVQLAbGDAx%2FJNXDYPxTNslVE1n1%2FaY%2B4YJWyfrTf5plHAuoiKiEZUNqR57frhhVjthHVAX14FfCEN9etRO7CZMMtgvbD69%2BbgMlR21O0hzkeYy2rCxdGkJ&X-Amz-Signature=56ee7b2ae54fe5a6a043308f872eade20f4e7caa6e48a89feaeedb6c115f7891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
