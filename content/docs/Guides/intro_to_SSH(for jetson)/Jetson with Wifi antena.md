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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHOUN7T%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHUCK1qr5dHyCtgFrqzPc%2Fd74N5kncyaqOvMEpHdHjyXAiEAwbMsMKl1BsUvggQk558AGWAysKuHHGU0ISzks%2BpYswYq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDqPP4cT0i3Bc%2Fv95ircA4iONZieTE656iL%2BVWoZbtej9bwfEovJH8HW9eyPsHRPaVAGzM802tz4jWIAUPJbInjHefOE0Ke%2BsquYnE1GabeseyN1P0TuslAq6%2BJ9Bc5nH5jlmxUjUPlOcMczpO%2BLeNA9c%2Fz7QtBuKN46oxTbvFVubUSyyZJYWy2pxQ8NzCs2PXyo1iYyH7p7urg11ISdX6yefb9HWoa%2ByMjCkM5u44mgN%2FNTbW42SefKD7%2FmAn%2BdJI9KQ3iRxNjAlb5Dw3PCFNfu4todSWRvdwlh6fxZGPev%2FLZaWhINSITq4Yk6FZDgG0dKdYL1LuJn3%2BalMnWAtDbJXC8d68jELLgJ3R9nD%2BXyqqFGGHln4kSLg9SfnW4VahQQ6RJEWfS8TYPyPAIS7J30%2BMkk2ErIooIpIDyp0RoOXzsiv7d27gzRvvcBfNYljpPd99Zx0%2FnmQaS%2Bj3APv%2FdOu4%2FTE7np4TIRGdto76i2D4sBAPDfFKx%2BZGuz8J%2BRYRD8ri44IitHh6DsqyBzog2SHkuLpI0PQMDZBAohX7ZchWAlgTMGb7HFj04%2F%2BY3n9gyt8Q2NijY8LutuLXzyJj73SFyGIFP0dq4WU1%2FtbDPgVmK0sZCW3WOhunJtGgmpqSZVwIKgbc57s%2B4PMJ%2FnldMGOqUBwLjYjoUucN8uzHfexa0Hmw0romO6nX8pZnFGIX9NnjRaNILpq%2BIz8OG0VcifJnz4p%2Fyh7geNTduGPArOhC8aMp5ZlAoETwBFj62BNKx75fr7whm8L7ZT9%2BRtdW8F3D7Nj%2BpeoHQoL2TGeNyyPy8PgXxroX1QD5wXLeh7tsqoOkNfSS8Gcn0cL%2BwqF0LzDQs8imvYgWa5ShCRJerXoDDDCwIoZ0MW&X-Amz-Signature=4af9897ad2e5556126e8a9e892a7ba444e61f9e64092bff88958e5734826986e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
