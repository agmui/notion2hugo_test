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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSLVHMQ%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIXOhyXi7t3fOgqtu5Knw2hup%2B8Blk8pC0yz6vKFGkJAiEAnxH1Veu3Eri9WidQo2%2FtBKFgKZxbTsvRUz9PWCt5st8q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDPjKGPPqRSRPjCpjYSrcA%2F6GEJ7ahrOS82%2FG2VnrKnCFR%2FFxVuCylwa2VrRNt5VihpLwLVQeHFbai5nTDNx3joCIA2xRmZmg8pNOq2%2BywwnruNSsPvfcmck2mUg7pZJfbsEtvWhd8i4zU2DS6bFRXe0HBFnphk5wGvP9wgWe2Sj0SKvFCBMBxXHtwe0OYuKxUKNLRmCigeG%2BJJpyLgLj3ougFxM36R9MMFKj4Dp3Jq3%2BIn5wrMCoDsg0six6%2Fbf6S7pAjkeIE%2BzKpTONIG%2FvrD5um537wnE0T0wmab9R6EU3ZCDDKbTB47NuuYgFoRCY1HEDKrCIlpslesDTsML%2FkCPcjlM3RAxzZD5Bb0H1cc26oB8Ch3MhOKlSxuLft7eeZYQUegcgEnvzD490fiNdJlWwHo5CBn8sv4Qg8BcmjmVaVUj6knMlaNTXXl%2BfKys8krhJEv%2F2jx%2BgO6BIGb6tPCGCyGJd6N80Ug3M32sHqS9wRyBGkBFYcQMm1uo5Jn07S01gHszV2O8JmqGfIg%2BKvD8oef4Kw8W%2FjcgqE%2FKTk2PlImqs3P124mIfM685yXfTSYCOaofqeZ%2Fd8irAcuS7Nv3VXaGFYEBG8xKDSbRyt%2BfiTDcuPx7JspleB7B2BwchQIHwvsRNsAWgNtG5MKuz4MsGOqUB0G%2B1QpR5wvEnlxZ%2BnG%2B9dhEmD8DAdxVrdOQZbcu4%2FRcl10sCzw76B2PhY5zOpuCszUa3dgWOGkmEiuTde292vFEO7yvV%2FpmRaz%2FXKQ0tmMzg0ulgsRZgA7kUijCimljI5Hg5jBTZ3ZYiHO85kmD4Eq6buSM%2BsXajMMIjZ9IDaAK1L0PD53akUPsBrqRi8%2FSvXu8RbHWBlKOTWKRSaW4RxPtCwuNR&X-Amz-Signature=4c029c87b15b7e17546a24e5b9545c1fdbdc59dbde82ff2cf7b0c8ad0a04869e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
