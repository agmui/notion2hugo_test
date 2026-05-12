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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC3NGO77%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHd4zMTcMgkU1sg0Cw5DfaZH0ay06ePLqhMTmmddRt8pAiEA%2FemYVip7%2BQJElO8ZTPULOKnKFnq8DgnK8ufM%2BqiBfeMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNC2C8Stz6o3ed5GdircA3y5AbYW5UdtXfKYb9z5oiaabosTzu%2BIDB5h786r%2BHM986rnJmSP%2Fj8%2B%2BtHP9zTE%2BnQt0VDNlqFLECFBxjwoIqDpYmP0sMGwgmivobBak7698HjTD9KoLiWluCtGInbh53opneO724CXfr%2B1n3EXRIhoE1s9T1ddTWGCoWXTprksYPe%2Fnx6IZqK1EOdysxg%2BjRdDj%2BLdRy%2Br52ZDBDq0kWjUoY%2BYH%2FV8Pm5bq2HamXDh87QCaZ0APJ46W2sLgWm%2BQk1%2BCE0uIONOawzSB6XU268OH5ywRkJbnOLZ8QUSEtWuAPynOcIDMgMn6tDvv1CXYnkXbOfvfcgEBDWkvWLGs0U8zhfiJxmxefHMXlMIp24f7J9Zezc4%2BHDydiGVBZvQ3U7QglySS2ukefENT5JrQpM7m7jeTJoG7PxPviXyf96NagCR0KmQLc8N5%2BFDnx0dcRIN6z4QyI9V7bNEOMMDWllrPXXtz1hT7QNvF94uHGI%2BUb2W9uDs4qnoD0jKPmLxE%2FUbPUF%2BUmNyJS%2BqC%2B%2B8godYH%2BwUSWzUhgkpdqt0zc%2FH9pOU9k9sosXUEuyKs1bb7NcFJAeYngixu3rPEIiE7x0vH8abFNuY4vIpJAFZo813QqAfERp0gujzQbR0MJOiitAGOqUBDxFEfNYf3g6rkbN51rQYMa%2Br84p7UmS5lSVTFgA5RUXvf0oYGl6isyuNBzw1cJ7vTfaFDcEBNLQu5jApMESA3nke7EE45RrwePOnBrYXvO2CQGLaTSIR44R6jqGdUR7Vp4oLjE%2BrowKV%2BQLBI%2BZIvLV7RHrAoponDgSOgkpsW%2FK0Hke4sZ%2Byk3WABYosfduKPCmCNOMKZp%2BQ7ksr8geJqikdvKvW&X-Amz-Signature=7367f4b8e6b209a5b54c09416b62378c365ec0cdcc6492e6d9be48448b1bb136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
