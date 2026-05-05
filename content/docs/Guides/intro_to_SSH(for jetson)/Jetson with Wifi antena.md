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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643YBQ7YZ%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh8mR5Xjk%2Fegl85zRQvU5BvRFIis6yD2fSdC00U9PinQIhAPtLiXI%2BkVosXHy%2FxX3tj9q3Im%2FS%2BXYdCP6Q65uEhuwrKv8DCHsQABoMNjM3NDIzMTgzODA1IgwhPPJ8k2tUZNQbkUoq3ANQxeOUxUQBhtdxMNcP8VEs9sQpRh3hx4aLz4HeHUQZiu7ClOAGNXMLh3exhmt3oj334vmiOwORt4MrnBiQ2mSmr00wW1tykyi0OgZ%2FRk%2BKXuNVGdqlmAisCMUzpeI4N0i%2BYLPbxE6a%2F3uEGl4cCry7ofooRIt%2FyjguF%2BXzHr4zvkSvBwch4RJbmQuimPNfqId9bmquTD53%2BSjgPMEkGNp67LaOHYSN%2BO0Wfd5RupOtiLmLrMydzPLGKo211VbTa62pCIXi9nyLuJI%2FmYxKG5xiMEAMwu3j3dGfKlRWKdXfamnajl%2F3tOOWVccJ1O6QxsS0h4vS3SkbtVwcQjM867sfrki%2FXjP%2BjhoCMFUyRjceYD%2BQSWPZ%2BVCvtmfSiL32gEWjKLYpAqmEq28jOMDfsp8EumB4g4ZxvOhBCZHo3Y%2FGcFeop7RRn0vmc5il%2FtYTwR0ZkcTRvRMKvA9ZrnFEby5VH8c3KqIHIXC3i0cEksjS659BUx0pi1pIZLWFU%2F%2FMmHQyjBpEs%2F8Faq5D9gpJamZsRSJT%2FrLfmn2evlolWQ9I8dUJT%2Bs23aKmVQns9YgEgJPaBHbEiMBnTteFeQEjc%2BZkX8phKJP5aVv8YLyEVJuteqAQxOE3m7oqW5gYOzDppeXPBjqkAeDcY4ZQRcFcR44tmRMp6i6ahIlfzjfB%2FZp%2BXYYb4%2B%2FWqAlMvrFDY4CQhDup9C7bBB39JN3xdUTtVXHV6Qao1dxo8ufqHzGXolqAEpl69Mo2azoP71yXmLZ8EFr3M9t4%2F5xo6J3xpmzTeOhX8py2wpdkNQgrAXy3NIFbm7voPjx3WYCdnduoKQCPDfWz%2BlMOs0RTJeR8ds969dinyTHxZJMV8Dym&X-Amz-Signature=0204b4c286041f34f12efff5a76ce48abddc66b43c845bb0eeb540b73069b570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
