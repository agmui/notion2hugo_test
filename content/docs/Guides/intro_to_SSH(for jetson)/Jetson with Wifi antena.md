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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KNTFWN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiNYlsqhfOSxl9%2B2DBsYZUNwZLNHmx05Q5Dfmk2IzugAiEAo1uiCNKjqo1pxWNxGZNHdMHd1TUG%2BU2p63fOq5Et8rUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAKw8AEvAmrbxtuyrcAxTgl0RI1LOHUM9%2BgYFl4TVpbWl333MzL1cs3n34yx8HUxV2DOPgdbDA4spCUp%2Fthu0JdU9bnWKF0UuxHMIf6wltfljjKXqv8wD2mo87KyTnLSQQsx1Sb2h0trY4%2BcENsY5XQShMFHQsOF3cf8akLKPBhaMochtJpd5ZKz5gHbUepaazXIMri8UbCw0TjTM5H3QcZfl%2FcbGptzKtCFNqt2kOWhHyZeKoS6E4c%2BgJ6AUAA99yoscqXwbdOQY%2FpkK%2B7%2BsggfuODiqDA4ovN%2BNwUGJI8vw4A15wh2bDYb0MBzS7ugnABio24tZDsSFQ0bImMMFQZBnoZZFmOA9sZuvPpThTOJAOlTgXTj%2B0aZv53YX5VhkT60AmcCrXV6f5qUugXtVs0JjqU7ubXpCAOI1cing7fzf4M5gGbSc%2FtjRDbvqJNTD0OrK3zG3tfJImRM%2FBWDIBCd1%2F8hp7X4FS9OHQsI6h%2BQKnB86azby816c%2FAlYvKgKJREnAcolInRQwDyUR96h62kTu61SHNtnElsjLOQHT9SR2k3iGwS2dBc49OEldjEwAjJJpnIL0UfSEGv4cub1gpQe9DtE6%2Br9uqS3kdyaoXKlDQ%2BQgbshMSbaqrJyR75gY%2BGaxXJaMYq7PMPL90skGOqUB0lSWDrjv8XCS7cqEedqmGcrWHWlZ6k60OLVVH7pOwk4tZZGIEKGdA6epLlyGp2h%2F7q57nL%2BgtryEycLND4sboRj90KoOKuKOLgPlAZzXwfZcTrOTEpvQ61%2FzauA01w%2BdVhJunN2kLXpGucuyWtJayEgHfT8vu1ygfiiY%2BqfFZt%2BJvp4U1uKumZdAOi7ua7RQb7GVt7Da%2FdmgGLCgK29S2olJN%2F8b&X-Amz-Signature=c2f210f4c5a1ed273fd394f02fa5acd66e0b6a6393762ba2673a1d515fe87980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
