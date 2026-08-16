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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ISHZDNG%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCGMzWOIvxtG2zFahD2tT%2B38nTUHFeCt3U0dM6%2FxZ6vwAIgew1aaLwS7RJkNx8udHPZpGxKIbVYxYiI%2BT17F5VGfvsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBDsClKm80L07JgpWSrcA%2FhEdz9tSuIvDiPJaj2Zf%2B1PHfpWWlE76Nu%2FqISQc2qPk4C2H0q8LgykQBykXDiViqxeLzg7cqKUSrlZayVx9zMd9Y%2F0qeKfOlOgPooDWIbrWMlWX2f7AVz7xu%2FzUpA4xOl9RTaxuhPLe%2F1bhwY8ubx0sGXxCNDiKrM%2BVQk1z1im2qwkFtYfscG6p07NFPyEX%2FebjJffkBbysMx8D%2BOHNWDR1SXVP47Ht7%2FYmTQubYZCru29gUGfPoLs%2BMM8m8JjIQEJfZGJiujXof9NOOq0owmof12LzzpT8DX7HVvbrXe%2BFkyjLRAFPFxXahqZv%2Fv1ptUB2gvbhs3cQvHD0p1OojsGk9nuUT9rbQ8ERxK%2FSG1pxixPdyDpMWbIqsp4ovIixLptmnEVUn%2FdvrENKVscNC%2F3ChAILkLN0YfAFUiNLx4e80xE0tWHIHVvEQtGY%2FtjUDdBs5mElUkWg1UtcPQgNc4Vk8BtutjMw%2FwzS4Ft1M1yBcqooCuJDfONjO0dKdDQSsZrEOROoUiI%2FwAnfthj%2Fx333upaf%2BzbxxBlZ%2BnPt0hU%2F7GuDIc99GMVz9jF7vNExKiwlYWmxYDoItWfZH%2BAAmOfqPmPAYAScXYRUZ4p5drmDIDsvgwKUOYMHGRnMPntg9QGOqUBlWMZadzsgnSzBUDWn9DsqKDyIo4uS1MqtiXvtP2XMHZw%2FFOrpT7U6NJHaoQmsDZkxtxIgMH4xwbhoIpUIOG8jyOzMmSlVCXhvvp540ppMvHYlMexzzdGnyCvdLo7l3xfFR9Jbn1LIjnRf%2FsLr%2F5lZZntScRmk45eSzAuw0pVkCnc9SnRqnJIEgtHTEyNtzhL81aIP3n7HsCxfi7hBPoVahPga5pa&X-Amz-Signature=67e01ceac45ec30347feeb62c4a68d99093fc666ecb74abf784d52bc0c265199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
