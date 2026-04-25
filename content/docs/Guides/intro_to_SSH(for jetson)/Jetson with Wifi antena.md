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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ALBHNL%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2oX8u5hO9JZorUFkwNW40tYB8xrkJyKnsulJbPK7uwgIhAOO%2FV8S%2BPbYAJX%2FzKD5%2B9teLTQw2ya530jwU1A6WzFezKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzzuqDkMo130ZIbxMq3APJMJtcnZN3jYOyjE1TK4bMSYgW2oX%2FovE274IX%2BUDeSy19tCmXhG8dfHsabmPLmw18Yy4Ol1L9BzutwFWhZ9kvivGFSMGoZqdLjq2oJ5HPYG6wPCxRGJkavY5SMgZXC5nCwZi9b8fDWw1LMBidSiJcHnzTFwKEMKc5AwQqwqsf2GAhs2UeuCWssRFn1NhuZ%2BZcqEYtSXQpXBa1X3CIF%2FArSx8eBissV1K26edmkPLoQWAPr9JUuS78RL1j6%2Fe20sM3LH9ndJfMgT4LWtKjSqSwzVpWOZVj8YdnZNAwk5H7iwxlGwuWPKqfUTPhfYwiSjojOTD0dmrDRZ5u8nHufaBL9NC8MxGbYngLSDijkdENht8qg6ukc7F9vOTNff77A8BAxt%2Fhh14T9EwZAQNu98bPD7btANbBxAU%2BbxrpE28UCnl4BrHIgmRenaMQBkT%2BdWBaN0PQlv9cG3aKkOYZkhosRg3Vpnnup7PpobnwfwkNQvdELJzVP%2BWwC5gtKYzPbrlPNMVjyXAY92r1XcQuHpihZ4kN3r2pY25Dn1KL%2BqDvt9hs5f0QoJOv81wfmO4iISFxZf1BruE6sQNo4%2FueLa4m104gcQEIuQ8D4CGZlvtUFeyu1kCwk3koGRA9OjCWurDPBjqkAaUTDRxZepLkVX%2FRBZIKA6ctu6r65jj6DTdS4z9gRZgR1ziBau7rDE4dC5TjZSW8oDMM387s25KeQweQp5c3uEOMm%2BbiLc7%2BA%2BZYmEEvphH1h799GGqY1uTiBmIV9jd6a6nb3cvwFzE9u7oB7I0kdtxbh3X8uhTfZ407iZO62DSnEDiScvAe3cwJ1DRTtBS%2Fs%2Bi8MV%2BtPhwcOhj55177FpAzcGnn&X-Amz-Signature=8848af10dac027886a6e28453b088f39e3abaa07c503fbabaabd99631cafb6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
