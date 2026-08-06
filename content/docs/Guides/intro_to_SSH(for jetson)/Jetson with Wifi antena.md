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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWAAN2JT%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDjEsNpZrZEF5gzjmFL6YW%2FJpxw3cf9xH%2F8kFtgII5MbQIhAPa8GNWEZJvS%2FhATfX4XuFXBlBDw77att9%2BIZVWKrAw9Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyX5okAtr8n1b3aZqkq3AMev6zO5xop1gdg3xY9U0VxrGtsHSx8otcxOFw3sQzq0ozchFqW7Hdscxs%2F4TbRf%2FGSdZZmEOGPpV07nOcnoQ7uG2YmwpSS7vw9yqKtenXewXhl6wTOcSZDsebzwHLXoQjvmGoCJqELX5UnJHdx8hNcyRx%2FS2FlHd6TjuDBaDiNtyzZE9Wy8X63ormDGTbC3QFaBVf7xnjLR5IKND4k83nGdsGhxDMkaljvPg9kUL1IG9Qp4g2%2Bi53KEpEyqJO4tdCHbSb55ElXsi%2FrqCOwV8vLrMwP7DDalSzwWrGRs82XG%2BZq6ap9i3XRkwIy8cNJVIPsZn514JYWOgRfkHsvbblrtRQq9f2DW6RPTEbB3ajH0aCA9XJomMvK7Gm6r1rf0tPbRBbe5P41Wd%2F2J1kThR0f4tia%2BxJqWajAkfVA9lDWrvw1AifCldy8AeOr%2BYcyTsWSju4XKEKm3TuSVWR6MN%2Bqj%2Flrs2mnYbVwSPd3HnZt22cAuOBR0dHfmggXt0CYYTq41SJ%2FMT5RzhZr4un0n03q%2FNAQBURfNCLEqkn%2BydW%2BMkMcSKwVMIJfAq2dY9A%2Fz4LTCGnzChE4XDoY%2Fq6Rb7RU6X8C4sNsbnuT2Th0%2Fo%2BP9KEMi3IW2wvi0w2omDCo1M%2FTBjqkAYau2i%2F3zGX7UAJjJiPsPCdKPSUNozSTNVVBmZFsn%2BiR4xv%2BbFhaa1wVq%2BKYVhk4GCUY0CmcyBFnh9k8y4GuADQM9jKS%2B2k5BQVqEvlJsj3St293b9i9pCz1qnS1F6P%2FpzYyE6PK5aznXpXvCHB2Mackwa2Ayr8GUi96qUIyoz1BlCfP9MsAdMgPRUaDLztKpAGlPL0jTyftffYACx%2BZ0Ki6lD96&X-Amz-Signature=b5aa200bc403a5dd2af012f8e05ce387adede7c12a76d21c1377aee45884c09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
