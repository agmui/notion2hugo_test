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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCMNL3S%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5PzutDsO4ihy61oAfzfOuojdhd5HwoUGtSTJI4kvINAIhANTjkDxEKvqdl3v6%2F33oximphOumIY3yZ94ogs8ANeCdKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGQaRtS7%2FOhKSkjVgq3AOCeWphQE%2Fm5bwQXSJa2F4eGYyS7dNNvpKqovF3tAHriZDH110aom8uIh0axZCqMmADQRRtW1Xqaf9S8hkFed0%2FtEHqj4svTnRWboEn3yWIc4%2F8zjPMLjidhrV57T28L2Zn1j3d9C5xcvyUX3veYoYdJwGFPBlDlS7ou6hbLyCpdwoL938ocj6woWdWfEhOODlAAsAUv4VjVFQJ%2BX02tnkOJwcztPgvuwbf9kf34rg4DO5LlZluJ3We0sSrkmBohGP2UnQ97y7AHAlWUg4wI2kQ3sLaVa%2BgvoP2nzp3Xqq%2BlJUF49IOzcWqFw8HYd4DeFGHMArUV7SexCfoGw7lwlgwwV7QkhhObmX4qAyQIRw5WmGNh%2BCoEJOemk%2BFrDzUJ6FSvmiinSSRBQCQH2KRaBwgob%2ByZsCCPDkQ4eWctl28t%2Fp%2BXrPTXWJflVT4QUhPjsqZuF9MJpE5mizowfcGjFv%2B1QzBDvqFFsmyMnpBnOuy3ri0tzibYBmOEdggnMQmnignGTlzq8dDzd8YV2RELiAFQMV4cuh9sa40JPiUvpsC2V38GnMH4ZanqOPo8rDMvwA6N4EPTPhMfH9Uxz7jxUIVubXoYadJ3KQ4bxSghcWfo1pe2MqyNsvnJOv36zCknr3GBjqkAd3skzgbaJ3ewd0yOldE8VsY8dhgRzPY1fQbg1%2FbcqUFMCtsRdqmuQ2OjadlAXNqhi1IDLpkbwj5olwcpFUmFVJskyU9%2BID8Ehxh1y2jiqCEkM5DJOWBfOOptQhgnIhW86IZHkHwH06ZdbiFtx26AYZIVaCFucUwmkrqFZDZxPw2xHdlXzhfgDQItipwLWDsUXYnmBJI0TIo4PZwoQx3zMBJKSi%2F&X-Amz-Signature=e97ad1bdcbdbc43230013d16b968a24096f1e77dc190d6a3e889c8d046267cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
