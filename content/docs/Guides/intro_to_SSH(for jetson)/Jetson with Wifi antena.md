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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPOLAE72%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMcD5M0d9lJpeOOMsJU5jGLfIiFqoR%2B6YbsDCgtg1DsAiBFBnPev%2F93%2Bihei0U5roZt%2BlsOaOuKFvhV7FhTGbPQNCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMAz0ChFlJ9IqngREKKtwDv9pmn%2FzO95pPsFgAKWdLuQnEZS7VzsfQBIGpAcIvNhZJVimnvq6ErK8jK2l8L13jy7aghqSAkbZACvSNt8%2Bhu%2FQdWcYj%2Fl1TpqFNA39h5SGW0qF66KruF9BWycm8z7wPnWxcSTZ5QplyIVKDjKhKr%2FdjBivZteKUPVF4JG4TPVts%2BoExQ7Rmfk2MpJGiXNdyu1bE6dL3CO%2FBErKIB7lEM%2FnuyLlY5jGy5Sei%2Fw%2FYChK1Tv12HI032sZNR2Zqk0tfLF3fs8J5%2FmzF4xj%2BDEfeMdk7EwPUqAyzehPUDRXTl3TTeAPv8zuGpHFIAU9ecQ93qRvSsBrMEgqp6ZDE2T6Id9HZ1hYONAwfhaQrLEUeW4jFZAb99hH63jLcYUgcIF5LjYv4jzGgWcucZovCtEw4yK7612s4kmAVM5XUDphkv3lJxpT8JVs9JM575bcT6VItBJK3VkC1aq1Ld0cx1jm%2BInF7PaNeGhcYjvVIXOGEpuKKlngZZ%2BWCWeVXHICjYfjwqODNppzpJJoassGFL%2F%2FjhpFilrYQAoIx0Woyr%2BNo%2FlyYijD5zIMkD09JruWI7tCrTQajV5g5DeCSnu0aDNerPpPoVxH0Li%2Fe%2FQTQm%2BlakRTrK0T3ex7j4AJ0PdEwr8uTyQY6pgH9U5iscpkBgZpKG%2BO2CJP9YDnB8c1LkAdg%2BJb6CWwTPkd1dyovCcLRIqnFrNA6FAb7arxa1t3gh7iShcNjgmIjbhVoILFU%2FDsprvTlhVaVF76My%2FaYZfSUZ%2FqPGlr1ueIAof31JjBfUopIuxel9R31U7bEY1DuL1sfMCSoZ9Mhsr%2FXVM%2Fq9Om5eOUbkvIekyQ5Nni7qKMDm1Cgo9yVb4ru%2FA3w3AUz&X-Amz-Signature=c5c39aed06ef607a77904711c9e7b0b26a405b86d44c503d3461a481951a6d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
