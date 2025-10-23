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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HJM2UD%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHfBFnvALDAZKq11YNkp8%2FBl%2B6RQbcro09OicEa%2Fs%2BzwIhAOni8bJ478XZwBa70dhqUVFxYODxkhKkVE%2BW1apWz6UDKv8DCDoQABoMNjM3NDIzMTgzODA1IgxoB6%2F83SXeCacMFyMq3AOemXbYY0WTDmH6ZmKl5ezyvPSnQVq66bowJvOmUiOGTHD%2FwXlz8H4Ap3%2B6tXSHV19zKN5%2FkvqhNfxDJkNYSLL2XEisXl0Xa829Skb1jbuZQwgybejG%2FrpMZP0Zl2J4vS2rXBxUpCjIBZ1MAVL5KLlhcT3r7zjA6Xjkjs%2FVxrwqK5eaZSG3wrfXA4L3hkVz%2F%2B9CMJIHL0g7%2FsMo2HPZbuRy1Zwhc9Hh10FZJhxExW8OUy6CAktc%2BCbHaa7gDFUWn%2BKr87mZP6kbvLv4mIaidRVqGm8QtHmW21TNk%2BuP83y9Yv55E4VGuPqlfS5IDuI8buDEd3q3E5tMZK4x3GcEVM%2FSESKWKq2f7MGLJ01I25%2Bnt84A6ynFytogF8CPnGpaIySP1SArGahYPYhm87algV7LqmLfXOfadlaWIz%2Bhj3FC4BpNOLGc6F82n9YLTqi4dZXHZxUNtsoUtSHP%2BTA2TSTXbDhY31Q329bq%2Fnc8Pwo8mx3QeOjGJK2YM6MU9q6JuyFQijsgzdqDiFBmpSPuevsrQixdCv2dX5Ydg0jRPqL07PtZqw8cCRfbHDmXiql1H0lsPZqd9raryGJDQh5Tvq5Jin1DcYJ%2FYOoMN%2B6EySRfZnESBnyKXGpEfJneaDC97%2BXHBjqkARnSxoRuMlxmgeW0OPiNjXHu5Bk3tJ1GUbCAHez3zHz4KHJjPVAFbnHQrKsoQy0mjQHGDC0cOXjm7JCLNFAVE1WO8q65QC1TCI0XbJ5xeRqHx7MOPYE%2FpmQmdIIzH2lI2ytjfIuiCXh3ipO1U7yk5mx0tiyhGk4kb1wIvb0yAkS5Wg7efD0A9tK%2FKf4Zapu%2Fgnj5WTjieN5HANBq3B0YfrvTgbPA&X-Amz-Signature=a22204e20ec5b20ec817d10913fda08f80f8f869343da5de190287fffbe997ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
