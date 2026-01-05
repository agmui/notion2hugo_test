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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3BPTR23%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCICrOdb7lIY3HgwZiIUDMLtzYXcY46luMA9B7lVdJnau4AiBLB%2BtJf%2FydQ2J92%2F96IUS9lYOD3FYkp0LcwXeFGgoPxCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMsgklHyZhrAGW9H0aKtwD7WnVugcE9PZzQUwtPycWyhmImc3ISEeQVAA0ASXJp6UHFAcXYYX%2Fx%2BgcedS4UVQXvN%2BODneQ%2BWu%2F6qmU%2FdEHZuunx4Ug2yjeDnQcckiP2doqmFZIXwKOopv0xmuUr8MKHL%2BpBLn7EvgUcALXJYWkXwiI%2BO%2B6MDiVmz39akqulvH825GM4ojuCo9Wrgjv0uHpqW4oOp20r9ekzDqRfIJSM0DmwgxpfJwxyjcYOnaFeEaNyjfyC4QlS%2BVZXjahH6bdn8NG8vS2VNn%2BaEy5i0jmU1vgyVM1YwBv14GU9OfDwJ74y%2F7AeRjck8dpMRasEz8NKLIpCVco6RkX8gZT3CkHQDz28X15js6rDBpeF%2F8eGMvHmaBf9DhSsELURZ%2BRoOVAW6f029lEJlxeeoRQIRD0Y%2FIOJIiP3pYd8KaiVlOh%2B4UtWlLlZgYUANqBzJ4Dr9z9w6lN8GrWktdqoQsFUiZw8PA04mn5%2BZ8MfYdjaILbPopROgyZc1Ix6c%2BUSxqulGd%2BBP4T1YyZKccHmS5LubQRl8mp1S05sBsu8Gpa9VLsbMMauOWZFIkmUY6nvwTrWU3Z2t5zUes%2FSDBXWyXMbhhZY%2B6peHoLCHyiTDgFUc6sDbexsQjTp3CCpqz91oQwk%2FrrygY6pgGGnQajWSWRQ%2BS1aZqqXF%2Bg5DMRHcoemwqeNb%2Fey2k1%2FoxWwEBmN7DVICatbCG%2BripPNBTVjr0E1SGzJjmz5tv8bAaPw6WFS872YP974opWkiKUq%2Fg6kdaoROuWSRZubJmpYLafwEqvz3k7Lr%2BZnaycITT75P2gq9oIugL7exYYhxFekoPAJCki4aO%2BQzG%2B9o6A3U7zGgeXNU%2BjwU86jUrx6NCkjjcO&X-Amz-Signature=b30a478fe9dd4c9dd012e61e91885509e6a2390de8f89c804ac7977fff94e12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
