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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLWOJM2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB%2BC6HlZccCnd5MAgV2EXR2G2%2BxIk7IPrYG4fpKucssgIgZNi5chznwil9klDPXQLRGpZdlDA0OFRHuyarfkX82CwqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx4HIKBPeitKx9XCyrcA1frE7TGSqeZ%2FX8gSykM0vD6bb7MeVjmHaTpboGhgL2HaHsY%2FWSP3dQm3HEr5KyKsof8uNmIRvgQpmU79LXj5R0aA%2BRAWWIhNed02swyoTHByk9IoQaFrHUErCE5%2FGPWrdEuc96xpH39c4C5HzExm8WVJ3RRYdDBofDf3S7CLexLLVeNHJr7BVoOTBzu8aa5CLaOsZTKm7Xq%2FOpmMa9Su2iDp1uQ0I6KN8khkv0AxnM2Ynu6DlDrs%2FmLHvT2Cj0%2BOE6rx73d0Hi%2FFP8xjPbMDWAZ%2BczroGBvFm5v%2FEcH7Tw%2FI8NEUIyFk607uKdDD%2BRRcy3lKNvv0D9UGte6G%2FYiWHcbtscfRFrT6s1pHqaWaclom9DhupoSoyLVXdbAP%2FsF6TadxZtM0oxE9nZWgiHC6skWDrzKQQSDJx27JrAT9yI4Iv%2FzEZ5f8fCFGVJYewMw02OyG8xyjfbOF%2Fadv91prUU%2FkwElhA%2BQ%2FHC%2BPkiGKAlkRgEfqthe604dxqeRABY8tVvSXALru%2FIcdWesJ3Jr%2F%2Bw0ZgFnlF5ls7nJAhwMyViFhFOoQjzo4SGnEm2acXp4Ue1K2ZcYr%2FAtCWQ%2FvnMM5T9%2FMBfIXkueKeodqUJSlBtA%2FKyUT4kjuwbd13FXMOHT2MkGOqUBiq9q6UEZ5L6Dn3cZSRtAXHl3eRLlYZoX3AJiffTRP%2ByCYeqFRp0JBiEf3nV0JAifZH00GbfVfA78HJsGdNgl%2FlOu72ao7NPP1cbZ3lLmwpwMIMdvEcJilBDH9WL6%2Bhe2vR3sZ6G68M%2FymzycAr4NEpjAbHH6fmtUWSGhYe7VY%2BpjfcKXYDkwqg%2FYOPE3Xw7FRgyPKG9TyyAxBYe03SQRsdLHbgu5&X-Amz-Signature=a861975b365c2411123def415b3c079934e992a48f76abe288804b1a7516fef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
