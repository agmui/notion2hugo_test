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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KWQX5WN%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBZXxYr96uGnKB0RrW6Rtj8v%2BaUCRMFpPUp%2Fq%2BFC%2FlTOAiBUIyeqs8K9QuPCyskFkSlPDrqcGtldP9kBJ%2FdnYTL1Vir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMDvUXwPqeoKYDxz%2BqKtwDakzeoyrGbo3o6jK9QhMcqd%2BGs9zqoKi2w0D7o9YTea4nG6aLk91VSIR8alQQwkAmb3yoTNHplGZTVzz1nQNAMvRdmIgVCOLkMpzzyAc4vGyRGqZLbDiCW7vvd0EJlKntOIni9hMvtuzT99B7ojPBes%2BKdO74svLeOdBEnTXMg9eqwJJfi1Og08G4P3sCm78xYwWnLz8vs7SSjg7yUSijrcyJgm8YUxl8pMbj%2F%2BTaP3uP0pzroBQb4PcFXiTCIMMkomrA%2B3HPRxaHC5pEEbDciL4kFm%2BbCzQg49ewo%2BneHlHE2dRHYapHJs09Ed9n9O7rwe%2FvczXD05kb2tZa6GyowQJFB%2Bt%2FaiSFvGrQ1eBcaPaImOAmqKyCPwlxriywOlZ5gHCs7MVH5pPJyjzN78vGLJa%2F%2BRy0rM7tssc8tvNyuy7%2FV%2BDR%2B8pM%2BOUttOGWwqqkgcxXpSTgZRQX5Wzq%2BirC5exEizNoUQ3%2FUyAcUKCOVINuhXVxpfqGhIZGCyLi1xCBQQgFo%2BiSa6TVIfbLwvFeHdJYFEGPO4SwayM8o2BdCdS1zhu4S8acUteQ84rVzPneufjMZ3SOXcd%2FQzglGY6kO3f2h6FWaFWjUtLqRPlbaQ1KpKnAW7kl%2B3audxgw3d%2BnygY6pgGzGGD7AEcYDgq7Elftw4JLU3sZ1%2Fn0Q9u3VozMz3klz0agLvbP%2Bpkq5IIdxHQ6erzLmb2CjzjrPuGuObuD5vya%2BYL43An4%2Bxnv0Ia8TM2NlIWoBOHKCCh%2F%2BuoQjfEr5eocyUbunG9qRhfOj9NcztuEcnZQ6mNpMieqZOWoSSh%2FkTb7%2BTxb7OZJrLdaGzIYtoeHsPiKlCKzRDQOLZrjg1gj89XZi%2BBm&X-Amz-Signature=ae871a0b0495a451e775a750f9e6ded6086b2030bcf2352ae760ba33fa70a7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
