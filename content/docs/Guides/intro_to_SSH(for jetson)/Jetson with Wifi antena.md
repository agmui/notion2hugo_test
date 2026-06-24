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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDSQPO7%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD1hjpEGv6whrahmzlLXgzpdffsGHFi8ScPotijjqad%2FwIgHOkHpO%2FN4znxQaWl1Ix9R3llLYH2s2gTieXPhRYdTdgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKMBGdDGz5R1rjvNdircA7PaNBuk1b%2Bx9YMNzvQ0zzF2Ee%2BxDDlAn32JtnVWkcaW%2FpP706mPfiU5lo83lXVtyUbgCyxLIPKg84Ije1eZR6bCWaGUry9Ljse%2BOnGyC%2FXfVgv87A8w%2FSrU90T%2BYL36PaeBPsUA%2FKPT78joztT3Zj0%2FPsFdliCSeDp8INOHNc4GHNft8v4OyP4dm3v0iBu%2FrVlsSfEiR%2BM4pAspQMmgS6J8rZQq9YGT2DlVajbMGzsI36zbVzA7i6Hwx%2B%2F7bxbft1ZKNRYe%2BMBVWvf7LgG3ar3hHhBfTIB0T8fsKQYbTmshuHIT6M%2BcQ%2FJ%2BrgEZuyOorzwcWfeaXAAbLPG%2FyCcikihf5hg%2BH4ZtdAuMeJLclHhGb8F6zgtfegySCWmiBi%2BiRqOnIS8J0WPamqbxWbEEBi2aR2QdRGBpGZJzFna9tX9OagB3l0R5%2B7x4rH9zLFgpBmZE2QRzMR%2B7Qf5bUGYfNZNSYwqqGWgaZyJpX6soOcqVdACal65dzB4rFD98EcPlSS8bKR5fb0iPHyAGGpZIOEEwhrKTXL0ZgiBVVo4J9D65w0A4GANg039W3V1AenxVFjY%2F0P9myFVcbofjBwdcKV7vgIsvoTYcJja9rNcjP3gNgxzQRZdg63bbPF0nMIDw7NEGOqUBwGNPRFUm1d6vcVLFq3DEadCBAFVHHi9AE%2FjicDMvfsQyuVz7MB%2BjKSJ9Q4qig8UHZ5Y76Liz%2Brjqu0FdVGjbP%2FSEfMuPiafd45VK7OVg0SuExUhx1f0lT9UUK0aHR9H1p4eFs%2Br0LV27qnr2CaVoJoo17M7FFLpV6RP7wY4xU%2BaGSjW9ucxoztIQ65cUwXFVwR0qSxNrDKmjOMmI8myohSo3KF0b&X-Amz-Signature=f77030a5090106d100d7cd9d1b43006a9b90fde26f3fb0bf6c8859bdf81f23ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
