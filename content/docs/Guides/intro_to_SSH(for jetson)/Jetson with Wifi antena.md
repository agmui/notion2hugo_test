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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRKHD3N%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHm94T5%2FoE8aa%2BMa99jT7khrweIMm3b935PXzvdGR%2FU6AiABRPxYOYguhRZbR2j9gSJbAqZUWrPIt3F3H%2Fo2vuQuUCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMs7DP%2BqKPewCReM%2BEKtwDRSsSExK93mZKFQs4Yunf00XJ383WB%2B%2BnGLC7onwcPFtQawFISg2zTR4%2BUY9IuSRduCRxiWOdI6B3BWUYCYp%2FODwjOG%2FW7O%2FMn1KZU%2Bwd2QH%2F7QGTCZgVxjAusmTrRf8hRj2siS3e1Ve7OLuA2c53AMXPzJ%2Bv8gplW5Q%2BiWoztzgJ9LcmTSqtKcg8N3LWPFEuMfGFVBLkJ3Gk7h1myLLcrw%2B4XI2pGRNYjEHXmknQwBhmn7e%2BPZ5YyQOeeIi2kMkatiRa11d1HjKGupTkIfZZGFLso%2Fk7Up5%2F644CA1BCLQOPx2XkpC%2Fua08%2BAw0Gg5PJL0036%2F3GaJV%2FF9L2pHG6cW2QXmMVMhcNmk2UHw4MKc2rfOOgak3%2FwFrsJZWHAjt3OVOn%2FQuXAUx49otkWs%2FQqMHALX3ijLXSjjtadnanK67oJBNZpNX1TA6qe3qTBdVoSjT4ncpAWiM86DiimkiopceHByO7oehf8NrKWIsNVwLITs2yHP5GA4JP18iLtu46Ptoo4ASqGB8p%2FOyki%2FtWU5HdMRl5h7o0TUBajPfV0AKInioc58Qhv5eqdX7L7Oz0O6%2F%2FNAYHE471KfhXON1%2BcMAZ318BfnTnkT1A62fbPxKO7P2hBP0CiS16OaEwvK6J1AY6pgG3JrHXXoI9pxyRobA0IJDJJb038EIoagXs3n4nlG32UAfZEIMCvo5Ww62vssYCmEzYwz8lNpmrKlPMy0t7RpbBTAl%2BZwIiJalvtXZRUgIlZLIQ3DnqmYvkFhVZqCtb2SdpDv8d0kMNRPk3I7FO%2FhPBljuskWPYWbnd2sZXbM0wq8KkdS3Dpmw%2FnKJajBv1f5yKXbbc3jlzYP2zrrI556vapWoBFvQw&X-Amz-Signature=4aa929bcef4cfa463202931d13db00578f1a773d132154b5608d23d2c6eff93f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
