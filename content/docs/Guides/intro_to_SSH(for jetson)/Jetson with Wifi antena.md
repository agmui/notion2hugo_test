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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCYW4MC%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBbcpjbCMJ6dIibk89lscTK7M9TeTEqoTOaYe87kTyR6AiACiH02AcXaVa9zv%2B61k9cS2j%2BW7Xyj9t1Y5O0dooTVcyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcnvwVMwIogwSQZdKtwDH7epCUpfUCOY1Y2sbgicnNyVzoGb%2F5YtmXmHcXcESmN0XE9sTfhrk1IrAV%2BWwRGRXFUQNve856NUmJED%2FriWCSDc03DOmOoNjjXgg9VyNQVNnupuAY2EPXyZ1ejyppHheRqlW8Msb4Ah8Me3h%2BeQkMy66BekGoXMMVzMEgQsd1PXctv3TVgZ1QSZeM46U%2BdLollPtg3JBAJzx%2FRLX%2Buy85j01eImeeanN68yoOkVPnEQxKRsrTwM2SwRqTBZE5gwNypYRcT69EPsg8HdL7zW4HkoZX8FZxDUDpLFKCmhXKQL6iZnqY5p1LsaruoXhF169Y%2Ff9%2BJ4Eepx07yBpTJ7aJ6q3f%2BbC9BB%2F5jQLGk7nreWghxo7UpqIz9JT9MQb35zMbTW%2F%2F1UU68NdjOjTTgHS%2BVsbNoqVE6kDQwoaHxIcOY%2BmAgdK5ZVEYMcdh5lfTsyBB3idEUoPB44fnxfw68rdrsXNK%2BmrvxMsLm2ufkcwtpeDnX%2BFwNbuAuAbTwx2y%2Bm2xeBZwL3LbVbl1XK%2FxT%2BbCgtDzIbHwAnfcqEnb0mnaQlYL4GnjtI8k1NSIwFl4ohVMP0qJswBalyRx29NoRgYV2XgrwuXZiIMeQypCh0CRRwZxg8KfSYSIATDeAwsISMywY6pgEj405loABHISaWL1ODbvg7wDSYAJSwvvSoamHyYJXb9tq%2F0wT5E5lZUYuAnPjLrlFXj8TeZb6aMwEJE%2BEc2jgAN62XSuMbaIRF%2Fu80QNbjrw3L0VBFGjyBsh5nLJ68y%2Bz7karih2fIvzN28pWl%2BY4SAsJBs1ke6PXmne1%2Fvm1yrTr3uJo8aNZEmRFEtbWwNPsP2uy8T2WIxTbOhymmGg6IS4Ys7XWD&X-Amz-Signature=8de2d2fa1e3bde8abd26240b8d2dcbbd19c05f945950b13040bfd47ea18086a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
