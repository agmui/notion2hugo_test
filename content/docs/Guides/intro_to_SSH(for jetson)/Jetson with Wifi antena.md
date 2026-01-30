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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPG7PTXG%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgbBJbD3DdL2Ca50gRd67x6%2Bf%2BobhCTMEtFm045osywAiAc%2FGfdhFItNLw5X6cz96qzPZ5Vw53v6sshj7Y2r0DHViqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfJHw%2F%2Bkff%2Fn2%2FLmiKtwD%2FqQtTqwtmWLgyTFIdVegdbp2Ps8ZkuPYU3VJ3ysTf7pYshJSRtAhzU5BJOmfCdbPmPjaMts93VJN2YmJp0lL05gw3dmVopNtJ4rqBB25TE2x3uBmqAHcEYyqqGx1Sf%2BNpsvIh06MJuv5mNYDxXSjRKxNvWyYvbmFAipRO6vYrpoINpeR%2FDL6b69cgEIZv0QYc%2F%2B104xRpLmHREKU9cynbaTb6%2BXSg9jG6X6M4kVfO8jsm1TRf5RHqsMLxynVarEkNbscA1lkVxrcd1PSh4z36X7kahCdxkwfxMhnPe5qAVZ5vnvEQ4lmByJNF%2F2wOE9oWrnls1toncHcqMRzPPhvjLB5ZHuY5fDt2RTWDzcmTNFgkvk%2BVfJ807VnSRQBNTtejXN0FtQ36iWJ5qUoTuk4DUgzvLs4XSqCgR%2BvlR%2Fc6GYXaDT1K%2BxkBJIJuQWtrMGC%2By2PZJJvtCEtBX%2FpWw%2FIUSQkM%2BtAcq7NyAsZu7CB59gbn2LDvJQbTTA7y2%2BBC5%2FdIsZE17R%2Fkaohz4fndmK316IrS3Tw1x4zaLLO%2FX8bax3oCaPhpU8CFxMtKIdntvQ%2Bbfj2LTlFBnt2WBJ2P8fBsneuD8wPy4FMZ8UwOJv4Sh97JE3LP7Ai%2FfPpxs8w4IHwywY6pgGKLaXgyOs6I%2BnhctOM%2BkC%2BjvMm9ssYrI1FyxWEiR8b5e2r%2B7nyqNuakIzqLwj%2F%2F4GOUaAQJa2qws1SPCf4nKY%2FAy8rhvbKpbtv0FlW49c6RXvwKa4jv28bDP5jN%2FvC4sGyOlg8G23Kawx3jXD94fwOtJjuTNhleZnNORP1Jy2V4Dtnw63%2Fi%2FhBl5eHleV1iaSMG5NGLvWhZhZd7Ft3uVodP3HkTwWd&X-Amz-Signature=e3d333a67a2aa60d5e3e836ee644b3cb6ebe0d7b66f56351bdd1e878dc4e06d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
