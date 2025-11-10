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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5SUMH5%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEhkgMIjkqIn73ifrfVaXr1EzybfdTAoEv8%2B%2BQ6uVDUGAiEArGv7mAChfG4EZSDRRC25gSDH4ak2UYvFcDdJpDczBKwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIpKQ%2Fgizt%2BMzMHCrcAxsojaKAZUZiBBIwSEln2glCcPXtrtNt1gvomFPco9MFj5MPiWDMpz3xapBWZFDwN9btUZf5kMdhxSx12vIzZROkaQHOOB8%2By5dJAfKJUJ2fjVcGtN7Omvhb7nLlMrQKabkf%2BXcQcsrZW1Ts8RgaNr3PXiS7a6cpjiALndkhCoVLnhygnKvLcjVZtxkYyTmUUBLUNnT5xIDblyRiVXZ2Ge2sHYlMppw04dwpEnuFLkhCsuvbzkG5mO3%2BWGgc7Ry9%2FOhYIHAS%2F%2Bzmohpt1Zvj8WNnnub5nDkG8iTjHqBokTl3Sj%2FdbpcfHMMDZfTfImFoHAuQv1%2FMJs650bzOu6pO2wM6fFlB5uLjUWfEZ6Yp%2F930IEimviGDTyhXqzoU%2FjyaUvi%2BvrZQX4tXXfjGcS03sRtWB49ihJjjmygjb0f2Y6T7NKW%2BgRPx8rx8peH%2BtRB3VDPS2FnhyXBNC%2Fwe%2Bj4KESkTdl6TB4ROaASEKLZHFUOqUfRrTHRENeErsmdGzHDQcRItMaFmagh%2BBJLPt4TYQy18z1R%2F6srNwgpDCXbt1jd4GjBf40IxJknVywEb8D98qUGcrRqaEDU1frvRXExaos23Pfp%2BUk3Q17h7l7zuFneG6Q2ILjBythHHGjgDMJq0xMgGOqUBLL%2Fs2pj8euX06LagnNXwr2ezHvuIv%2B%2BcpXK2NIAd2hFOP%2BrdEsvKYp1q06jL1BpwocNfOYKc1CKQJZo%2B0lOwep%2BT20WYXB6L1PqNy5HCk7c9osbpf%2BKq1o9qQejoq%2BqYxj1vpBo1NWUEDpYrborZzEcAV%2FMBpjrpnqnYlYndVaa0CAQ6v6Q7OYi0wghKa0xhZrNN%2BTnn0E%2F08kYqCazbdh%2BJQNdU&X-Amz-Signature=3a2ff9b98afe0e9a5f761da40cfd258bb6d7b8ce2fd49e4e83e303bee4132e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
