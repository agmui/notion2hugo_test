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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVIWFYK%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICd%2FU2ehJVMpR6%2Bs1tAeGlys%2BX2906wgcAq4fuehPFTtAiAm%2FqfGABK7OWFIWmawBk3kVcjby9enzEqwtg1v5anR7CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Df3Ei%2BQui1ekIbvKtwDrXb%2FstK2IRyC5GRqTknFB9U4YSZ3MDb%2FePkBpiwfZJQBDIGu24xsn05UnGTZI9XKGWOBbQvyw7VKKhE4gplmfFXgA%2FvBhkp%2Bd1IYcxviVtOSMjF7yFkTJ%2BWKCySeJ2PHUO0qdIQTtZK2rt8for%2Bu6cwwuwiCmTMc9rx36IoAsD6GzE%2FRdbU5iV7nmBd8jjpFYOyZWjriOqtba2c8LWzuXxnSBnsWTGFM2Uh1p3M1qF9os%2B3j%2BeYOAtPYcSSvYwpbpdwIBjYmaH9MCULQUZb73kndTEGb04WE5MiquE43ezC9oro6VhypAp4hnDGpZtawq5K68ZZwn6hx74zumZ3TQ%2FG42JP76pQeTwjFE4IdjMTx0GVJNznbOLYnrT%2FV9Q0r%2Fk4%2F9o%2B%2FKnFIk93RPaWz%2FhAZ5jUD943JMracyRAs%2BP%2Fms92Pb9%2FQslpVgNB8ZqcbXlhtOR0l%2F7KDp57mVh7oH5av0STckZ40szLzRXfrh2BsbdAP6rpiD3ODc3lLcOETip4QJeexPdv60gXcpDDKXFZQfpISSWgs%2BnzYvKjIMypx%2Fb3qvHamUZmVnU5KoqTNRIox463JytAH%2BMqErezkbW%2B9RSNqHKH7RxxnF1EHHU3varjDEX2t6Q%2FIKQYw9921ywY6pgGRFAF05ikf4rZgzZRVTOF3dRdZddZcKfT3841Uz4xU%2BFV7V8ADE1bMBXvO%2BV%2F3bFz%2FBV9b67sBXhnAFtVscuot7UCDt9T39ZPpQw6dw80re6d7oXfe3cPbQ4lVBAfsr0gpqS3ywP3YpKIf77xcU9u%2B8zidTrip8gJSkQfjRE9xC%2BjcAZF2%2FZ%2FrKxZrjeLd0otmLUmd9VdzZgSv%2FiInvWhyA806gzcH&X-Amz-Signature=84cecab5669de6536aedf35368e5d0c909516fd1148c2e293bbff55fc533937e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
