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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVHYWBF%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFA%2Fp3UG4nbhWKfS2asXnftNxUF69oXm6l198LyqJjKaAiBXYpiX5UGiNiJIoLj%2F1vlXLnZOyoAuPrRyC2qqxLaHCyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCygXOL2UX1tGNA0hKtwDJ7blqDLvSGL9Ys3yxD5nx0oC0EXvJB%2BL1HEJzheTLBZ37fUj8hGVdM9PYZ5TftPwEXvEnsTHCL3GiNcAKT0Lqx6bvXQRR20DY8poZjNNHVAQUMntF%2BsG95DstADRRYvf2%2FWVop%2BUgkA2IfD8jP65YOp6%2BrdLZqJycrzLCRU4WCakhtS8OrVBhou0cMeh0Vpdx6dkdiKhymp0GWljV%2BPT25qbcz8239AlBra0APumEcsDOaCkPHhjK%2FGLalgNkMTfRGQtXearDtTQgTI1a4uNOGQFdlYsV571Ugxhabw8hKeiwtcQ1uSoLkbJ8w6hGPXHOjglHLRui%2BQHceH40PwR%2BAcVEHUoWdhzyt8Knocn0ZiZQ4PgG4bv4J1dMm2WoZ%2BSNfXkRXUo0axrGC%2FbAEq3XTt8eVrY4kmKtWHecH1qZIIZUEDSG3InxVRehcyOrX3zm90IPuMTaqC8kwII%2BW6X82h74Rdool1%2BDdQQN3JVzzggDHotAN6zJCkwe60g63hBp%2BM6PS6TVNMptagXgHiRpsUKMuWHTWTBTX92x6%2FLDIrA9Ct90E2haWVZVwFN38EvQxjgypmHOpmBvAYgbiolXvEOyNY8cnCqHJegErA9SMVKOgak5%2F5GC27rTrgw55ywywY6pgEP%2BaT%2FM4Ygtlw5DzzvmCY4iUoUSuwhHNcCyZj7L2l8o%2Btldxb1V5z%2FIAJb8yQm6GZHJXd5VO8bGJx6J0AElVBOmyNKUVOPjY4aezjA3w%2BCflpj7OvAWYoBpiKXhPDb8CzYF3DB7kXE2c1V3i9wu3QcAxRSUV88ojdfZuSG0TsK%2BnDHnfyV6zJua2%2FgKlJqk7Yb6%2B7xruzI9T9bAFGfdGM%2B1oXQ9Ru5&X-Amz-Signature=5ac7faaaf1a2fe14428bca8ee3eaa7369a5bcf55c9f300c36ba03fa1447a7713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
