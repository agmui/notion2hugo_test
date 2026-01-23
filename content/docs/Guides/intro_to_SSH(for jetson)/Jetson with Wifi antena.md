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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TANCY5PE%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIDs9Vw5wqQFSftqK0T5mlyVaJOQGkyKwwnbpQZzC72iaAiEAyARjwuRez62MXANCpaS%2Fs9Mn2UcJ7cnfyoSQd46jLoAqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxDBp9bIEZIryijpircA6s5LLl0GomUktqVCmGyG86qQnns5gqGFuCduNhb6LRQHQtG%2F%2FnBmEyiGwEoNiinTIK2EwayJVv8DnDPyNAGARWoZZw2K1PHWHEffju8iWzAw6RzGxJuLDyKTuhOzvNIA4a8xJDBiXebWY84nUYXX%2FzUrx0zFvOnGKMo7rK%2Ba8yBB5xHNMrAy%2BK6E4GtIQ0asDFKZ%2BJUpnracCezCQuUONfdnvWaGpzMLJ1G5W3L8Q9hXdnkDZSEofbp5f%2FV56yneij7pUtg2G4Gi%2Bdofd5Jm6%2F88VsICGeWgNIzDHK6bjLnp1EFmMj%2Fzdx8Iz2XJKjlkQH%2Bg2swFUSo5egyrzF0IWWJe0BpbzDTxSjZ%2B2duLp2sCrIrs2oXpAFJO9ubpoNxhmvC1mgGfAGtbUdS8HLl%2FYEEH%2F1Zn9rSW40ctfckRUtq8vD91oTzbAKAbLtm4pG6GYVlhWhvem97IllmZEI72yjYFH1R7W2sSGqKUPAw5M9PJVbV3jqKfsYRzNuSait9k67R8yyFHeZktttxtnw6zVjfCWl%2FhS%2FTfy%2BCwt%2FHl4PmHd979wssXWxOv55XLo3F7xNpziOUGLl4pDkw4JI0Ep8RCHSGu90KwkLi2EEt1yglZtCTjIjXbozzrjLVMMqLy8sGOqUBgKmVUxIrcC5Ty5nyjAOBTV%2BCXUNUA%2BwozispabF9EHU0g5VSThQqd3TOnceB0g%2BldnoTi%2BvQHvYw1tn61V3g7o%2F9PnkUr5%2BZ9I2o2cA9Q3yzD4cO61%2F7sSU0HmzATyogacr4Euk05yjiomfea5zNwRDzj96Qcfy%2Bm04VKsnxnyvmhfffa9edEeYbB3hKVSG7YFMhN7e8mBJxUpXlp6anL50KH24n&X-Amz-Signature=bb5672a450f0d684adf023e043ff24a00aec6351f2a993e9064608833f8ce3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
