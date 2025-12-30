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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSTMGJBU%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTnRXxs42NluWCLor5RJar0qBECYReP0Onfq8N8dfwxAiAZChlx5T4TkeRNZ4vl5lEcH8oSuJDZNwT0XUZ1Ij%2F%2FeSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMINUnOn7OXIsDugWfKtwDzUiW5yNGwt1qedIehSQfDk4y%2FBq9EO%2BGCxyNAaBM1%2BUnqJOxD9zJfK0dyea0hWKOHvAe%2FPPSeMQpjQwG%2F9EMze9sNsOBPTsMWOEMSguZl5qsENTySxDLerF%2BNqencZWD%2Bin5nHPeihmDAdkqFI0gZUmK68lugN5InRLKhKFuOjJaYBC30%2FdTffAuwCeObqCYPkLum1gox1kxj6PYP8MnMw02%2B9HM9gexNinCCfPQbyTZRgwYMGm865Ou7iQSnF2U9zXRfkAhlVQtFau7Y6IgP%2Bq3fIgevhFMlKhPpniTV17jOoZpz6EyMhh39cP9%2BxisgBYrcbRZi17TkyWRBYdSKhaWXe7HaiwJJTR%2BjPdDSpUY%2F%2FK1TU9wS0lLrd0L0PYcJUIWkIqvqp1UcAJ35FFJj9eKC53IZNGm5RaObQtDVxx%2B9FpXiXhYlCPOW0fR9X37AIENMAc41bysonHfFKEhrFaKO0d1tyH8JonB9rEcxSOXvT1Y%2BQ7%2FLtxsas%2BkYj0y8bzHfANaCrcU2%2BLSB7TkYqSPK1kDzzhe%2FOOwtmJPApLf0fWbWWC%2FV2oUx5B7wo4Yte9ccCxThemhflT7JLyNMJQO8g0okf9iXWhZIvwZPDrKuAZIDOLjPaAkvycwrLnLygY6pgG0OtpIuCLXlIxMUCDEeOgvif48Y%2BBG0zylX1s9GDurDM5b20UC75yWeWXp6yAiS70pa298ZFgNa0%2FYJH%2BoUBhfMSk%2Ba845EiDpNUVmIIRcykuRHqCPJE9UrqkQw5ap35Ecm%2BuubeY9vuNm%2BUByOAUVmLL7mJt46peH%2F4PkA7I9uZprvOgXgmmbaT4pCzRFpNEEzeiqer5sLSEyfcGSgQncyj6z%2Bn0H&X-Amz-Signature=7bb807c049256cfe9f2e10af92edceb776b85c06706b5a210e3cae7c7efb7f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
