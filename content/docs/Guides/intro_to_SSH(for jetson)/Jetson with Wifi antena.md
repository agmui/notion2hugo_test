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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQNP7CT%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDCq%2Fvdm8xYNpXGVjV%2F%2FsDCfZ1XjKpUmVHw31eylWr8vAIhAPHdO%2BxuSurLXufepOkSsXgcB3iP6wR5UTIiGsu5QZywKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTapjYTl3MuWAqD1Uq3AOAefF0Us71SvSkWWVsA12g5Iwo7C6YMIqLvh0TYYhhe2I4SQn45%2FgyInrpaeQMUPDlLBDcqCOrjym9F3B5OhRBm%2Fz0mmyNf5zB9fLN14HSQEYAUi7L99EnPWW4%2BJBFKfX9IhsOe6OM03Of%2BdM6Adf5FhmNk6Z0kz64UfEcXdEVSg1Pt8eZln8R0pRoMgMIq1aQ26C1yag0W54vgyEjzUasTK97EMASiipq0FJnAbZhmGJWJcfuizGmAXGLUG9xOxjwnkOKowl6Kq%2FlTqDa5YXH3XxyAS96WaN9EBV2Lg4FzvAx1mpqG6WvfCe91S9zRsvdUBxHVrD%2B8c7nxhuCAWRCw796Z2X6ivDcgI1hOYSZe1soG54BJR0yNjEfmmGzZhtGlbQVxRaMWtANPnDa0a%2Fz5TfsW6txOorBi2ofPc2hi4G5goRDSb%2BjlyNzuqRTwiOKnlWBOIa7rRWvqJRKorTIozZDVJxLAvakAxv%2FaF1unybHl7GdQk1iz3h3XhqZgDnLNZVbsBFDK1fGfDk3J1BJ7HBA0U9LE82HVWXlHC%2FUnp4zlhdKvdrT6%2BTmW7s%2FPRX03X%2BkQXygRLExXJNzDvsLe68VZ9IzmnF59J0KeFrV9ZIbp4S7Jlp2I9tFdTC80bPUBjqkAbOEb1oXkTWutM2UtrpJSrnTJE5EXo9HLqWiEa5Lpm8N2du%2F8MV5ZWpNAKDMnbN2uL1rWeC1oPAtPz%2BTdKXoykLota4pica7%2F4kNTR7s4dg0POEG8s65RYrGhXkZC0cY96gQlttVCO4vgyyNLHUYTrbbt136YHUm4jm03kgORORUYZw%2FcG4GH%2Fd5wgELUZNqmvwXmgc9m941dkOMADhEyYw33EN1&X-Amz-Signature=dd89740dac69a40596f1ed5b96ce6b6acffaa223dc27e5b3dc2110f131957bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
