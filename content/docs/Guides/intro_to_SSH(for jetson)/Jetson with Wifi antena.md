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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTQTRV2%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDCtESTJFbfxkj8i7J5UCf9uKsseqO6LVzWZ0cSAnEojAiEA%2FUEzAaiSObnPj27J65cxZrHtGj86YJfWon4nGXQ%2B5PYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJu1rRhcCbO4%2B%2Fdf3CrcA7jACyB3Vy1o%2FFATQFNzdkBsFIDqZkVIMHkhcfDp6lThGlzIUYncwPitwCueKtKSpBZPs%2Fx%2BfQJsGXjVAHIaUpdoREPPScOfz0MD5pRvi3dHIX%2B2eFPw4Yyo2ySp85lIC9jpKGanAu6dBz2yCYTlrtJH4J7y9g3tra8Y%2F6lY4WVXxfex8VUUPyyXnPIwp22D6pKA76WgsC5tn6DQYRI81GAB4l835cSl0PahUJksW8wcfyutshrHaryccs8M3sv9Z1Y1816nyBrQuPvcBjtjz78xGVRjNDgk7MwWMXsnaeslU%2FY%2BOqTmK9bnkD5B6YuJX7Kz0bMqXFWRdkr4%2FD7cskCWHu%2BjDDYCo5p%2FJewGT%2FNiqmAjCGutuAtEstl7QxG4dfTndw%2BRGYhQKbtgb4euEc2sMHW3I6nqVCp27f3%2BBaeZtGPZcItJQpCCrEWaI0uJgEQBO3Deafdgl1Q8AKoluPsIq7MIQhP6kbqSmr48eKcpfF3B5UgWZPGl8FM5KJ63jPE1GKu9ja2lRs5YEVSbz26nUcNeVPor%2FL0O6thlGjj2xp%2FE7X9Zl3eKaQ1csj3BQfZLxwdCkckzWp2Ep0HcOafWSi7Cv5asGDXXPCpuYH5j731%2BP9EKE1nK1iK8MMmwickGOqUBCse29hdWkMEHmGEhJEy9lhyTwoamLE5g86O2P7rgVVIQPbyEGsX65l9OeENGSco7apENsS5IvQkQh6W19Px9kIo5gV69gmNONnhtNyGxF4HEfJfsJq0KiVzgQi8Ja6S%2FqDEdzn2NmeM3KnnBp0NBxti5JvS5vwiJGSdsijomvg5fUykCOSmvAuhNZjeLpoS%2FVJHcdWkb4wt%2FQ%2B6VZpeacilC%2BsqP&X-Amz-Signature=c172b6964732844c11c3696f94d4b2e0da567af5eb5db7e60acd847bd639d4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
