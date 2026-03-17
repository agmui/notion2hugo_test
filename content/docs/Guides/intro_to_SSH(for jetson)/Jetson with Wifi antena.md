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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYRB5AL%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDFxWWhRwhpeyi5FMbXYVeBE65zQtV6LCMCBNmmTCFevAIgCc01hqHJFoQiNZdqLjmj09E9uuK4zF7whCXF%2BQdd98gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkdxDOW8EixspBmfircA%2BBHzEznmE6MdInUeteT%2BqKwj%2BSf65PKWTrEMptyGVk9L3X%2Bb%2BN%2FIMDFkbE7EVO%2Bu4fZgyH8%2BQDaH50PZFWbzPQdtPM%2B2U%2FD92o%2F2jWeCB24GbLhsXA4hCHWhvU9b70dT8byLMDIB2W50jatMmR8JN28BGkyjxs%2FGfis%2FS71AykFFyQpUAYkKhvDWOKRBzfbmL9R%2FclqG3ZKsLwd814w46HY%2BqI%2BZA7CMaGLfsy6hVOBn4JLI0OMda%2F7CsvfBRcSPmvuL9I0u%2Fy2Wij1mR9XcXcjJXGHVO%2FWZ3grb%2BUvDaETRDtNTPgwPBzE0UKOREZ%2F%2Fl9hr2xu5jiLM1%2Byrb9C80EzumETQ2DRn78SZ7b4qJE%2B%2FcFH3SrvDrFYzPxtWC%2BcLWhy%2Bozug2luQGjxRR%2BpjA1%2BscFls3p7TQRYy5uXTjvy8PO0zVmcS7gyTK6TM9sgRiYuBQtSiflKxq3LwrzK%2BRo0B1sbh%2Byj7l2LZR1vbKUN6SrpvhNdNJz%2F%2BChdXi9ZUxCqU62HYBAFT6hVr2fAfgyyx1Z7qh9Sz7AHmlW5HkrcPE0Xy2uXu8bdZ5Yx%2BWp%2BwwIzYvQM2UCkUzHLvGucusMffuJXDcNqXopnbTdDK9CwSbynPgyNVh5%2BdYgEMMPp4s0GOqUBuWDjuybscFl1oC%2BPFg%2F2UtK%2FoX3Rm1baDgIc%2FsqmPLikKPsiQUck8bECgkjTCCqmlPAzTcdg5ksKMtdOPE0KJcfVWgK2RAG9s3kVH5vni8%2FNn5hStitFCfgFI2enKAr%2BjqTvSNDx4lciSujBbWgFRjVgYIvq4ReNddcp3tYzv88Vl436rYJM2CHkHJltypso%2FUjhwnOXp3n0EUNZaTIepyNFyGhq&X-Amz-Signature=dd838785e5ee29209899a81a942b7f91728d3cad5159beb81a1ae700b709f5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
