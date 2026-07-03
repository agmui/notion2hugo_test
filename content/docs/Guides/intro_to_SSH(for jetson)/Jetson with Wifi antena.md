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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSRYHADY%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDgMrOBURkCftVOZ8mkY2jiBSWr%2BvkGm3X7kFzS%2Fua9AwIgI2Qp91ynwRynmBf9ke4avJwtJmW5sQ2oOmD19zro9ysq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDC8VsATvvBRaMf31wircA0SQXbZq4NqvMaq%2BlUefk4p2cdqpkzmbxBDy5t5F7nySBRIcRnQ%2BjdSUK%2Be4gN83g7V2yEbrqAZUZSG9rVVyXVEpuSAyBMp9dBuDBLq8zuC7nKohGF5HIvzxIeKk3mw1O%2Bfxr3DOhIXOHqp%2FHBRsokcXVpoIlBhmwtMiBOdWRUFU3107ZxGrlEg3p%2FiVIs1nZyjmEhltH63x7wAgErJ%2FuEefTNPtTwv7wy6%2BLOZwHCUyYATPINv4LZy1l%2FHFKLjOYhzMqMLTqnKOGR3CTrteqnRwi5i9dQ6%2BokxI%2B9pc26KqgPAZ4%2BoBKAsyLBT8yhAjFQFuBPaUFm3E6I4CfslNVGwShoKO6tDJiNd%2FzKqisvnH81LHuH0r4UOBRvioB6CqGbr7xa%2FowpCJnpBmhpssdmoDcTCYRWO8au1QHTAQWhEr0R3ztT4cfTXPVboLTnVMQmsu3qrlo5yjQCsOKGwDTsMkeEHLZVbMAXQMXw1N%2BwNBk24ruGIqGDEZ4yTzoEhH4ROQVCA%2B87pb7jcbiyx0wEYwYwVs0ZsbITg5LgGdNYwRblwLPJgZjCLF82g9YssDdUTnz1OdCXheomiy1K61K09MAaKRmHuwBjEpJFRPueQZxF2dCvEveTO4JktNMPK5nNIGOqUB9xwpncw4EpYzZgA96qjqyJeyjUHgVV%2BlfouTR3iOrd61aKXAcpv2K2BmYZQupLO1AwQoJeQC5V0qXUomXYYyZ%2FTlbiXIzZGQHdq8SrSpXJyC5CEfSpVe1Hw3Oq2BgCH4ppB468%2FK8teGJ%2BWkGQFb9PYLx%2BZG5Dm2UEZyL1xczlQaZUgT%2B0cgZ%2FTwWmpvNarDvO7MYk7XTTNgzCbhlrIgzUn6kuXD&X-Amz-Signature=c319d43aa189fd7305d3fce088f85bf2fb3f9ea196d53796cd00c31faaeae81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
