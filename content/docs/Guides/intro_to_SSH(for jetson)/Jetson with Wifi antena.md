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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U3OACCQ%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNKK9b31%2BbEFerIgZZdrnLieUw28OzG%2Bho5bzl%2B63z6gIgD0EjKEeaUqfH2vsyblCAdF152uF4r9X0jVoM39PvidgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcoj8CkSGT3Ixza0SrcA%2BTp%2FnwPhzynXM%2BM5%2BPA2zr2k8n9PVvlJzcaK7JWxUXey4W6IUVAO9NtHsDPLSH6Y80DExjqD6bzLghkacDl0K49TeSYdb5%2BYvXZlIeUhDMC72%2BJl%2B7BZarYWb%2BKzklv%2Fgk2vhHO4jyLQYWUivlQpG4gQFdo7fTMuuVTFAlwBRjF%2BoRqa1C58RtOEzc%2Fm%2FbVjcwdmRkzf5wTvi527itZRTWc0r7Ey9gjhPmjO8gVyHnUQQsGAa2q0YzSfelSRm9V%2FFWTdPpeeUOi3%2FLvi09cJsLc6rv9ySGrzoJKe5%2Bp5BN7L%2FcBamJ4fYKJ3BGkhZqqfYAd1LSwLRW94jpZ0pLIcIBSGzcLoyr7OGeZOmZKaukAL9vyjgTd8fsL5AlSGyWKL83FvccnZo1WGTkb8fuIDCj7Qf%2BJA58sNgWNd8Qhhztx%2BsyALFCuleGa94hoLT5G9kBWOlyUs58V%2FHp49OdGYkIVy5IVA0UrCY1ipZ6AsvAgf1nNu9flSlBA4lk1u3m05YNJXeSbkcTU34lMlwUr%2BzR6sepnrCpYhDBWP9OF%2Fj2rlIVBips%2B%2BJZJ3agd7INqk%2Bd7%2FofTmONCTUnSi%2FRaSQ62YRcIrHOe1p3RPRfneiXTDytz8SrVFTHxuUrcMIfUoskGOqUBbl76r2ohJglRSZiX5GS9vpGPojfPrEYlxInpdRRsqeBQm7x4I3GiSeEOf9xSQIRn88o1m6IawNfRv9NNjMQQkOeYJnu%2Fan6DhbKHneKux3zacyDQ5j1I8%2BpDgfAx9Zg9weVqITiWhYwwMYqiyNiCUrS78NeYky2f9Q20SvGCbqzMmwkBczyKaIF4kqjL5i3am8lliSWMsdQR7U%2FzWbZF%2BH2GU8h5&X-Amz-Signature=3e4eae40b6467ad9c7c3a210fc056b57db4bd2644057da829f0dff51265e64b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
