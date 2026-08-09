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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVN3YZMW%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaZtDT84vNGkWbWQhIYQ4fAKM%2F8ou1ggnv1a8pE%2Fx3vgIhAOz62UpRVgnq4tWqUxtoH9oviUV9P1d72fnhK6lbicIOKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW5kINg0zwiyfB84wq3ANe2QenkltEX4HGmQATZKEg5M40lqoi4aHgCI%2B0LgZoqNakuz6nLDhtyV1KQU2wxyW0RaWqerzW47XFV%2FBzsA7qOy4WN1hy6K6XIV0wDAbx4kGSqzBD%2BbVyA9CBCHF%2BbYOI8jQCWuvI4HCJ0E5Xmtc7m9WC4%2FklweXEFPZSg%2FpdeO%2BQq2yA8tg6OxWw8NClk52yk9fllnvrnSz0MqSoW0MSjb%2FlASpci60%2F6GFa5O4F9Xzc4XQYioBJCjV6T0lhG2736ya%2B1l%2Bz7JLEUi6zzzv0uepF23oSCWtDWli5MKq1xo5jz1QXjitPzFtZ5jJRQ6ygbAGo6O%2FdqA2xRRH2sE8RfaDBzg7YP4MpogT60OEQ7rzRH9knpw2kbUOeI1eVGyTPkl6xTkzhtYVgHQqhc590pLerNCk8PbHJEOFnGxyIPH%2B8WxbRDvgkgl3DsvYXGwNsOdAyxuiX4bjFaUFJiI%2B8okVp5v%2Bad%2F5YdFD0PWZdDLX1rDm04mpNHwa6vUtJevY67IWhA%2F4evocCcA6OGX0sosFqXfbPlfU8A7nt3fru7%2FDkvkRyYaM0bluKzM5PJbj7MWjDhLEGDEIxFrEYTX4Fj6UkfCwkuicvl8%2BTWAs6w%2BuHNXUoQ0uFh0KfyTDB1d7TBjqkAU4%2Fsbs%2BYuyl7ckSd1K%2BYKAwx0YyZsbKd3Bh%2FxEIGMDdQ4NgGtot7qadSBj2Cxr%2FV13z6%2FR45SSob2MHAHFY3DbWnd8N9T16gY5sWHlRpIfK4%2FtOKMqvPq4JqWMzUCghVD7WSo6YJChSWXtYi8Pn9L19rnojB0mDSpXGY%2FcGSAlkHuaTqvPN1MuL3fk5RzXUZBGM9AMu2to6p3qS2t1n4V9PeSn1&X-Amz-Signature=3382a2cf2ac8325912f95183f2a133c89da55473afeb0ca9f6bbd191478dd6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
