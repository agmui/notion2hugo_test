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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS372KSP%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnjAO1B2b0X7wXaX8be%2F9yp0xbiqw0xTLy7P4wWJn17AiEAnlTyESiqaMjz2lFc5ujzHuOq6%2BTGp0NK0euRiFEw6iYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDkOXIF9fcCjIZJmNCrcA%2F6h4ZfReRFBtTCxLOuePiSV5J9el7U1C2D4%2F%2FEFwq7dDX1COroDyKtWdwe%2BaSCSNxdJjQoHZyEdNoQhG0Zvczk5RDE3MY1ia2meFeGN%2Bk3QuaB%2FVwcmQ0oTsGzInaYaOC3gEv2n3OEI%2BVwrg5GpIcxH6mLyMg%2BEgjbxz9u0VmAqaqGNJOqiRX1xXIOf2%2BD%2BfS8gsjk%2FREIaxOvFouT0leSpRWGhb%2FSZuzdUf2M%2F5PySUx4tCDDSKWdYs1cR3f%2BEOOIUtXPiFFOovne1gv8FzRUoJTcvG6qjp9iCbyEu2Gn69ekmiyu8WR3Nmmcx%2Fk60vpuGO%2FfIAtd6AWi7Uz14K8fcAYcom9xEgp7Vc5lGoeljAk75yQZ9tAWypGSbX4Ra3wYe%2F0u0OXas1RTghDHEGa8wZShXgHm9aq9CzcChJCmzbaDTJOFFe21GforikmmvgG9RD7gINW%2BsOsoStGWYfFZ2OFHEXpZ3eEJK32YrZB4FW%2BhDkVYtUdQCkbzQIeUx6T%2FGxNHtSFAaujEvCwEolysG6bw4vIxdeS4YRlYkA7B1NJJAHGJYhLuS3FJYNDb0x3lTkA3TGF381eaxDIBHtPYzwzTJM4JCJCF%2BZztcLpUIx9fTnbmWTLl%2Bh01EMOSptscGOqUBro2cah%2Bcu1Mf2CvQ22U3gc9F5GRlz4llBJIK3GbW7yJFWSenxkIM%2BN2ZGE6nP7MEmlXbd8GnsxKkUQhNm1bC8MsPcHmmNtXTyuLv0amhPId7qcfBVX8cuFt4%2BohdS4bXmOmkcc7SmQWmL%2FX2HZhAjS1Pom9Hs7aZQeNAERzrGWGtkaIVNbT6JKrUh0xqYWeavs8YxQmDSxyfS6Px9jz3bSrRvWZZ&X-Amz-Signature=28687c1cabdec271184c4f55e20c307dc1eaa5d856ee162945985acff3e366b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
