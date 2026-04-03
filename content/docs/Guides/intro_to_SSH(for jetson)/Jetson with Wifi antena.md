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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PJP7FVM%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BdaUjk1nUncMCXQ58CKcBFu2NCspCMte3Ume%2BeNp7sQIgOhlHF7YpjzHhYEGzZazG6%2BpLgZ7VCqY4wFs%2F74pn%2BKoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK8b4jpP3VqvCZNYHircA1k1Pwvukaydd7rBpzvTKtUZ2wJ76IolYp5s%2FneWV1j0SFiXJZ0PPElJlhYEE9dSyt473hoXB5GTPbD%2BNMiHiATDcTbmiEFxP2IK%2FbjOuGXupHCtmJuog0JFg80ah7jCGTgWAIVyUr4YZkb5FHHrkbyJsVsXRoY7tzxoRKE0NpI9YGa4UN%2FRcIlfakWzuAcjV1Mah%2BUA0Wu5Jpj%2FJ2bfnGbr%2BgtgmIqSrDNZ0e3QyInOJzSIDHE5ZbwNUPeTlm4Wwp0z6m%2FjZbdXCxj%2Bq8MyjWqSRBbLYfFrthaLFg97MdFlTtIvmsEYpAEFiu3ToKztfPxdBXJ2FIkD4enidBywAdTbVFV6dALTGZkRxOPAj8ztQfvm98D5GIizX7tH%2BRvm7cbn6ALcaB2Hr3zZv5RhRKtzZW4lVHRm28E9ptPvUuj%2F1N8lREccevbIXSTCnZnqMyb6Kq2E1pcz5PpVmtldukl6EwF2%2F9%2F7E91dH1Xwokugbx1smlWS4gzW56pGwhmsJ5fMHsg4AYpPm%2FYBejOeOm1pVg%2BPJ4Bkc20YalFuIjYqJRNKFPglwOE%2F3ev84HqX3Ghs74%2FacgY%2FIl6hsUC2nwp80VnnibSll%2BBcXAmDftfe2xa82fFUnNQmjEo7MO%2FFu84GOqUB9TsI5ok4G518CpUeCHfmWzIACimsjm%2BONwmCcCWGyP0yd19BAbShos%2FZH2RKFTXDHvBN869TsPT0wfE%2BwvjTuETZjgj3iycTiOiKHuDgR9y81Y75%2FJ5aY1RYeRHM31pS1vGk%2FXXU4Ie9zvUzN9GPTmTcU5xfBA0k75tyxgPIxPeJtWUj2%2FJxe5NI1YGLAvdiWqV2vbwIX0Xfgiu%2BMJz6tSpYpkDs&X-Amz-Signature=a6c0137d9b74e9992371271a317a6f40386ead258d7fc8d52de72414e5215b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
