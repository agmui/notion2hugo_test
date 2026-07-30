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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WYZPSS%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdUpVAKONIZHfv%2B5%2B7HHWzcgH2s9TG4m6cpqlb7viioAiEAxUM6BSGS1KjXxLbSvUTPnjIK3Wnhya16i9QGrYo3tl8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHH57eTgZBmSx84CrcA4Zti8R2%2FBStDuTGkYeOS9JKFfkAWn%2FQlmcd7FPDRAm7pc4r4MPEkHhRulglBSaa9tH5adPOPt2AU9MPD%2Bb84m3DzN%2BPOw56pCXWOs%2BZi3RQfqoPDpZlGVlNTO3qdNWXXSYKZtHPXo7wMQE2EGk%2FYnR7djukv0YcKnIovD9DoEIRtOJivZfHTw8V2lX3ZH4SpjdchkdU5rx1pHIam1WBC4bn2F1gh2Yl35xQlSsm6VhetuyRWkWiKZiMG0Hu4e7l8x6sqBLO9v5%2FzdOQh95l9b%2BzNRS6BIV8%2F2yZJE%2BohcSTVPNkA%2F2A25V%2BTkQxTRybaU%2BJaT14%2BdH5lMiJ95%2FWQJ7Ia%2Ftnx%2BJM0NtFdyNNHUyxfyyWsgg6gnVRblgklQkXaabwG8voo9%2B8F03SrOuKZ3N1JBiBSpQvlwob2aSsyoFb0eYvptKpKzvPQWTfpwwGiw1DVNyrC%2BvOZGIiALMju%2Fm8mrBZBSdeM18XmgEk46IEu2mcfIWV8XDsenZy29g2GtLwOu45OGXtpcahRP%2F%2BwCWzk%2BjGGCHlXyWsnh25CRpSDoBQLHFNp9CNe4iTedWwoQR2Pns6%2FKr%2BsB7XXxKK5sxb2BZ%2BWXGu1Cmi81KSmN68yEQ87XkJl95fosgdMLvhqtMGOqUBW73a%2B4%2F7CIH0tCusjyeCt%2FqG7XRbE6HGOoP21c3xfrLDotAhDIOP%2FF8Bsrx6Osn0mPJMwzNJZ6R2yT%2BxNOJSEdryU1p3qUU7Lam0dg7%2BTpUK7bims8rCcgxxp9aExMjchn2AH9LD7RoBAcBoLminktzqWJ8zbBcLOiyq%2FJIK%2FhySNap0u7Cp4oxoBjBIOgB5JFFDROkW%2FkFlGH0Yz1Hcr3dqGodF&X-Amz-Signature=66545d42db6d18994b779cf839879631a0d026a1a4a6bf04379ef6533d0ad288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
