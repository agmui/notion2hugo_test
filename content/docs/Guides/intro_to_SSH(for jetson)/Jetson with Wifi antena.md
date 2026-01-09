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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG26NMI4%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFUkYNJEumUzsXraYVI3FdiSk6OJSmY5xUJpCbNXpC6gIhAPmgGJ8J0uxv3nsXuV2dY%2BXJoPPA7qElMtB4Qq0W5nEuKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9jTgiTMrVU46An8wq3AMuxRYAHkpZrsSYIoaFoZMBhcuqiq8LdKfFyOvji4hBzsHYaxG9VaKRwlLa%2Bm8%2FsbKoBCnkuoTS628IB%2BkaaiDwi0IFwUEJJczcmys2rN6HPexOriC5u7jZSjGpwUVO1%2FJ9ryzbQuCGWLOjaTlmecSc9PZ5T6cz1Q5O6ZAoTCKriE39SW6rfqJpOnSfQOkist1PGBsQLxLj%2B%2FBJrU95G0k%2FeiL8ULUu0dB5PWJfc1AhVwuaD%2FX1jD47ynWKJdZ%2FMtbvCtsd2AmXmZkyHir3%2B2JBEhHmjs%2BOgKBzxbK%2FYw6ulblfLnj05ogb7xqUbc%2BqMVB3O6sJdoSdi5XjFPqU1Eo5jfE4%2Bg82okNAvQrwP7DbL%2BOBRSar775yivT5L1pe0vrmPw%2Fzs6M7s8t7mrCiGge%2FkPf8w4nLR7UOSHlPErtP%2F6Mf%2B2vKufbDTEF8U1D%2F2riMj56H43GKty02H0WCFvN6clhM%2F7YuDaZVFphY33ANkzO6nGK3UAZtnPK0dSATnMazbALV2Gh8Xq%2BTNAzV8R1doF%2BU8UV7OjNstCFbwM%2BPETuMi6K39jue28r1787MWrs0XwrWb5f%2Ft91MqyUdfeRj0rqwSVc00IoLPkEGkMiwEHlZ9balR3o2%2BzU41TDXpIHLBjqkAYjiLiCITUKm12UTTVgxgpFILXQAUBr6XR51Xe18dFwX807uX1x9upeSinMUcBEARni2V6edGTr9wZLFTUk6oqtJjtycKVmFrmIYGJB0Cju3HAmL9JaFMZ5Ht7jj8jmilx8c9ItwGblUYiKEgI7b%2FAFV4SXPJ2X%2FqNJzG9ClEZEkUhXbfUvXaQNPZOgPd%2BKRDwHcu8Z%2BtnvX5mcD14wdHIJTZuYQ&X-Amz-Signature=70f4a39735c510d0938e44d082e9d4b3c7f48f0d89e09feb6cda829514e4f153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
