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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BTBB5M%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDUZgaXJRc7swkYQOEbpKGVWERAX10Tr7Gopl6zNwIMnAIgHSrETzZ2qvYhpwtgFeJKZookqTB%2B96wz6%2FmTFQRH%2BTwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVn4Nn5zQogphSwlSrcA%2F4qdsTreUgmlScwkIBcOFVC8UWOKbAZD9uLopF0EBd%2B7x0aB4Q1lv0WSRuDXUNoXqjJHceMD%2F28jj%2FLVK1WcKbvdpxNesfCvwwikkbLAWha3285AyzafjKpHsABarT7tfVVeHRxZQ85rHiYCQIQPAbrEMf1rIwkNPVm8x%2B9P0R%2FToK%2FCHGII7hXwI8Ii7H9yFsHHrbU2NBArLAMWNWJnU2MpneqkNFpcEVLfZsKo8TeKdKLMTlQNPQNCkE8cSRrEqIOnWgYVfcq%2Bth5R5p8vCWkzolMDq6LMc9Uutw3tCJM%2BBGEtKf3DFEJIQKFw%2FLKLKGYltPBG5ycb8tJumX9Wl4ACpUZXRLfsKGtPg9bj6Iqxgvnh8ZYiz%2F1ud96lPWr1h3edbtdfC%2Fyy38bpSln5DcJm6%2Fz7zO%2FI7QmvfdOAvyKlYUCxZ5PoCVo7qEfsd0AWq1yn87PD8y6ac%2BPF%2BlzR1eDIuOg7p%2FxKfx4x4jOMiwqaymp8Q%2BbrsAV8LyiLE9Eu8hX01F0uEwQhPsuf%2BvQWoEYLr1dfV4tTQsegI0eKhy%2FWxtHNsQtcHe3aGrfczxLDBNWA4Au%2FMnNu8MrHoeY%2Ff8tvM4dDYtHE1YTdBeJVwQshrkmtMYOOECnUeI7MIbp580GOqUBTNVDp2R8XYlB5bG8bS9dmwGWoI3U4FvBu4ZrGK6d36iwLPH41c%2FxqdqZxY8HiIfo8%2BE1gAq1nKZ8oiuFTFT3%2FFwz8R0lB1m2WGfIakfO1bg%2BrSqPzZ4sUjj1qu3Q8BGV270m%2BQaV3ioP%2BaZtWXMNqHOxzPbkl8GFpRNT2XEXRqMbZ%2BKD7C3b3F9lr9KjUbnk0jfvrCsu95JUQvHbQXTDCPPGxs%2Bj&X-Amz-Signature=2617d636b14cd64b1eeebf3c703653b5c3bc21cd41c9a513e0cdd1f3511dd4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
