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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSC4M2NX%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClF4Wyhn8J1L3RhvGt7N50XfdsxX5TrNIIAW7Y6%2FrpIAIgd0ZlQe8WcaRDcuhyzy%2B2ZInWk1MMNpDMi3q3pajolaEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5dkayUcZR0fwYhaCrcA5HepwjIb0nbmyM%2FA5h6N8XbJxm4j7TYb%2F02ehgL9m8eiagZat4z9kFLp%2BTIRn2H3tCi%2BrguwD1gCzFvBNJ9GCoDZwYSV4AwF8UqaI9kSRoNV%2FHNsTKc1RgNJIbdcDeeF4dbrhGdEWXhplMXTaIATdVjELqJwaroJelwTPVBuODXoJK01M1fYUQZ8JNjd3f50GTev%2BB6OiTjtRBUIHJM%2FYw9jRH3IDh7yqdtrN1CAJ%2Fpfiy7QinncYs%2BvWRjZ%2FrlFvInbXu%2FDP0NBSqN6jiL6JabFjut8YTmhCFSQx9%2BB6hhpBOA5q3QQSpZEAEzzSp9WphFKzZlzemugmRU00%2F9Ird7YF3HtNoIwy85Y4dW9AEfQSEmzTbY21j622qRslxDhTVgjc%2BDB7R9elrBnzMpGXfX9%2FzGBrbjPPiWEH7Ejjbk5t4n2OasCauSOo5vEvj0cdZBcB2GbDAQWMT%2FUgRpcNWPGMPWnbYPm%2FG52O5QQNgKgN6vCGADXmQOOkrGStccXYg9VHgGzywqI1gVWAfJ8i0AjLG6kxLFyz%2BQUSg4c2mF5Lqka8th09L1m7F6EJRHbk70z4ZzJsrjtxtgIWQHcHnd9EnTzt3dLNXRzPiBxgah59enS%2BWV%2BUG%2FTkgOMPi%2FmNEGOqUBDC7unYIWLukJHpVSgJ2IOjz3aKFLtZUI8OBiasq96oPQTgqIjHTndGkeN92hqi8vg9Rp%2FOenMidVp0ty%2FIc0Y8CyASnMbDiu%2F7Jo2z%2FZapJyiGP3XOpwDY8oX%2Fi4A%2FR5mBT7C6yY7UEtB9HVswETHG0ijLdrxapH36Rbqf8HYaSoGGCqF0PJyvjw1fbzz17lm2CKp8Z1hKUPT6bjfVM6LO3nJJno&X-Amz-Signature=86260aa12fa4d133398a5204f6b4340cceb94fa2bd10ae6edd1e2984fcab8ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
