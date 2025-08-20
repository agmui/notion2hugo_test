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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSI5KG4L%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7WaNsh3CbCQyoISS9egEuCAfugNOc1ihUtWe6TOOt9gIhAIC3RKVzTKfrXuHJpp6jhblOdjlCJOHVL0KayhtvTqg9KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXOhCt1bXAGHUWawMq3ANJKSI%2FFs7EspoU65FprFw9kHdy%2BsjVA8JxMo2vFFMQBo1%2FIX08akmEs7AHjIKW%2FWCaF2q7%2FmFJ0gn3ZnPESaYUUqAAZOECcDkXDtHpKV0nx6hcISW2kQ3R8bzKJp2VwNdDCEmCsvZtGJK7sSsFHO4cwpNFWyhTm4g3iMGneETaMLchcWX5VCTJ4vIsI%2F3udHzIp1w2UNH6BwF%2FaJK7ufHcMA3u0KZnZ91SlqdET%2FVzlGSBGMId%2BPAl08QThMg%2BStQgtthIX4EG5XilxjMHTU7P9tLe5T5UZ4jBoiT7Qru1wrINQ%2BfThbhCbjaXRIbAJuWd2sAwdfT5hFGic7UD%2FZqf81jz5%2FBYX4u41WMTWVLLH79UOTQ7KWoSzqOem5Zg%2BnU9BQEfevbVt%2FUUmjV36drOuyHDbHdSuoxXXwFoCHEDLxCRtrIb6GXt4u1VqOSjhriNnZhdNtqWD97862EalNtmcBArEdWXtIsYyHYxTq59OiHOC%2Bps6Fi7N5EKbeRGmzAgvJO75AOnKBT0Nm8V%2FeFEm7tPNVvaYZbh85nCV4nzwAHHcDmOhOKbNqy0uJwRua1T4Nsrq73Y%2F7aLjt5TeOmJbkRaEhKXM%2BpQTpT4Sy7%2FC2tfGTBQXTXmbqTWNzD3ppbFBjqkAezL3Lnt4mhMyH%2FJtcqKL4ulNxnnxWJokKIbJMZyrj0aFBXTvyXUvwG0fV6VT%2BoLtM71JlIgufJF827DrswwoTARmlJthstgA4mGNW4SBZXkA3XNzDYwSf2Veu3q1Mzs9rBZYrtP9%2FRJyDK8IQA%2FFD2cwGk%2BWXkLsmja7Vtg%2F%2BeXIH3Ii%2Bl8sVrzhTMOTBBLwo0zEP1ORgrLDTaDAHb1oeyr6by6&X-Amz-Signature=77dc941445620b4713909e128b03309bd3bf2d4f0c720bb23dbaaf0b9fc22588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
