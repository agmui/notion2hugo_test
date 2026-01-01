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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWC4EOB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCrEn2fJIh8kPVZGgW%2FzJGJxxVAP%2B4DfLdxA2UiBMWw7wIhAL0LuDHnbtNYL0Iuwhpqshgaj9JsLtTOdv%2BrIBfqCx27KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFTx%2F3RaSB%2F5NOEJYq3AORUPMF%2BHkwFdBScCv%2Fmpudv0PpfAbwNzSkrW%2Bcr1ny6adIMmuD4P1aUQBKpHAvUcKQMRDzsnnF8tAuM%2FXLtR6gAC9iJ2r5%2FsY24kY43PnAnS%2FZgHgIKESmwx8m0GQHgXRjytVYcZ8704Izpuj0bVypAOi3louajwcHawM9Q1I931V2KudxwZKPdUQDxQV084yxMz7o0K5%2F%2F%2FTW6yJGNUTuvhbPJzq4QJZVGqQ4x%2FxmdfMr1nSwhT218COc5KyBnCCQl%2BKBHSPmZ%2B0ANbNgEsDrTZ0n3K5%2BeEtogOLRfLP8dottVO%2FbiMq7Hi%2Fz%2F0BI7%2F%2FrlUbvZdTLQK%2F6FaHDYlZPILQI3%2BRK%2FhWOmztwRFQfKebbzWFmZDifdzNLEELStdAjruAPRQkTlaISUwM1C6QUXM0jJrrivuysWkDuVrc7M%2B8f178QbOtGWvFjD5Ctx%2B6XTw4bnPR10BiGQeJZaRJrx7kx7fkXHZTvtS%2BkBVYGRbn14F9qB0fv21SWNo5I37TN7enXs8%2FxRWgVUezfX793e%2F75df5o71qaLNbXW1su3m37nDmLtTsGkQuBkkt8957KCm3%2Bv%2BjYaVJBuwQ%2F72aoVy8v6wtDNPNqAqWT6NzAasrYA6HbSsUxz2gpuTCWl9fKBjqkAW2tfYyD8aY%2BGFtAEdKhE1HUpU5o9gP3N7hzgY3NgcyyKrW1d2Cgtx8%2BmVkFR1RzWE0fXKVpg8Px5TnufgRbEbK0tijKC%2BTQxoO3iPaLn4%2FXZ4XRZzPNw2sANCXqHNCOpUQAnW9VohRFO5N5P25wnzQJmHMMXvd%2Fbqadm0bZYbiPcLDGMCgUbR5%2FcyrqlS0VRdvcLE3IM08TARhFBiq4aqUZ%2FDq1&X-Amz-Signature=4a83d6dfd9d0da2c1b81afd4be99de92b98c010df94a32c34693712cd152ae79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
