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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2IKWGAO%2F20260227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260227T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHtDHLocqpQDevCANtjqiuot%2BvmaGST5HTNedjVwZO7RAiBbS1KtWHLS2tq%2FyZt%2BuAN1qWggci0zfWbDvHSYOd8SjSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMu%2BRZZJym45xbiy%2B1KtwD0YxNu%2F%2BRf%2FUPSm33MnIGae%2FFc%2BpE%2BgeltvwXHnHfP69Gh1umiipnG%2F4mKBZvvE9IztEDfKEqCxEyTc19DzA6wypXTjDuZ5JRRNTDAWnDczi6%2FCqMHHtWwhGoDYm3gc6C3fVdz7qIP%2BqlgBbN3ZpIwC4nRemnu5BC9zmpPc%2FzmouN9FDRvNNQmFECEvy%2BVhncEnieKXqEverxt710YJzLTCcIjgB3RigEwXUXtd%2BFbQPgINcpvFwEMzTMIN38TR%2Bfqr7ClE88uz5KJN7v5Qmvq6k56fTGP%2Fedz2VsPTrHtWQFenaFWSk2be7YJActkBzwRv957u%2B5kBX9Mhldq8V9kB4xROe050mAn5jdeH08uKzkgMk1wYTMBLsIrqWcAmRczifzndS1Qcf6IoFEw51J%2Fk53uN88o0d8OS1TxaWsUtNJo68M0sSmVZUjhfscdFp8wps2EzoThzPc%2B5KaXfgKNfLEketSiW1aDeCBVeATapkxp9O4ggSlnyC5TXlEIfrH5RG3prmrJRx2Rjf9qwbGugCN2WitIGO19VgM9ZWSy%2BIkZNeRyz3K7SslgEypgBGw1lY3MMN41btK9Sw0RtEO%2F%2Bn3hlaPScf9N9nfh9mvyfquFl5CkBEs64vG90Iw2dqDzQY6pgFQXF8yhOyJrCbJWGmbmM%2B2Qynw8en4fPGJ3cnKBMwxjs6tWratch3oezMGdJqLrj%2FYWng8Lr8G4CPOqRQGCLrjt4q%2Be2soz58ubjGNSp1xrCZXbtHhmLSUpK%2F0eTcZiAxWYl7bLKPcZOr4XXhtKZM3yRul7VjfNT64Z9%2B4YNt0LJxSQ227La19kjR9OIt8cbXIXh3wEKDgZp5sZ2n6ahv2UISpiYzI&X-Amz-Signature=9193d725b55dcd899032371ab525ea4acca407ed6ad562f0cd5d0507b286069c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
