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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP53WFAX%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICefba%2BPHI7bVgOv3caipztES5xl%2B55j0D8pRmFQ5ZioAiAHKS1sW8A0uNgGL9J7vphiW7TXt4DPMjGHnDdV3Y8QeyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B3J9G%2BpyG0uPre9nKtwDI1oM5EOBFStzwcUOQm6YejST%2Bfa8wsb4tMQPqwL62SBYJDDHXsfEeFQlIGMAKiQDv5ALXTSr7PqtkvsQsJR0yVA%2F4mLWdiyk19QKms2HXHvUUoNjM5r22mmf80gF68n7Nn%2BpbuXkXhEMMYfEfmD8l%2BKhg6SwcoINdXX8qXbew%2F8dS%2ByTXWqoxSxF%2B3%2B75gpTnNxfqFmTDgmeWNrGbbFT7N9cjidd618q1HnRjHeVQ5NYGWpVwl4uPI7pA%2Bm7Th%2FJqxyBEK6X1G75bqGIn%2B1yVhPaBKgbmKFfiX%2Fng4rObKWmxKyO0jIB5bQZsTu73EkJLOvDHQCIyLsCuFVOb%2Ft5nXfpos7kPnHFhwDmkdB8w9lRTgH4b6tlFrmusD9Hhddsi7uePTEq8OAL19QLJNzSjlFecXi3%2BkuJP%2Fw54hwUZuWKIJiM4355nMO%2FdOMQLFKI0%2Fv%2BPP5sFxMUSOBBMEMGusnyUBtSlB%2B8eDTA0g2%2F%2Fk9Ar7mo8HylvWwuB7mHvECv3waIZZlo7w2tiTw1%2FS9gb83dYQ1pR%2BHPXKhnGRNNmcuHg2P1ylMLVkBikYXis00TT7uQOeONSy2aXnIKiiV%2Bist97U95IA%2FslAuDlLIScZa9hcJg78RfZDNdRRUwk5HGxwY6pgHRp2HQIL6rq8oRkhWCa2okJu3WAf%2BWVNWSpeP%2FK2L3RNwvmvLB6NnJ3z7UQSYujWP0q7D8Gw6uTZJhF4eVwlyu94ZPf8ma27dVkQTvsr6KFjWtQVFI2DzQ9v%2BBU5puGkwcsmLYIH87KASGL7G8M6x6NR9NndlDEJy5alaQkcHQ%2BPQalD7qZYf6ptn49lxxocTFs3BbDl7WTsrA7BbbxSagW2At%2BGTg&X-Amz-Signature=c22c340ef9c099ae05ea12566e620dab83f2d7bfa6e5f5b72cc8eef1c35941f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
