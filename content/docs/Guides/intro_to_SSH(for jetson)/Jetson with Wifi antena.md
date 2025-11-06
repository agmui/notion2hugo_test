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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEVFQZF%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVM99hj0Tmm8SwPvERUAu54WxTyFsXP0znjdDNNo6a5AiEAv7TCxES7W8g7c4zb%2FOqsWWbriU%2B5UvT%2BBQqRDp%2BmX8EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwBmmkbmsOyusAWvCrcAzHggsSDONU%2FN4SLEXoMduGBcLvs0hh9vzwzebqVV8eN5pvLoOlYIrr%2Bz%2FRMTLvTKgzpgArdtGtsj2PYDvJmxRGKCtt%2BL2ndBFwK8fu7BGY2F15XOdxPo6L6J8UenmG4T4gjh4MX%2BVMKCLNeo1AbCN1Ge3oP9humJ6S3bjgw9as2Qh%2BvhCpY%2F3w%2FfOLALiZm74e8%2BCpwkorexjCuWwC3NK9xTbx7kxUbRivCtlvrUgXSsAkn5pB6KZ4WrE7E6EQBzgihJ4PTbl1k5xdKQMu3HkyqtfHbKknlrGV53Y5e7vPNh4FubeSwPLmmsc18AfOySqZsP2ua2%2B0YCz9qrJDjaZ64e3VTXNh01rc%2B6cHFhZd1VcyD4juZSewBtSvmi6eYMkoryDdN%2BorbolFlGp2DBKmXx%2BNuLUFYG%2Fm5qrGNPcDjRGMMr2GVdQqRgiAqDquvmq%2FIIqymhu9Yt2i5jDRchwoy7kOqzW3%2BePzP3DWYEBNXEVJ8i%2FBkj7nw%2FJA4F%2BMY5Cvp2QBpbez2rPvdXXyt%2FxQM2ChE63YzUHnr28ybJ7qTDAvPpayqwEQddB39f7cblUeIsWrTEVwqBrTlV9ssQhPt3mviaaG%2F%2F9lPzW%2BQeUBGSmSUH%2ByFkkxEEF0AMMDyr8gGOqUBaH8juoftZdhQgK0RX50dWmCAikHDMqhD3Pi0CmdjfU%2BqnFU091JfCAt1iaxiI6bx3%2BZhSmjvQ03D5ZEeUsX1llmg5afgc4X9KJ6A3CrHGn41R%2Fo%2BY8urEKjBMz1D%2B6ASaLpKIY28XNAfYYClAo49S2A1zG6%2FnAeZrq%2F3NiTl0xFg%2B01Y%2FY1tPJium4duhvkvTsX01ARv4l3mPhZfDd7IX%2FAuMhfv&X-Amz-Signature=abcb581e54f09899c085fa6e76a752d0b59affba972a64d895fcf0e27b60e7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
