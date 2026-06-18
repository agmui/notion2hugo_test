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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3DMYMQ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTCT90EXAyV92QAK8S72fUJlMulQOgjYreZQBPWUnfzQIhAO6mouKr1p3OXtnTlRUPjJT0aq4gn1qlChvdu4ZELu%2BHKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4BkNlfuUNdh1sB%2FIq3AMMf44LEqLPTsnzKMmrjfu7kat5VHfH5wYWVtAgHassKa7wIy4yg0QE5boNVicSTcA7Mqbn1ocKhfmd7FGx77Tfyh%2FEQJhZ8oqCNCs9lKB4xuhusFprSLdUQejIszkpgdPHotzFiSGFBELn%2BipMf1KDnVCcHxFBR1k9SW3HezdvjhNxB27Vf2DQql1XaU6Jn7TjU41PB1dKOdkWIcGYfQZ6c2tlSQdGdUZ11Y1o5I%2BHb6NllRG9FJ8JY4j2Bli%2BOOskB6b%2FkgoDKlBmbqHEyoKE%2F3Ko7mdiZZzllywkADvLq%2FteXM1%2FRU8U4rdwdu%2B68A%2BGSF61DIL6k7L9HcWUhKJimTVlUu7OfiDo5ykh3wzNyrVmwPwc1IIdXrrzGejmO%2FC5H9ObrAjtcboz6%2FfFcwMaQSINKaiWph3JGtmw8JnoxZiNoJ7%2BZ%2FLIAOix4YOxxrItHGc1XCO4%2FCG8V1E1g3y3OSGEkG879UuGTCUNvZ9JMUzog2lRV19MHXOZj7uk9Gv2UWqSizrsJPcjJZ7hhiMd0xaSRQCv36tD6xTeP%2B3w46ZuCevMUSXwwFWIJj7kTJrhNUr8S2zkIj3idlkv0qbjsBgbt7xkvblRyxE6LMut%2BFEr2vvfjrpZoFdUmzCmss3RBjqkARrmNSDAzvyyBGYAYjvahq781yzAj9a0jNq8%2FxVN%2Bzjcrjl5369hHQHbVOVTlo%2Bi%2FfdSFaXh4U%2Bm3bSXdSrTkMfwB4WDYi7WMEKsOvLaz4c8hLHCwuYAHoeLff%2FerVrF9AKf3Ljg6wKKLFyNKGf1xLWjylewa4r1NE1F%2Bqk2bDkM6uFYJPOPWD4lsAoCGjRiV0c%2BOWzcc006nufA5RpVdVFDaJ7x&X-Amz-Signature=c16a5e94d24ed8c407c488bf0200a12471e23e37ee5f3992f46127ef6d64adbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
