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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMU4ETB%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIiDPGX2WfYm%2FbsjL9peLs1sUSUv95EKWRCM7L10kNWAiBJLLLKNtWk26sV9eHukVCMW%2F8Gy3HjWD2K2RRVb6A8ISr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPSG8zFMxBPvC4h02KtwDPMxh9FbbgbH%2FE54DbWU9%2BVY5W21wTRFrYfSvUK31zRUYm5KyMx1h2WyglBn%2B2fxqKWEymsWFj79G0xave%2B51clAvh%2BHLgn07C2w0JMP%2BCMy6Rm%2Fx3R0e%2BFuvDnVRQ8K9Bph30%2FGSzKq2BZdBhE94XdS%2Bpxguw%2BlqtaCUJgmbO3a6t%2BaIvYV1tjeNCL3c4EEW5aS1iwmKZgDYybhouqefE96%2BdrlDOk4%2F3lrz9wiiUKYoM2EjPzN5LH6F%2FwgFeslx3Qk0nIHIKwR%2BJPNqzp8DrHmvURJ0ymGj8uHMnu9VfSw7VjM%2FmUnCt6U%2FstaQGrudOgce5vkd4ohyy1uF2fNMJ4VqcyCaYm4BU5qCgQoRlaHz3ZKOTF5s7Q48IwrOXzrAq0nAOh2Ln%2ByIUyZvcBd417YiO6tcpZqUOgewPl70zIcqdWLDohJ%2F4QgPn4H2rxpuvNUtcy2hpj2i0WQstMLvW1kFxFQOuJBhKIm0u5wQV8PI%2BjEZnxFuWlqypE66%2Fl52sDCsXM%2B0dRS%2FdZXb6LelFqNSiH6CugtwqXu7euto9t1vTzzwqEAfsEZxSPhaPzNPQKNpfsv3I9V43xFcUCBlV%2Fw9wlYqdrOuSHDu15NJLH1Z7A7k%2F1Fvup%2FGGNsw1LGZyQY6pgHk5ynCHxVmUhG4VAcqehzydJ%2FoqphWGMEpE%2BJYrS%2BjUULKub5rDAoFqQwx8yLr5q0rAiepvgUs%2FYCIXuiwxQexJJf8Urlb2EAkZ0DYbMDDA2V3%2BfewTmX0Ztkvag5jyd5WWDZ0kwmOUoIlQxdm72Jf5NlVVZp56szYI0RPslQ7MVK6A5CrCkomrv%2FAOvXMiNhmdFwpIsih9ZtWAljm0uZgGi2aEsq3&X-Amz-Signature=8759621b694b7ae2a3f1d3cda4de4c84a12d15f3ed38f441719de68d6a07be89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
