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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BYSBZU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGclbxOwqr4mbPkjaQVbCGqsSxaGpfkQm0kvJQn1545hAiBCrAPjxmrtL9Xp9zNDG9yaCIT9HkfHHU8Vj0GsDkgjjir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMDc7RkeVYRacvov3lKtwDt%2FJCCVGlRw0bUBAo0z8g1x5mfTNqWv0dW7RHSc7CfwbPXW7gBO5xt8Xka%2BlwJl1BIDgDKzyd4Dfj5qampn6rqMbULP6MIuTpeSBY6ZfMTT5Hq9dW%2Bs6Njt7u1Dgh%2FKA%2FEz9%2FOE5fI8eikrW%2FNXJLK2HeWSSVC4DPfcRlPalsHjux0ty0rMzBjUjxIHVVLpJOKhy5EFHPfCUmGzr0C9BoyeOA%2B4jsHOAIXq44q%2FSrGbtHz%2Br2Qa6Wm7LacPjyqce2xrXDO7lSh62D0SH%2Bg5XJj5HVPtmjSkhBvsc2y0HXoehI8x69Cb7oMXTUshm%2FRDYy53c5UsKDC%2BIrKWxzUdQUpb%2BivXz6ep87jSmT%2F0BBkbJwJsq9bBaTsp7T3tyjOU%2BrGB4U0dimxd3ZSWWn3pvakYUqTMNLx7WGOzfVRL1VBgo%2FBCqRn9ltiXzozswnjgQUJ4%2FH1hQhO4BdFabYrPifNeGdu6HS6xDm77zQXTMeIaLzge4rkxG5uR8N7CBHM3jDje0BeHfATXkPkQ%2FZwkdj9XmD7FnhL3T4zRXmPtxPetnTgeHc%2BUb9u1bue5OSJhLxl7KTFsiecPz1j9kO5crWK8ujFZCHSR%2B8Eeb3xAfFEJ0zDMJA2sw0uN3c9UEw6PuHygY6pgHa3Sa%2FbGNOw3OWfhujb1nanAgKdtm6SMLU2iAJ75kvuX8Np%2F0AwI7aYnRB9NxZFy0NCfjYHY3VRolHmq%2BlUmuXYF0hG4oCEXWNouKs41UNBN25DTC5sdiJfopEyW4WY6SluUpfh4Ul3%2FPVSIrY52H8ALjwZ3xoiAFK4A6TGnMqBvZKh0a5puZOqIWXMR4kvAsfN%2BphxJneZu%2BlRfnq9QoByDKEkIri&X-Amz-Signature=42d9964f035cc61767ef00d103468f98dcd18309d1610726328c317bdbdbc416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
