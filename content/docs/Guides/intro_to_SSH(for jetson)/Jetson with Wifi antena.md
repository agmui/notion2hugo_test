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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YHRHDU%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE06DxUgFAXoS%2B5mZG4yY2dKByft7MUTmgc8Lo6MUYasAiAMREePQHWDROAiUrUg1BBnVaxuXt0z71QcOzyFKUcGniqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLKCrddFY7h2fjBDMKtwDbcxkFhqOrsQ2YkBcoJG7O63NWKu5wk3hnerKV1tTdfgudnTtaQInqh98gvuP1%2BT2LvvAs5uxwAcziJxXwFapUbpvOX0zvuVk0fweOiG7f5NX3vkCIzfSiMQoQ8SacEouvdhFk5MwgHgMpirNvx%2BRygrCfkf%2BDjRK9dgk3D6gMx5MoyBqUPxfaXnZnyGx%2FIiJAhxRZgdq3zR7a8%2Bv3Fj2yglVSY%2BIyTddLyI6lw6YVXM0finMqRIni9HvxV27rzCli1SvAxo8RgDwGpHfh8Li1UUxQHVlvVqCMS7M%2BPPA7M%2BEKL0eYCZhcwrYqRl63M0DUr9jTAfEaLMgeF90CuKz9J8bTJmXvzuytu1dI4L92jG59eEuJMnH%2BzjAxN4sQOI%2FhE13hA7L0r3mb4PNzoxcaZInuvXj%2BXJ5dx8xGAVHTlV5kVcVC0VHPuyihwepnr4PCSUj5TMM8qjRDz3qQDPyxwRVxdG7%2BSFrYF2FqohEi67qV2E%2FzDTcPY%2Bttkyb5hiJzJ5MShM1qPtbhw0HqKxzWWOIRmN4Txj3tnKTuRu8sYTwq4viMbPAPGO5bFxOD3BGsp0fHYW5JLrnDByfWJ8jfagY5DIjcAock0Ez3tjKxsU%2F6YousRvkbR2GTFww%2FuDpyAY6pgGwENb65YwG4GXmnnxS9loV1NTOGUzVbsLiD3UAqr%2FBjym8NZR0KXKpEVlbVUM44gitwPr8CsRbjkNdi0M2Y3W%2F3riUS3Mbtud3Hm9a1hqntZSIr3qhWGW%2FLN0hv4AVCq6Ue%2Beo58A0tNQr8o1Ge9S%2B5U5AfBsdS%2BIn%2F6F6Cmtkx%2Bd1IFlQJdMFrnAs9Zfo4mPga10Kn63D3gswS3pUEDbHFy0g7NIj&X-Amz-Signature=c13c4222629ebdf93f89eea4bab2a3f048b4922d202fa24fcd7db523037d31c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
