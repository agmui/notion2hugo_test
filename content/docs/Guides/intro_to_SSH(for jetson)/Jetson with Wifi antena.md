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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNQRZCA%2F20260307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260307T020026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE%2FeZ%2BkLD2f%2FyFpymyK%2FwbGOPtysu7SS9FE1CNptFI%2FuAiEA565SQi01zqii5nYBXC20UY13sGWmOcEjE8Lzmh6dPjAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCx9gE%2BapbIO%2FM8YGCrcA1SHnWeUvdKh8hzbN4vKa1xFsgO1yJNu8pe0XNcqoMAGwYqXMF1RIo%2FN4fW9YbDh86KFBb4Im%2Bt9GICHXryrMGawFyQ9wNd0bjB%2BjRjjzSmGi%2BGQlrRPaGbA5a7E%2BxGE4hASDD0kfHQzZsl2eeLH5DbmmvHjlqj50zH9Gga%2BGeKTFsw8SMmEJruZ56T9GPjlqZbMRh9j2Ec0BQDXEhsAZ1I5SRVGvFWI0Xi7VBbAyvlKQ2rPRTdpCVO2usbcbZpRkSqbbswZ0o2kfMF1rVIcLXYwH9jORmTvT26QB7A3Vt5MOv48nXooZljJiq2OaPH6iQhwxC%2BWXrBbdOdo0qKWnsiyechsP2kCyzCKoTZltD6DNjqFN8myRvYgmPd3YAxaObQpv4gKISxkc4KUaObk%2BDTdvKK0RjqGq4LvYe0pNNXS3PveDua3VmTm%2Bba9LFJowmXs6uufuXHzZfQaxr7tiD4MXi37RVyewoWsJ3zb7%2BCKixHjbV6Gwx%2B8QG8kjF2IhOxzIXQlzupL0TlhTLIw%2FAPkcxMNUyO60lgNizg55lfz9bYOSRNPk%2FB2%2FyRS1jBpcCjEcrTDUsuhAcJbVAXp7evLTC7nMwgset1LFz4UozYJfhi9dafFTi67WEG2ML%2Fprc0GOqUB8cT3j2faSdjgsCRqf%2BVkaqn6HxBP9l5Mzoz%2Ft9h4t06K16lEAzoHxvGG42t0UaXzv6k1uFg8eby29GCky70krv8PrpdsYQeWU4nPMNxnDOM9uyCTzWQQG%2FmsXCqfcg2Wh3Wb%2FTdW0f1GTD78ILd8u89%2FO9aPc7Il%2Bv4hfiuaynY2Zlb6Ol%2FN2QeG7vz1oh5EzY9cvyFColGD9d2iEIIZEf4EZVz%2B&X-Amz-Signature=3de58bfaa2b37e4f342139e5d9d521a2011a5fe4794e925e47c917fa99bbe156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
