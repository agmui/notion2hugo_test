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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSHQ4Y7%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFE8eKizrRxnauXIAfUp9eeuXnS%2FWbgh3idG7gU6FgKgAiEAkaeGJ7MMbZjOLgrkQtFPCEQe6ODU%2B3q7quZ0guLv2DsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBM2e%2F1e%2BK3YxbGxOyrcA8Z8Hqrrd8Cjx4KyM8oCFi3p0MKKAffrlBrUqG9U3RzvBxAzOczOzDtfQlNHtCwxVBB%2BtCL6ByL2XTaJRs9oMkhOBth%2F45wRl4dLBuv8o3KAEt9tDLIoEpCdNlrrd6sN4CP8FP6vSfRdrz0w9SoGb%2Fa9S4QCRxL1JClp2Tu%2Bvd7fi9DP%2F%2BJHUv0Z7Edmt1FUZGDrIsrtr55JM1A0agKX1umbkYpN7oyof%2F0uSCFoNlP%2Bvq2GXajTtBtxgYBLvsZbsh6ugWahyCbcFEWvRhcqMHw8lp7ruirCQd61UcYWM8wzI8bKHPeMAvkHTgjTVR7QhOm%2BrZnbYbo0o9k4GPmfDvAYb1fWn%2BKgdMPmswK8P3NcLhVWSJWtw%2FwQ62JXaCwMqgmX7H3jHcmfs93EC6NRDOwSrwtLOjqrwABZaoQDqmKyTRDi6pE9SfcP9DDZ8pkndcWozA6ONy2gMYd1XcAQ0%2FQ4nTQJee6xHoMbck4LtdmGgfleboy6PVAhxNQZr0afGiERJHDmpRRniUavhnjb9uQAbNFM2W7YK0HVBkU%2BrBNoLq6Arez23vBmxaORnjJ%2FyVHmDiFWqdtRMVsQg4b3S5tCylWqPJNhJW4UoW60ZM9HZta7Wd1D%2Fihl53M9MITWh9IGOqUBJpaaGZCJNZp3uYk5uJp%2Bza5CTfIMXPYmM3f6lthh0DQ0aqgBlOlz8AImjnSqUm3U1N6ABonH6l4eDr9u5LBGZjS5EEGzwc8BPXDUuy9r%2BcyfUrQZ49x%2B7wFGhSdFEXYNPbo630kPyR0njxKk4bzV9hikMKYOGUjyTbQ8ueDnPZf%2FHmKJX%2FggZ6M77LbHZyO4sJSPirTdUjVAywatiAtfgiua0%2FaZ&X-Amz-Signature=84deb207b028a62d0a03be8661f897d052c20182224d096153589a722e130fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
