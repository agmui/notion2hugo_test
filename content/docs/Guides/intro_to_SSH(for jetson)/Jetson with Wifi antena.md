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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV53SPUS%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOMy9MB%2B4%2BYCvfOdmFh41vAZ%2F6vJmbejvbe6WJwK2JzgIgULtAxaXgPPHytNUgv%2FnR17G0J4cTiNK7inIZhV0TJZwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCR3iFpKvi6I4WPZryrcA1uUO1v4sEavSTqpkQNUdNZM28Ib%2BUrqBdxhbUyC9gfiL64Tsrh5ACSDFPgj8Ko8QtnZyQ6YCfYgp9PW0%2FoHUSLYOb9DL9i0G5TJzcjyosOTxTCrjFD1%2BMtGnDWdrXa6%2F5x4kkJbxowtucvVr%2Btemc7q0HBzVoeo1g24yRwuYYFmDJpgZ%2B8MLp6LoycFYiidZ8gKMdX0EG%2FjiOYEPNf5pW%2Ffln1nY7Y62Qxj23wshRnst0XnTwxlKnSWK0L1imt5zQANXtA2QQI2tC7yO22TZqUOTzVryl1mFK%2FFKRmLxxX7Y86uEhbyaERKE2CcV3zlU%2BH2khjIxTc569Au%2FiIHGUiH0d6e4tDLN61GYYRJkFL1cXnBT7NKI1sYqS9A%2BdNJ2tEMb60eBrFHJOWaf%2Fk%2BTvjdPWKzUj9Rv2p8L6JD%2BhDXDa7%2B%2BugtmQCD1McIddjnXIyeaDN0uwVg1iZ5OMca%2BcCy89m0vN33GCMPeH6vGF1MkGXyCy%2Bdcr5PyO6oIuby2sxvkF3pxru9tsiHORCKbRwo%2FBE4%2F4w3l7Cuw4FH%2FcjLw%2FslzOo2UcG9m38YjjyZroEFou990HwZaYmYZpY5AsOeTTnFyjc6YTB02aHghdyh1%2Bws%2F8rcYEwjjGpPMMb%2B388GOqUBcj7R30fmMuBwTWLI0wjRsgWqEy3btQ7Rx6HLwrS5ecO4sSkniCZFbvnXKaZemWpnxPexNj0eocZwdhX8ffGyHX7vVlGQgJZSNucbvmVJ7X89NyuLXq2%2FqUAe4EFYJupVl%2Fu1r%2BHc2VSYWWoYrF9%2B4J04Mg4CHJRranRtGG50F7i5hZOAcid7JBqEKa8w4%2F6xUMiLIckUGV9m9IItHOqDqmzY5noy&X-Amz-Signature=1b4c77d81a1d438d633cecc7dc6033329cd4263a373095a52b630534a5afb21d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
