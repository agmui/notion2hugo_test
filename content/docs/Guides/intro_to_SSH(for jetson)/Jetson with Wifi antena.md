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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSJ5L2CR%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkit1CQmOnXo5ftoVbHgZifDxfvlLsokbi5QjXJZzZEAIhALNCScsVrFqcSCnB747F29fJQyaSAu8IE5mQNQurXn%2FyKv8DCCEQABoMNjM3NDIzMTgzODA1Igwtmuib5V4GVfsqT68q3AOfLjT%2FhI953CyUyyaNxBN7xiLskrPrqN5JUqOiIaxe57mShIZxEQlCjsfOrKIayChOqLL2KXRc6VnI0fmUN64fzJVHqwbjgH3oY1eiNWli6Yj926PWB7abMxp9HBSIIS1HcPao8HQejgfk7n%2FBwFiHIiGzaTvZEtjp8kA9SYMGxA6PJ%2BLHyPQ1KeO7yEUGuMPXu51GxI8%2F0RLGeViut1%2Bfhqksy5ZUUAZ%2FBi%2B8DOxLrQ7ldkBhHIumNYxtHQQ0WSPuNq1%2BIwSOaiawAcAxvr8SqS9R62G48H6lp5eL1GUn29D%2Fx4cyBHzO5%2BzHa%2FukudCDq54LXOC6IrfO%2FM%2BMEV5%2FabpaelUCcZPRnHzcqg2F8O6cV740u5phnVjqx3revepF2Ri1YSBzsiOCTYfXXfsYxjH66S6S32%2BqlQfpXQsFXNNxqHQ%2FCcBI6Y1PkieLLlp3T6Gvh3C0%2Bfv99DxPEVC8i4UyFzHmiOU74PU%2BZQeQ0QPVGJPx2eVtEtifDUpiF2BbU4%2FP5RS5l492Y643EOlP2vcvIdp7%2FhAK4rkOlDPaV9InuZx9738Geelyha9a%2BBlOg3%2FSgpsi%2FGW8HVeGNYZejeCxuQBCAygXsGY8Vr5EQlbulAwA6tOCb6qsBDDs0Y3GBjqkASB98tpSuhRqA%2FPzZGKq2j5oy1hnbbpGcjsdtiUNo%2BgiJUJjaFavCipaayMm8SXM%2Fr77RSsoXYm2snrwxnXxww0636S9eWDb4Epn0TM1Cmgy9IO0SKsiVpRZdOAbN9mz%2ByetNGjEgVKr7Mf6XBlJfYAL6OuS%2BUFknqLCZgFxa0sb1XI2x0f3M0bb0qw4DuciAu%2B1itRC2pedr383DcC41ORvk8Ng&X-Amz-Signature=7ae8d982271c4b314e1b4ff3095c7c845d83ac0ac27c026d5a91b6af1075a759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
