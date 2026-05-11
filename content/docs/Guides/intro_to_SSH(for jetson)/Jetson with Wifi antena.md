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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OHBT27%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF8ThvRGi4X7%2BY8sgPTk5%2BI5w7lMOANDfyc3sDx2fr49AiA%2BiZI%2FX8y95TlOiUuUkRhCsW%2BCIE%2BmXycU8zmha0oBryr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMxtSXdT0TLbM%2FW7tuKtwDQ29uFzcDZv5WMV%2F3cwoVYdYc6cG85s%2FSfd6B%2FoLoshCIJBJRM1MKUcWHi%2BvNw2atLKdZ5dlRCDZLNg9m%2BydRaKGLJWG4dRuJgFQCBtDjoU%2FSwVYyljx%2FeA3MvQ3kHABjsjE7rPOhr%2B7lDhKWXRZ4JzNONf1wOOtJUcU9XwQ9W7PxlIQm2FLgdNdhx6z5BhrvL5NDFMf6cWIc6xelaD9c5P8PWbCIPK1Ud%2BEp1PAeblg%2FunUIw%2Fk8dfFVBunXZ72UVqqipQmPsBOkAhM99XBATuWLv2EXFEihKrSAQwLEoSssk803tM9VKnFhekOoF%2FnLswY%2FnJiBYAb19gRtKOoGqJUe%2BGHRv29RUdqyy1M5t6SaGcOZL7earrJqmEZPYcux%2FMvhPrGExqGSx2A9gJ1IMQBYQLsMDDmo0136iaRxaKL8w7TXQynaTQjgkOdN7GXBGMb2UiYymrLknnDwBa9wvPX5CcwetVxEKsakfGUonZkocFCbKxz92ex%2FrZsmTdjqyf2bOVjQt2ETyVR4wk7KjSMJRuVfwPutARGbDSUWS7Uw%2Ba2lZwKTteYfEr7Bgjf4T2SeDQ%2BPdQ%2BdeOMUoD%2FN8T5damdgsRyUOPu8iaAtm81k2%2B87OMJNBTmy1dcwjYSF0AY6pgGEZXSNlNAOYo0I3rFpyxV41AoJ0d0totobodILu%2Fq%2BnQvpA0fVyNWP38bFH2WV2vK4DRX6ZUIZ1aqQzpWtoDBw%2BQk867RaMkkxWunIjRWjUX0mKtYoLcHi4ythkWc0Skj9PDkOMOkwPp4D6%2BPGuDSUuoLmPkCgC%2F4NWBf0CaACXC5oLvLUR5f%2BHBf5N0fY4aQ4VyP2%2Fn9twFxjC35nz4vq5md1ILIe&X-Amz-Signature=08319fa3bcc7760be4fc3079c90a4504d8ce782fc7755663b7340d9fccac8091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
