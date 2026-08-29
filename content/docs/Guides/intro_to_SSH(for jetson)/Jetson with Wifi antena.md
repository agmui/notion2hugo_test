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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KPI6GG%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHNaDqxp6hAgmjsIiQg%2FmZSRYhNVEXXN1Bj3K7R8UN7sAiBf0pWkPjDd3quel3sgdBdxFKhxlAMa2PtSddanceXLvSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMPmTmXgtYYqZODlhyKtwDHb%2F63DPtVjG%2B1MVDgP1%2FzbXpSqYu7gZy0LxUL5BD4Gm%2F7r7EQ6AHXX9xyt%2B43gL3iYwMiwUl4ddV65So0XAU0BeahQo5udK4JFfwCNu%2BDidqtbHNIEyH4C%2BJc1OgSPYgT43cLvUEZDnon1delggI5XxCuSNykZ0cdBusXxrRl3jBpJsTE8rIQum1ddMxVVCzPYThLHkrXjVmLRbJ8ZXW6D8brMEuTYaY0bspRC0lU%2BcZbhlTjoZtpjSuStIudUsH6YmSjl%2B%2FlojB8hix3tOs3RLvLAG6DScZAMtVZpDlAJH4QBvYPZIZmuxgAxZJcgp%2BKSQLKRIf5Un2ttH4USAY20YbXAYgxF4W8mamPEgaos%2BR2hKGEvui6bcz6JFjSPuQyS7Fh0pB3lLNy%2FEis7zZgLOhPELu6NJEIjpWi5%2BSG%2Bvhpcrkud48QmyQ4WEfEJjid318VjxP4rDRXlWHtPITpxnCD1%2FERa%2F26DPHo9baXTsY%2FYi0pU0Q%2BgNBRQ2MC47oYlVVuBvnvKKsUDU0uXpoMoIt7PAqYH8Z66IfGHybgnTjW6%2BzH1lKCqw1rMytWlWTmcyAX4GtkuoG7lKqdE6GLLBr%2FO9Em9XBT1J9uj2rkB2vFZiNDuMOdsIZ3Low6M%2FJ1AY6pgH4oPzborrd6fWX4hie5qzIshwR98LKQDPA9tDfk0Yx5x0e%2FBSXUSQ%2FkgkRrWpDnCWeqOcE8GT54YSX1jsMBWZCbGv%2BJh0mi89Ftz%2BwrjmaAV1W9qEuaQ048Zdj8zuG8SR%2BV8x0LY%2FiQCsFSLRHDx6A1plgSjzcLwx%2BAeN%2FjyR9NAh6J8eT8wWYFC2O%2F3QygbMJkuobSksJwBMSXLSa8peqMDYbwSzl&X-Amz-Signature=b3702ca5274c79477a23e024a0e905b86e59dced180643a3392c32d708c59e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
