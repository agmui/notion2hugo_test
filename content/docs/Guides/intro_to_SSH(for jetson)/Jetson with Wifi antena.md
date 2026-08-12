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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOQVCFMZ%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJrYLhhKHi%2FDdfrTBCQdxG9U3NqL1LbMyz375H0cLTdQIgHBJYlxj9gp%2B2zNjgbd43vw55rOj9%2FbDex10d4XtM8IgqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPBZY7KNUn5RD3XXyrcA%2FeU5%2BE2I8MrjxCtQnBzAlCDg1qbhMxwlYa7brzoHK3JaRPDNi6voeabaxQkT0K56i%2FK6Qw63SE8qSkP%2Flx4COyznct4zgXspPFuVpz5Z1iKM1L4LguuUlvphKb07S4%2B7d4%2BxvXo605SUsZu40unGNlCsAKqgXJvLQcxQcwymM2VE%2FVeWPQqArGCHJPJERKLfmhvgwARcFLv%2BbW6m9BDG5LuVCQLL0%2FGDXTAUmrVUZABlg0qvXxxtN9N7Vf4Q80BMQvxhZ46nb7a8FlIVpqjZqInVDVPwN042f%2FvBYm9U6rAkYCDeF4mM2AAToZ2MBrRRTPaT9c2kpMwK70SX3dovLKapy8rJwctpMD2ZsTWx4CJvdXEdLY6v1gEdJdRCg1PbXOrTNil1%2FscxLxhU1d5pVaspV3fPIeWrjltozYXwBvIVQzL3%2BymV14SxDrlkvmVcDxHfZ76NTFUVgjQyUWLfpGjOareV0kpTNKbQAdV043CCJZUxkV3hWJ7GlOBcsbgCls%2BtxZkSc2g%2Bhbtgfr44AdHsUtmM0B8Iv9TecPmK0X1gQw3zRB0X%2B75fcANYTHCkqSIfhhXc3FSsSUppcMGsaZU2Ae3y8pxkcX9kKW6uS6EygoSDjQ34c56IxamMPbm7tMGOqUBDJu4WKOz9cOBvXW9uYiFh4Jji723eMKgZOatL6OcCOI0fFu6wMnFh6Wn5naOoxGTFowuhbmOAkzfYDfiBlf8I7kyWvFWU4%2BvSScNj0QMNjXWq1A2jMZKaRiNdeb3V6ewZHymlWLVEJ6%2F9UrF9yIBw9iyxLr8fuIRiSohe0M9ieEIRDdeXlwoBoVQjVc5WP0PaHS6xVx7k3GI39kDIxN%2BSnOPq3Ys&X-Amz-Signature=37e4a9174e53559904dcba2a84ff87dab6e4e71f10e2885e4c9d3331a48a3057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
