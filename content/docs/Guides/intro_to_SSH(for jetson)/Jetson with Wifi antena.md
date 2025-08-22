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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2LEZXJC%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC89ptLvGvAzyk8HVUUhw7j4qExpCjw0Wol4ElB3lOc0gIhANXP63nXqiHnro3mbq7H%2BhDlLZzWSULaj2IpIJ7ynnARKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZT3KWE%2BZ3A9bZl9Uq3ANB%2B5%2Bs0QO6Ej2LWJXPOTvpCtBYot3siPTZvK6B2iVP47dv1lhorFAggri%2FfwTzytnJhDKx6HId9b56H%2BtSYdkuzkVfpIlrQivFYnzv%2Fr1k3CevR1bhDiKHxLjXVvzV%2Bkd9EWZPKdROoKZMVzIPKetgHmIKOO%2F2Iq2bmhuNdYx%2BMw31vhilCD7dD5ISdet8rZHx8Am0uctF1zXZmE5WJo3KcqHcE3AjgwId02gzb6P29ScIdBdLeCeLVcSYx7j5w7xpl9%2FIIJbj6kgtzZzTjZZbmgR1ZTjSK%2BfaHRM3MDIZQM22rVZ%2BUOo1%2FogbnaNYkwiNM%2F9%2BXEDY6BAl58or8gSLxhSWAO2SB6MfDzKJDq6cNtIRRtqBuRIEUAJgx2lCtimmkKQFjpvW8hjtFHDHdw8uv9gz%2FPY6brKre%2BLNHD9omZ0Ouj0IpC0X9cXTRYFs%2BYRmn7mNkF925y79vFyFeQ58U7Y2G%2B1J1v7KBife6wfwiX%2BRWHU%2BWiqJWIqXrtwGKGIOiWZUR2btWQboWZJPIFWqjeC4imSIBkpzCZrUU3ZjaDG%2F2pllBdlAXoiSSu6XxEtXm5QfDrR55gZlVGXLcnTAekDsR7gyaBnfoqx70yufLpAmg0TBRobdZfcJJTCD8p7FBjqkARn%2BU3pw98NcUxGEy%2BAysEnPExSPCvCCQS%2B9Z0F9XuMjpshSP%2FjGO7Ta8y7NqeQPmLctIAYqymxA3d%2Bknbgz8wQDnBCFYhF84SgSc9fRTQKv88CwHu7%2B7EZP8KC01r7gQSupT82CekKsKSUXWBkDLo2E08G2PM62dPUzHSPQB4eg779pkRCC%2FQ3TK0faNaazrmozOWN5XsM1d3eDL3eZ6d205tFI&X-Amz-Signature=d3c874e67a4193859b5434ecebdafec198b73300d0c9ab14d49947ecc52e4952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
